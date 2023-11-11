import React from "react";
import { Controller } from "react-hook-form";

const CampoSoporte = ({ index, eliminarCampos, control }) => {
  return (
    <div className="grid grid-cols-10 mb-8 gap-6">
      {/* Campo de Email */}
      <Controller
        name={`soporteMail${index + 1}`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            type="email"
            className="col-span-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder={`Contacto email nivel ${index + 1}`}
            {...field}
          />
        )}
      />
      {/* Campo de Teléfono */}
      <Controller
        name={`soporteTelefono${index + 1}`}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            type="tel"
            className="col-span-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder={`Contacto teléfono nivel ${index + 1}`}
            {...field}
          />
        )}
      />
      <button
        className="bg-primary"
        type="button"
        onClick={() => eliminarCampos(index)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default CampoSoporte;
