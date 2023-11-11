import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalAgregarServicio from "../../components/ModalAgregarServicio";

const DetalleSede = () => {
  // Obtén el ID de la sede desde los parámetros de la URL
  const { id } = useParams();

  const [sede, setSede] = useState(null);
  const [servicios, setServicios] = useState([]);

  const getServiciosByID = async (id) => {
    const response = await axios.get(`http://localhost:8080/servicios/${id}`);
    setServicios(response.data);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleServiceAdded = () => {
    // Aquí puedes cargar nuevamente la lista de servicios después de agregar uno nuevo
    getServiciosByID(id);
  };

  useEffect(() => {
    // Realiza una solicitud GET para obtener los datos de la sede por su ID
    axios
      .get(`http://localhost:8080/sedes/${id}`)
      .then((response) => {
        setSede(response.data); // Almacena los datos de la sede en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la sede:", error);
      });

    getServiciosByID(id);
  }, [id]);

  if (!sede) {
    // Manejo de caso donde los datos de la sede aún no se han cargado
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{sede.nombre}</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold">Información General</h2>
          <p>
            <strong>Dirección:</strong> {sede.direccion}
          </p>
          <p>
            <strong>Localidad:</strong> {sede.localidad}
          </p>
          <p>
            <strong>Provincia:</strong> {sede.provincia}
          </p>
          <p>
            <strong>País:</strong> {sede.pais}
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Detalles de la Sede</h2>
          <p>
            <strong>Red de Sede:</strong> {sede.network_Sede}
          </p>
          {/* Agregar otros campos relevantes */}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Servicios</h2>
        <table className="min-w-full border-collapse table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Número de Servicio</th>
              <th className="border px-4 py-2">Observaciones</th>
              <th className="border px-4 py-2">Proveedor</th>
              <th className="border px-4 py-2">Rubro del Proveedor</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.id}>
                <td className="border px-4 py-2">{servicio.numeroServicio}</td>
                <td className="border px-4 py-2">{servicio.observaciones}</td>
                <td className="border px-4 py-2">
                  {servicio.Proveedor.nombre}
                </td>
                <td className="border px-4 py-2">
                  {servicio.Proveedor.Rubros[0].nombre}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <button
          className="py-2 px-4 bg-secondary-900 text-white rounded"
          onClick={handleOpenModal}
        >
          Agregar Servicio
        </button>
      </div>

      {isModalOpen && (
        <ModalAgregarServicio
          sedeId={id}
          onClose={handleCloseModal}
          onServiceAdded={handleServiceAdded}
        />
      )}
    </div>
  );
};

export default DetalleSede;
