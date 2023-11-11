import React, { useState } from "react";
import axios from "axios";

const ModalAgregarServicio = ({ sedeId, onClose, onServiceAdded }) => {
  const [formData, setFormData] = useState({
    numeroServicio: "",
    observaciones: "",
    proveedorId: "",
    rubroId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/servicios`, {
        ...formData,
        sedeId,
      });
      onServiceAdded();
      onClose();
    } catch (error) {
      console.error("Error al agregar el servicio:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-secondary-800 p-4 rounded">
        <div className="flex items-center gap-4">
          <img src="/src/assets/hiperpbx.gif" alt="HiperPbx" width="60" />
          <h2 className="text-2xl border-b p-2">Agregar Servicio</h2>
        </div>

        <form onSubmit={handleSubmit} className="my-8 mx-4 rounded-3xl">
          <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Información del Servicio
            </h5>
            <div className="mb-3">
              <label className="text-lg">Proveedor</label>
              <select
                name="proveedorId"
                value={formData.proveedorId}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              >
                <option value="">Selecciona un proveedor</option>
                {/* Opciones del proveedor */}
              </select>
            </div>
            <div className="mb-3">
              <label className="text-lg">Rubro</label>
              <select
                name="rubroId"
                value={formData.rubroId}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              >
                <option value="">Selecciona un rubro</option>
                {/* Opciones del rubro */}
              </select>
            </div>
            <div className="mb-3">
              <label className="text-lg">Número de Servicio</label>
              <input
                type="text"
                name="numeroServicio"
                value={formData.numeroServicio}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div className="mb-3">
              <label className="text-lg">Observaciones</label>
              <textarea
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-1 bg-red-500 text-white rounded"
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="px-4 py-1 bg-blue-700 text-white rounded"
            >
              Agregar Servicio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAgregarServicio;
