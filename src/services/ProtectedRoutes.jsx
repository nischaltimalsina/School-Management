import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Credits from "../components/Credits";
import user from './userAuthentication'


const ProtectedRoutes = () => {


  return user.role = "ADMIN"? (
    <>
      <div className="flex">
        <Sidebar />
        <Navbar />
      </div>
      <div className="absolute w-full top-14 overflow-scroll bottom-10  ">
        <Outlet />
      </div>
      <Credits/>
    </>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};

export default ProtectedRoutes;
