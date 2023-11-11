import React from "react";
import { FormSedes } from "../../components/FormSedes";

export const AddSedes = () => {
  return (
    <div className="bg-secondary-800 p-8 rounded-xl">
      <h2 className="text-2xl p-2 border-b">Agregar sede</h2>
      <div className="px-10">
        <FormSedes />
      </div>
    </div>
  );
};
