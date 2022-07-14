import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Registration = () => {
  return (
    <div className="w-full h-full ">
      <div className=" p-4 large:p-10 w-full  ">
        <h1 className="text-xl mb-6 ">Current Statistics</h1>
        <div className="grid grid-cols-12 w-full gap-2 text-center medium:text-start">
          <div className=" col-span-12 medium:col-span-6 bg-emerald-500/20 large:col-span-3 p-4 border border-gray-300">
            <p className="uppercase large:mb-5 text-lg font-light p-2 nderline underline-offset-4 ">
              Students
            </p>
            <p className="text-sm font-light">Currently Enrolled </p>
            <h1 className="text-xl">2341</h1>
          </div>
          <div className=" col-span-12 medium:col-span-6 bg-red-500/20 large:col-span-3 p-4 border border-gray-300">
            <p className="uppercase large:mb-5 text-lg font-light p-2 nderline underline-offset-4">
              Staffs
            </p>
            <p className="text-sm font-light">Currently Employed </p>
            <h1 className="text-xl">32</h1>
          </div>
          <div className=" col-span-12 medium:col-span-6 bg-blue-500/20 large:col-span-3 p-4 border border-gray-300">
            <p className="uppercase large:mb-5 text-lg font-light p-2 nderline underline-offset-4">
              Classes
            </p>
            <p className="text-sm font-light">Available Classes </p>
            <h1 className="text-xl">61</h1>
          </div>
          <div className=" col-span-12 medium:col-span-6 bg-yellow-500/20  large:col-span-3 p-4 border border-gray-300">
            <p className="uppercase large:mb-5 text-lg font-light p-2 nderline underline-offset-4">
              Subjects
            </p>
            <p className="text-sm font-light">Total Subjects </p>
            <h1 className="text-xl">18</h1>
          </div>
        </div>
      </div>
      <div className="pb-12">
        <div className=" mx-4 large:mx-10 bg-white shadow-lg">
          <div className="py-4">
            <h1 className="text-center text-xl">Registration </h1>
            <p className="text-center font-light text-sm">
              Click an option to begin registration
            </p>
            <div className=" grid grid-cols-12 w-full h-12 mt-4 items-center text-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "col-span-3 p-3 text-sm large:text-lg bg-gray-500 shadow-lg shadow-green-600/40 text-white"
                    : "col-span-3 p-3 text-sm large:text-lg bg-emerald-500/20"
                }
                to={"student"}
              >
                Student
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                isActive
                  ? "col-span-3 p-3 text-sm large:text-lg bg-gray-500 shadow-lg shadow-green-600/40 text-white"
                  : "col-span-3 p-3 text-sm large:text-lg bg-red-500/20"}
                to={"staff"}
              >
                Staff
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                isActive
                  ? "col-span-3 p-3 text-sm large:text-lg bg-gray-500 shadow-lg shadow-green-600/40 text-white"
                  : "col-span-3 p-3 text-sm large:text-lg bg-blue-500/20"
                }
                to={"class"}
              >
                Class
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                isActive
                  ? "col-span-3 p-3 text-sm large:text-lg bg-gray-500 shadow-lg shadow-green-600/40 text-white"
                  : "col-span-3 p-3 text-sm large:text-lg bg-yellow-500/20"
                }
                to={"subject"}
              >
                Subject
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Registration;
