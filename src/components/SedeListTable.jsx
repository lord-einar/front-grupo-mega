import React, { useEffect, useState } from "react";
import Paginacion from "./Paginacion";
import ModalProveedor from "./Modal";
import { Link } from "react-router-dom";

export const SedeListTable = ({ sedes }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [sedeModal, setSedeModal] = useState(null);
  const [paginaActual, setPaginaActual] = useState(0);
  const elementosPorPagina = 5;
  const [isMegatlon, setIsMegatlon] = useState(true);
  const [sedesFiltradas, setSedesFiltradas] = useState([]);

  const paginasTotales = Math.ceil(sedes.length / elementosPorPagina);

  const SedesAMostrar = sedesFiltradas.slice(
    paginaActual * elementosPorPagina,
    (paginaActual + 1) * elementosPorPagina
  );

  const abrirModal = (sede) => {
    setSedeModal(sede);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  const anterior = () => {
    if (paginaActual > 0) setPaginaActual(paginaActual - 1);
  };

  const siguiente = () => {
    if (paginaActual < paginasTotales - 1) setPaginaActual(paginaActual + 1);
  };

  const handleToggle = () => {
    setIsMegatlon(!isMegatlon);
  };

  useEffect(() => {
    const sedesToShow = sedes.filter(
      (sede) => sede.Empresa.nombre === (isMegatlon ? "Megatlon" : "Fiter")
    );
    setSedesFiltradas(sedesToShow);
  }, [isMegatlon, sedes]);

  return (
    <div className="p-4">
      {/* Toggle Switch */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={!isMegatlon}
          onChange={handleToggle}
        />
        <div
          className={`w-11 h-6 bg-black rounded-full peer-checked:bg-cyan-500`}
        >
          <div
            className={`absolute top-0.5 left-[2px] border border-gray-300 rounded-full h-5 w-5 transition-all ${
              isMegatlon
                ? "bg-orange-500"
                : "bg-yellow-200 translate-x-full border-white"
            }`}
          ></div>
        </div>
        <span
          className={`ml-3 text-sm font-medium ${
            isMegatlon ? "text-orange-500" : "text-yellow-200"
          }`}
        >
          {isMegatlon ? "Megatlon" : "Fiter"}
        </span>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SedesAMostrar.map((sede, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg cursor-pointer transition-colors ${
              isMegatlon ? "bg-orange-100 hover:bg-orange-200" : "bg-yellow-100 hover:bg-yellow-200"
            }`}
          >
            <h2 className={`text-lg font-medium ${isMegatlon ? "text-orange-600" : "text-yellow-600"}`}>
              {sede.nombre}
            </h2>
            <p className={`text-gray-500 ${isMegatlon ? "text-orange-400" : "text-yellow-400"}`}>
              {sede.network_Sede}
            </p>
            <div className="mt-2 flex justify-between items-center">

              <Link
                to={`/ver-sede/${sede.id}`}
                className={`py-1 px-4 hover:bg-secondary-900 transition-colors text-white rounded ${
                  isMegatlon ? "bg-orange-500" : "bg-yellow-500"
                }`}
              >
                Ver Sede
              </Link>
              <Link
                to={`/modificar-proveedor/${sede.id}`}
                className={`py-1 px-4 bg-transparent border border-gray-900 text-gray-900 hover:bg-secondary-900 transition-colors hover:text-white rounded ${
                  isMegatlon ? "bg-orange-500" : "bg-yellow-500"
                }`}
              >
                Modificar
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Paginacion
        paginaActual={paginaActual}
        paginasTotales={paginasTotales}
        anterior={anterior}
        siguiente={siguiente}
      />

      {mostrarModal && (
        <ModalProveedor sede={sedeModal} cerrarModal={cerrarModal} />
      )}
    </div>
  );
};
