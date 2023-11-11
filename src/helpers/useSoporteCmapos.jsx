import { useState } from 'react';

export const useSoporteCampos = (initialState) => {
  const [campos, setCampos] = useState(initialState);

  const agregarCampos = () => {
    setCampos([...campos, { email: "", telefono: "" }]);
  };

  const eliminarCampos = (indice) => {
    const nuevosCampos = [...campos];
    nuevosCampos.splice(indice, 1);
    setCampos(nuevosCampos);
  };

  return [campos, agregarCampos, eliminarCampos];
};
