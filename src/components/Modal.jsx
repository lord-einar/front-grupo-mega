const ModalProveedor = ({ proveedor, cerrarModal }) => {
  console.log(proveedor);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className=" bg-secondary-800 p-4 rounded">
        <div className="flex items-center gap-4">
          <img src="/src/assets/hiperpbx.gif" alt="HiperPbx" width="60" />
          <h2 className="text-2xl border-b p-2">{proveedor.nombre}</h2>
        </div>

        <div className="flex gap-4 my-8 mx-4 rounded-3xl">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Soporte nivel 1
            </h5>
            <div className="border-b text-lg">Correo</div>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proveedor.soporteMail1 ? proveedor.soporteMail1 : "No posee"}
            </p>
            <div className="border-b text-lg">Telefono</div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proveedor.soporteTelefono1
                ? proveedor.soporteTelefono1
                : "No posee"}
            </p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Soporte nivel 2
            </h5>
            <div className="border-b text-lg">Correo</div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proveedor.soporteMail2 ? proveedor.soporteMail1 : "No posee"}
            </p>
            <div className="border-b text-lg">Telefono</div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proveedor.soporteTelefono2
                ? proveedor.soporteTelefono2
                : "No posee"}
            </p>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Soporte nivel 3
            </h5>
            <div className="border-b text-lg">Correo</div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proveedor.soporteMail3 ? proveedor.soporteMail3 : "No posee"}
            </p>
            <div className="border-b text-lg">Telefono</div>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {proveedor.soporteTelefono3
                ? proveedor.soporteTelefono3
                : "No posee"}
            </p>
          </div>
        </div>
        <button
          onClick={cerrarModal}
          className="mt-2 py-1 px-4 bg-red-500 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalProveedor;
