import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import FormProveedores from '../../components/FormProveedores';

export const ModifyProveedor = () => {
    const {id} = useParams()
    const [contactos, setContactos] = useState([]);
    console.log(id)

    return (
      <div className="bg-secondary-800 p-8 rounded-xl">
        <h2 className="text-2xl p-2 border-b">Modificar proveedor</h2>
        <div className="px-10">
          <FormProveedores id_proveedor={id} />
        </div>
      </div>
    );
  };
