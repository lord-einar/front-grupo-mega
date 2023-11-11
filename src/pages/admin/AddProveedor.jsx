import React, { useState } from "react";
import FormProveedores from "../../components/FormProveedores";

export const AddProveedor = () => {

  return (
    <div className="bg-secondary-800 p-8 rounded-xl">
      <h2 className="text-2xl p-2 border-b">Agregar proveedor</h2>
      <div className="px-10">
        <FormProveedores />
      </div>
    </div>
  );
};
