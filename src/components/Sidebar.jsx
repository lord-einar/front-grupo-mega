import React, { useState } from "react";
import {
  RiContactsBook2Line,
  RiArticleLine,
  RiLogoutBoxRLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [showMenuProveedor, setshowMenuProveedor] = useState(false);
  const [showSedes, setShowSedes] = useState(false);

  return (
    <div className="h-[100vh] no-scrollbar overflow-y-scroll bg-secondary-800 p-8 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white text-center mb-10">
          React Admin
        </h1>
        <ul>
          <li>
            <button
              onClick={() => setshowMenuProveedor(!showMenuProveedor)}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors w-full"
            >
              <span className="flex items-center gap-4">
                <RiContactsBook2Line className="text-primary" /> Contacto
                proveedores
              </span>
              <RiArrowRightSLine className={`mt-1 ${showMenuProveedor && "rotate-90"} transition-all`} />
            </button>
            <ul className={`${!showMenuProveedor ? "h-[50px]" : "h-0"} overflow-y-hidden transition-all`}>
              <li>
                <Link
                  to={"/lista-contactos"}
                  className="py-2 px-4 border-l border-primary ml-6 relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-800"
                >
                  Listar
                </Link>
              </li>
              <li>
                <Link
                  to={"/agregar-proveedor"}
                  className="py-2 px-4 border-l border-primary ml-6 relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-800"
                >
                  Agregar
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiArticleLine className="text-primary" />
              Remitos
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <MdOutlineInventory className="text-primary" />
              Inventario
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <VscSettingsGear className="text-primary" />
              Registro
            </Link>
          </li>
          <button
              onClick={() => setShowSedes(!showSedes)}
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors w-full"
            >
              <span className="flex items-center gap-4">
                <RiContactsBook2Line className="text-primary" /> Sedes
              </span>
              <RiArrowRightSLine className={`mt-1 ${showSedes && "rotate-90"} transition-all`} />
            </button>
            <ul className={`${!showSedes ? "h-[50px]" : "h-0"} overflow-y-hidden transition-all`}>
              <li>
                <Link
                  to={"/listar-sedes"}
                  className="py-2 px-4 border-l border-primary ml-6 relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-800"
                >
                  Listar
                </Link>
              </li>
              <li>
                <Link
                  to={"/agregar-sedes"}
                  className="py-2 px-4 border-l border-primary ml-6 relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-800"
                >
                  Agregar
                </Link>
              </li>
            </ul>
        </ul>
      </div>
      <nav>
        <Link
          to={"/"}
          className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
        >
          <RiLogoutBoxRLine className="text-primary" />
          Cerrar sesion
        </Link>
      </nav>
    </div>
  );
};
