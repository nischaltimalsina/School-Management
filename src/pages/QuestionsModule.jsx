import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const QuestionsModule = () => {
  return (
    <>
      <div className="p-4 large:p-10 larger:px-24 w-full">
        <h1>Questions</h1>
      </div>
      <div className="px-4 large:px-10 larger:px-24 w-full bg-gray-500 border-gray-500 border-t-2 border-b-2 h-14">
        <div className="flex justify-start gap- items-center h-full overflow-hidden">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-emerald-700  bg-gray-300 ease-in-out duration-300 text-center "
                : " text-center text-gray-200 "
            }
            to="create"
          >
            <p className="uppercase text-sm large:text-lg p-4 px-6 font-light ">
              Create
            </p>{" "}
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-emerald-700  bg-gray-300 ease-in-out duration-300 text-center "
                : " text-center text-gray-200 "
            }
            to="view"
          >
            <p className="uppercase text-sm large:text-lg p-4 px-6 font-light ">
              Sets
            </p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-emerald-700  bg-gray-300 ease-in-out duration-300 text-center "
                : " text-center text-gray-200 "
            }
            to="collections"
          >
            <p className="uppercase text-sm large:text-lg p-4 px-6 font-light">
              Collections
            </p>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default QuestionsModule;
