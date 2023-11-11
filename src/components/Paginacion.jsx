const Paginacion = ({ paginaActual, paginasTotales, anterior, siguiente }) => {
    return (
      <div className="flex justify-between mt-4">
        <button
          className={`py-2 px-4 ${paginaActual === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={anterior}
          disabled={paginaActual === 0}
        >
          Anterior
        </button>
        <button
          className={`py-2 px-4 ${paginaActual === paginasTotales - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={siguiente}
          disabled={paginaActual === paginasTotales - 1}
        >
          Siguiente
        </button>
      </div>
    );
  };
  
  export default Paginacion;
  