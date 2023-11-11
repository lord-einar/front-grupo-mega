import React, { useEffect, useState } from "react";
import {
  useApiCalls,
  useSoporteCampos,
  useValidacionFormulario,
  useHandleResponse,
} from "../helpers";
import CampoSoporte from "./CamposSoporte";
import axios from "axios";
import * as yup from "yup";

const FormProveedores = ({ id_proveedor = null }) => {
  const [campos, agregarCampos, eliminarCampos] = useSoporteCampos([
    { email: "", telefono: "" },
  ]);
  const [rubros, setRubros, datosProveedor] = useApiCalls(id_proveedor);
  const respuestaPost = useHandleResponse();
  
  const enviarDatos = (url, data) => {
    axios(url, { method: id_proveedor ? "PUT" : "POST", data }).then((data) =>
    respuestaPost(data.data)
    );
  };
  
  const schema = yup.object().shape({
    nombre: yup.string().required('El nombre de la sede es obligatorio'),
    id_rubro: yup.string().uuid("Seleccione un rubro").required("Seleccione un rubro"),
  });

  const { register, handleSubmit, control, setValue, errors } =
    useValidacionFormulario(schema);
  
  // Función para enviar los datos
  const onSubmit = (data) => {
    const url = id_proveedor
      ? `http://localhost:8080/proveedores/${id_proveedor}`
      : "http://localhost:8080/proveedores";
    enviarDatos(url, data);
  };

  useEffect(() => {
    if (datosProveedor) {
      for (const [key, value] of Object.entries(datosProveedor)) {
        setValue(key, value);
      }
    }

    axios.get("http://localhost:8080/rubros").then((data) => {
      setRubros(data.data);
      if (datosProveedor && datosProveedor.id_rubro) {
        setValue("id_rubro", datosProveedor.id_rubro);
      }
    });
  }, [datosProveedor, setValue]);



  return (
    <div className="py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="mb-6">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre de la empresa
            </label>
            <input
              type="nombre"
              id="nombre"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Nombre de la empresa"
              {...register("nombre")}
            />
            {/* Mostrar errores */}
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="rubro"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rubro
            </label>
            <select
              name="rubro"
              id="rubro"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              {...register("id_rubro")}
            >
              <option value="">Seleccione un rubro</option>
              {rubros
                ? rubros.map((rubro) => (
                    <option key={rubro.id} value={rubro.id}>
                      {rubro.nombre}
                    </option>
                  ))
                : null}
            </select>
            {/* Mostrar errores */}
            {errors.id_rubro && <span>{errors.id_rubro.message}</span>}
          </div>
        </div>
        <div className="flex flex-col md:flex-row py-8 w-full mb-6">
          <div className="flex items-center w-full">
            <span className="mr-3 inline-block align-middle select-none opacity-50">
              Da servicios a:{" "}
            </span>
          </div>

          <div className="flex items-center w-full">
            <input
              id="Megatlon"
              type="radio"
              value="Megatlon"
              name="empresa"
              {...register("empresa")}
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Megatlon"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Megatlon
            </label>
          </div>
          <div className="flex items-center w-full">
            <input
              id="Fiter"
              type="radio"
              value="Fiter"
              name="empresa"
              {...register("empresa")}
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="Fiter"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Fiter
            </label>
          </div>
          <div className="flex items-center w-full">
            <input
              id="mgft"
              type="radio"
              value="mgft"
              name="empresa"
              {...register("empresa")}
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="mgft"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Megatlon y Fiter
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="mb-4">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ejecutivo de cuentas
            </label>
            <input
              type="text"
              id="ejecutivo_cuentas"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ejecutivo de cuentas"
              {...register("ejecutivo_cuentas")}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Correo de Ejecutivo de cuentas
            </label>
            <input
              type="mail"
              id="mail_ejecutivo"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Correo de Ejecutivo de cuentas"
              {...register("mail_ejecutivo")}
            />
          </div>
          <div>
            <h2 className="mb-4 border-b text-2xl">Información de soporte</h2>
          </div>
        </div>
        {campos.map((campo, index) => (
          <CampoSoporte
            index={index}
            eliminarCampos={eliminarCampos}
            control={control}
          />
        ))}
        <div className="pb-4 border-b mb-4">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={agregarCampos}
          >
            Agregar más campos de soporte
          </button>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default FormProveedores;
