import React, { useState, useContext } from "react";
import Logo from "../assets/logo.png";
import AuthContext from "../context/userContext";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = useState({});
  const [password, setPassword] = useState({});

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        
      } catch (error) {
        
      }

  };

  return (
    <div className="flex w-full h-[100vh] justify-center items-center p-4">
      <div className="max-w-[400px] w-full h-[620px] bg-white">
        <div className="bg-teal-800 h-56 p-6">
          <div className="border-2 w-20 h-20 mx-auto mb-4">
            <img
              src={Logo}
              alt="SOWL"
              className="h-full w-full object-cover invert"
            />
          </div>
          <h1 className="text-center text-2xl font-light text-gray-100 ">
            Service Owl Inc.
          </h1>
          <p className="text-center text-sm font-light mt-3 text-gray-200 px-8">
            Managing your institute made easy with SOWL Management System.
          </p>
        </div>
        <div className="p-6">
          <p className="px-4 text-sm font-extralight text-center">
            Enter your Username and Password to continue to the application
          </p>
        </div>
        <form method="POST" className="w-full px-12">
          <div>
            <label
              htmlFor="username"
              className="font-sans font-light text-gray-500 leading-10"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              className="bg-gray-100 w-full h-10 p-2 outline-none outline-offset-0 focus:outline-teal-600"
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="font-sans font-light text-gray-500 leading-10"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e=>setPassword(e.target.value))}
              className="bg-gray-100 w-full h-10 p-2 outline-none outline-offset-0 focus:outline-teal-600"
            />
          </div>
          <div className="flex justify-center mt-10 h-12 w-full">
            <button
              type="submit"
              className="bg-teal-800 text-gray-100 text-xl  w-full"
              onSubmit={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
