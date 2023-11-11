import React, { useState } from 'react'
import {
    RiMailFill,
    RiLockFill,
    RiEyeFill,
    RiEyeOffFill,
    RiUserLine
  } from "react-icons/ri";
  import { Link } from "react-router-dom";


export const Register = () => {

    const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="bg-secondary-800 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
    <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] mb-8 text-primary">
      Registrarse
    </h1>
    <form className="mb-8">
      <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full mb-8">
        <img
          src="https://img.freepik.com/iconos-gratis/google_318-258888.jpg?w=2000"
          className="w-4 h-4"
        />
        Registrate con Google
      </button>
      <div className="relative mb-4">
        <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type="text"
          className="py-3 pl-8  pr-4 bg-secondary-900 rounded-lg outline-none w-full"
          placeholder="Nombre(s)"
          required
        />
      </div>
      <div className="relative mb-4">
        <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type="text"
          className="py-3 pl-8  pr-4 bg-secondary-900 rounded-lg outline-none w-full"
          placeholder="Apellido(s)"
          required
        />
      </div>
      <div className="relative mb-4">
        <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type="email"
          className="py-3 pl-8  pr-4 bg-secondary-900 rounded-lg outline-none w-full"
          placeholder="Correo Electrónico"
          required
        />
      </div>
      <div className="relative mb-4">
        <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type={showPassword ? "text" : "password"}
          className="py-3 px-8 bg-secondary-900 rounded-lg outline-none w-full"
          placeholder="Contraseña"
          required
        />
        {showPassword ? (
          <RiEyeOffFill
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
          />
        ) : (
          <RiEyeFill
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
          />
        )}
      </div>
      <div className="relative">
        <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
        <input
          type={showPassword ? "text" : "password"}
          className="py-3 px-8 bg-secondary-900 rounded-lg outline-none w-full"
          placeholder="Confirmar contraseña"          required
        />
        {showPassword ? (
          <RiEyeOffFill
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
          />
        ) : (
          <RiEyeFill
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
          />
        )}
      </div>
      <div>
        <button
          type="submit"
          className="py-3 px-4 bg-secondary-900 rounded-lg w-full mt-8 hover:text-gray-100 transition-colors"
        >
          Registrarme
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
    </div>
  </div>
  )
}
