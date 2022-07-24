import React, { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import user from "../services/userAuthentication";
import {
  AdminNavOptions,
  StaffNavOptions,
  StudentNavOptions,
} from "./navMenuItems";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const role = user.role;

  let NavOptions = [];

  if (role === "ADMIN") {
    NavOptions = [...AdminNavOptions];
  } else if (role === "STAFF") {
    NavOptions = [...StaffNavOptions];
  } else if (role === "STUDENT") {
    NavOptions = [...StudentNavOptions];
  }

  return (
    <>
      <div
        className={`relative h-[100vh] top-0 left-0 bg-white border-r text-gray-600  
        ${
          !isOpen
            ? "w-24 -translate-x-full medium:translate-x-0"
            : "w-full medium:w-64 "
        }  z-10  duration-300 extraLarge:w-64`}
      >
        <div className="p-4 h-16 flex justify-end">
          {isOpen ? (
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <IoIosClose size={40} />
            </button>
          ) : (
            <button
              className="fixed top-0 left-full medium:left-auto p-2 z-30 extraLarge:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <IoIosMenu className="" size={40} />
            </button>
          )}
        </div>
        <div
          className={` mt-32 bottom-0 h-[calc(100vh-12rem)]  overflow-x-hidden overflow-y-scroll `}
        >
          <ul className={`${!isOpen ?"space-y-0":"space-y-3"} extraLarge:space-y-3`}>
            {NavOptions.map((nav) => (
              <li key={nav.id} className="">
                <NavLink
                  to={nav.url}
                  className={({ isActive }) =>
                  [
                    `flex items-center ${isOpen?"justify-start":"justify-center"} space-x-4 font-light p-3 extraLarge:justify-start  `,
                    isActive
                      ? " border-green-600  bg-gray-200 text-gray-600 ease-linear duration-300 shadow-inner drop-shadow-lg"
                      : "border-transparent ",
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
                >
                   <div
                      className={`flex items-center gap-3 
                      ${!isOpen ? "justify-center flex-col " : "font-light text-lg "}
                     extraLarge:flex-row extraLarge:text-lg `}
                    >
                      <div className={`${!isOpen ? "text-2xl" : "ml-8 text-2xl"} extraLarge:ml-8 extraLarge:text-2xl`}>
                        {nav.icon}
                      </div>
                      <p className={` ${!isOpen ? "text-xs font-light" : " text-sm "} extraLarge:text-sm `}>
                        {nav.label}
                      </p>
                    </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

/*   {NavOptions.map((nav) => (
              <li key={nav.id} className="h-full w-full">
                <NavLink
                  to={nav.url}
                  className={({ isActive }) => (isActive ? "border w-full" : "")}
                >
                  <div className="h-12 w-full">
                    <div
                      className={`flex items-center gap-3
                      ${!isOpen ? "justify-center flex-col " : "font-light text-lg "}
                     `}
                    >
                      <div className={`${!isOpen ? "text-3xl" : "text-2xl"}`}>
                        {nav.icon}
                      </div>
                      <p className={` ${!isOpen ? "text-xs font-light" : " "} `}>
                        {nav.label}
                      </p>
                    </div>
                    <div>
                      <span
                        className={` ${
                          !isOpen ? "hidden" : " text-xs font-thin"
                        } `}
                      >
                        {nav.span}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))} */
