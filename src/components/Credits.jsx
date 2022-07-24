import React from "react";
import Logo from "../assets/logo.png";

const Credits = () => {
  return (
    <>
      <div className="w-full medium:w-[calc(100%-6rem)] medium:left-24 fixed bottom-0 h-10 bg-white flex justify-center items-center font-extralight text-xs ">
        <img src={Logo} alt="SOWL" className="h-8 w-8 mt-1" />
        <p> Copyright &copy; SOWL Inc. (2022) All Rights Reserved. </p>
      </div>
    </>
  );
};

export default Credits;
