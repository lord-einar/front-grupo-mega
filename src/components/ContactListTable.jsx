import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import Paginacion from "./Paginacion"; // Asegúrate de importar el componente de paginación
import ModalProveedor from "./Modal";
import { Link } from "react-router-dom";

const ContactListTable = ({ contactos }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [proveedorModal, setProveedorModal] = useState(null);
  const [paginaActual, setPaginaActual] = useState(0);
  const elementosPorPagina = 5;

  const paginasTotales = Math.ceil(contactos.length / elementosPorPagina);

  const proveedoresAMostrar = contactos.slice(
    paginaActual * elementosPorPagina,
    (paginaActual + 1) * elementosPorPagina
  );

  const abrirModal = (nombreProveedor) => {
    setProveedorModal(nombreProveedor);
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  console.log(proveedoresAMostrar);

  const anterior = () => {
    if (paginaActual > 0) setPaginaActual(paginaActual - 1);
  };

  const siguiente = () => {
    if (paginaActual < paginasTotales - 1) setPaginaActual(paginaActual + 1);
  };

  const renderizarImagen = (empresa) => {
    console.log(empresa);
    switch (empresa) {
      case "Megatlon":
        return <img src="/src/assets/Mega.jpg" alt="Megatlon" width="50" />;
      case "Fiter":
        return <img src="/src/assets/fiter.png" alt="Fiter" width="50" />;
      case "mgft":
        return (
          <div className="flex items-center justify-center">
            <img src="/src/assets/Mega.jpg" alt="Megatlon" width="30" />
            <img src="/src/assets/fiter.png" alt="Fiter" width="30" />;
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Proveedor</th>
            <th className="hidden md:table-cell py-2 px-4 border-b border-gray-200">Rubro</th>
            <th className="py-2 px-4 border-b border-gray-200">Servicios a:</th>
            <th className="hidden md:table-cell py-2 px-4 border-b border-gray-200">Ejecutivo</th>
            <th className="hidden md:table-cell py-2 px-4 border-b border-gray-200">
              Correo Ejecutivo
            </th>
            <th className="hidden md:table-cell py-2 px-4 border-b border-gray-200">
              Correo soporte nivel 1
            </th>
            <th className="hidden md:table-cell py-2 px-4 border-b border-gray-200">
              Telefono soporte nivel 1
            </th>
            <th className="py-2 px-4 border-b border-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedoresAMostrar.flatMap((proveedor, index) => 
          proveedor.Rubros.map((rubro, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">
                {proveedor.nombre}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {rubro.nombre}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {renderizarImagen(proveedor.empresa)}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {proveedor.ejecutivo_cuentas}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {proveedor.mail_ejecutivo}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {proveedor.soporteMail1}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {proveedor.soporteTelefono1}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => abrirModal(proveedor)}
                  className="py-1 px-4 hover:bg-secondary-900 transition-colors text-white rounded"
                >
                  <BiSupport />
                </button>
                <Link
                  to={`/modificar-proveedor/${proveedor.id}`}
                  className="py-1 px-4 hover:bg-secondary-900 transition-colors text-white rounded"
                >
                  Modificar
                </Link>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
      <Paginacion
        paginaActual={paginaActual}
        paginasTotales={paginasTotales}
        anterior={anterior}
        siguiente={siguiente}
      />
      {mostrarModal && (
        <ModalProveedor proveedor={proveedorModal} cerrarModal={cerrarModal} />
      )}
    </div>
  );
};

export default ContactListTable;
