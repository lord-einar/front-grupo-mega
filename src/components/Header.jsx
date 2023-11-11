import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/theme-dark.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { RiArrowDownSLine, RiNotificationLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-[10vh] border-b border-gray-500 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-x-4">
        <button className="relative hover:bg-secondary-800 p-2 rounded-xl">
          <RiNotificationLine />
          <span className="absolute -top-1 right-0 bg-primary box-content rounded-full text-xs py-0.5 px-[5px]">
            2
          </span>
        </button>
        <Menu
          menuClassName="bg-secondary-800 p-4 text-white"
          menuButton={
            <MenuButton className="flex items-center gap-x-2  hover:bg-secondary-800 p-2 rounded-xl">
              <img
                className="w-6 h-6 rounded-full object-cover"
                src="https://img.freepik.com/free-icon/user_318-804690.jpg"
              />
              <span>German Ojeda</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
        >
          <MenuItem className={"rounded-lg hover:bg-secondary-900 transition-colors"}>
            <Link to={"/perfil"} className="flex items-center gap-x-2 ">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src="https://img.freepik.com/free-icon/user_318-804690.jpg"
              />
              <div className="flex flex-col">
                <span>German Ojeda</span>
                <span className="text-xs">gojeda@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className={"rounded-lg hover:bg-secondary-900 transition-colors"}>Copy</MenuItem>
          <MenuItem className={"rounded-lg hover:bg-secondary-900 transition-colors"}>Paste</MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
