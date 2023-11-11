import React from "react";
import {
  RiMailFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {

  return (
    <div className="bg-secondary-800 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] mb-8 text-white">
        Recuperar contraseña
      </h1>
      <form className="mb-4">
        <div className="relative">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="email"
            className="py-3 pl-8  pr-4 bg-secondary-900 rounded-lg outline-none w-full"
            placeholder="Correo Electrónico"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-3 px-4 bg-secondary-900 rounded-lg w-full mt-8 hover:text-gray-100 transition-colors"
          >
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-4">
      <span className="flex items-center gap-2">
        ¿Ya tienes cuenta?
        <Link
          to={"/login"}
          className="text-primary hover:text-gray-100 transition-colors"
        >
          Inicia sesion
        </Link>
      </span>
        <span className="flex items-center gap-2">
          ¿No tienen cuenta?
          <Link
            to={"/login/register"}
            className="text-primary hover:text-gray-100 transition-colors"
          >
            Registrate
          </Link>
        </span>
      </div>
    </div>
  );
};
