import React, { useEffect, useState } from "react";
import {
  useHandleResponse,
  useValidacionFormulario,
} from "../helpers";
import axios from "axios";
import * as yup from "yup";

export const FormSedes = ({id_sede = null}) => {
    const respuestaPost = useHandleResponse();
    
    const schema = yup.object().shape({
        nombre: yup.string().required('El nombre de la sede es obligatorio'),
        id_empresa: yup.string().uuid("Seleccione una empresa").required("Seleccione una empresa"),
        direccion: yup.string().required('La dirección es obligatoria'),
        localidad: yup.string().required('La localidad es obligatoria'),
        provincia: yup.string().required('La provincia es obligatoria'),
        pais: yup.string().required('El país es obligatoria'),
        network_Sede: yup.string().required('La dirección IP es obligatoria'),
        // gerente: yup.string().required('El gerente es obligatorio'),
        // coordinador: yup.string().required('El coordinador es obligatorio'),
    });
    
    const { register, handleSubmit, errors } =
      useValidacionFormulario(schema);

  const enviarDatos = (url, data) => {
    axios(url, { method: id_sede ? "PUT" : "POST", data }).then((data) =>
      respuestaPost(data.data)
    );
  };

  const [empresas, setEmpresas] = useState([])

  // Función para enviar los datos
  const onSubmit = (data) => {
    console.log(data)
    const url = id_sede
      ? `http://localhost:8080/sedes/${id_sede}`
      : "http://localhost:8080/sedes";
    enviarDatos(url, data);
  };

  const getEmpresas = async() => {
    const response = await axios.get("http://localhost:8080/empresas");
    setEmpresas(response.data);
  }





  useEffect(() => {
    getEmpresas();
  }, [])
  

  return (
    <div className="py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="mb-6">
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nombre de sede
            </label>
            <input
              type="text"
              id="nombre"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Nombre de la empresa"
              {...register("nombre")}
            />
            {/* Mostrar errores */}
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </div>
          <div className="mb-8">
            <label
              htmlFor="id_empresa"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccione la empresa
            </label>
            <select
              name="id_empresa"
              id="id_empresa"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              {...register("id_empresa")}
            >
              <option value={undefined}>Seleccione una empresa</option>
              {empresas
                ? empresas.map((empresa) => (
                    <option key={empresa.id} value={empresa.id}>
                      {empresa.nombre}
                    </option>
                  ))
                : null}
            </select>             
            {errors.id_empresa && <span>{errors.id_empresa.message}</span>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="mb-4">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Direccion
            </label>
            <input
              type="text"
              id="ejecutivo_cuentas"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Dirección de la sede"
              {...register("direccion")}
            />
            {errors.direccion && <span>{errors.direccion.message}</span>}

          </div>
          <div className="mb-6">
            <label
              htmlFor="localidad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Localidad
            </label>
            <input
              type="text"
              id="localidad"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Localidad"
              {...register("localidad")}
            />
            {errors.localidad && <span>{errors.localidad.message}</span>}

          </div>
          <div className="mb-6">
            <label
              htmlFor="localidad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Provincia
            </label>
            <input
              type="text"
              id="provincia"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Provincia"
              {...register("provincia")}
            />
            {errors.provincia && <span>{errors.provincia.message}</span>}

          </div>
          <div className="mb-6">
            <label
              htmlFor="localidad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pais
            </label>
            <input
              type="text"
              id="pais"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Pais"
              {...register("pais")}
            />
            {errors.pais && <span>{errors.pais.message}</span>}

          </div>
          <div className="mb-6">
            <label
              htmlFor="localidad"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rango de la sede
            </label>
            <input
              type="text"
              id="network_Sede"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Rango de ip de la sede"
              {...register("network_Sede")}
            />
            {errors.network_Sede && <span>{errors.network_Sede.message}</span>}

          </div>
          <div className="mb-6">
            <label
              htmlFor="gerente"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Gerente
            </label>
            <input
              type="text"
              id="gerente"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Gerente de la sede"
              {...register("gerente")}
            />
            {/* {errors.gerente && <span>{errors.gerente.message}</span>} */}

          </div>
          <div className="mb-6">
            <label
              htmlFor="coordinador"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Coordinador
            </label>
            <input
              type="text"
              id="coordinador"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Coordinador de la sede"
              {...register("coordinador")}
            />
            {/* {errors.coordinador && <span>{errors.coordinador.message}</span>} */}
          </div>
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
