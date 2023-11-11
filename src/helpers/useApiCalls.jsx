import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApiCalls = (id_proveedor) => {
  const [rubros, setRubros] = useState([]);
  const [datosProveedor, setDatosProveedor] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/rubros')
      .then((data) => setRubros(data.data));
  }, []);

  useEffect(() => {
    if (id_proveedor) {
      axios
        .get(`http://localhost:8080/proveedores/${id_proveedor}`)
        .then((data) => {
          setDatosProveedor(data.data);
        });
    }
  }, [id_proveedor]);



  return [rubros, setRubros, datosProveedor];
};
