import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Profile from "../assets/profile.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import user from "../services/userAuthentication"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const AdminNavOptions = [
    {id:"001", url:"/",label:"Dashboard"},
    {id:"002", url:"/overview",label:"Overview"},
    {id:"003", url:"/modules",label:"Modules"},
    {id:"004", url:"/registration",label:"Registration"},
    {id:"005", url:"/courses",label:"Courses"},
    {id:"006", url:"/finance",label:"Finance"},
    {id:"007", url:"/profile",label:"Profile"},
    {id:"008", url:"/settings",label:"Settings"},
  ]
  const StaffNavOptions = [
    {id:"011", url:"/", label:"Dashboard"},
    {id:"012", url:"/attendance", label:"Attendance"},
    {id:"013", url:"/time-table", label:"Timetable"},
    {id:"014", url:"/courses", label:"Courses"},
    {id:"015", url:"/overview", label:"Overview"},
    {id:"016", url:"/questions", label:"/questions"},
    {id:"017", url:"/profile", label:"Profile"},
  ]

  const StudentNavOptions =[
    {id:"021", url:"/", label:"Dashboard"},
    {id:"022", url:"/time-table", label:"Timetable"},
    {id:"023", url:"/courses", label:"Courses"},
    {id:"024", url:"/overview", label:"Overview"},
    {id:"025", url:"finance", label:"Finance"},
    {id:"026", url:"/profile", label:"Profile"},
  ]
  
  
  let NavOptions = [];

if (user.role === "ADMIN"){
    NavOptions =[ ...AdminNavOptions]
  }
else if(user.role === "STAFF"){
    NavOptions =[ ...StaffNavOptions]
  }
else if(user.role === "STUDENT"){
    NavOptions = StudentNavOptions
}

  return  (
    <>
      <div
        className={`relative h-[100vh] top-0 left-0  bg-white/90 shadow-md shadow-gray-300/10  ${
          !isOpen ? "-translate-x-full ease-out`" : "ease-out"
        } w-full medium:w-[350px] z-10   duration-500`}
        
      >
        <div className="p-4 h-16 flex justify-between bg-white  ">
          <h1 className="text-lg font-light ">Service Owl Inc.</h1>
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
              className="absolute top-0 left-full p-2 z-30"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <IoIosMenu size={40} />
            </button>
          )}
        </div>
        <div>
            <ul>
              {NavOptions.map((nav)=>( <li key={nav.id}>
                <NavLink to={nav.url}> {nav.label}</NavLink>
              </li>))
             }
            </ul>
        </div>
        <div className="absolute bottom-0 p-4">
          <Dropdown />
        </div>
      </div>
    </>
   )
};

export default Sidebar;

function Dropdown() {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" h-10 w-10  rounded-full   text-sm font-medium text-white hover:brightness-50 duration-200 ">
            <img
              src={Profile}
              alt="SOWL"
              className=" h-full w-full object-cover"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-400"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-14 bottom-4 mt-3 w-36 origin-top-right divide-y divide-gray-200  bg-gray-100 shadow-lg  focus:outline-none">
            <div className=" ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500/50 text-white" : "text-gray-900"
                    } group flex w-full items-center  px-4 py-2 text-sm`}
                  >
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500/50 text-white" : "text-gray-900"
                    } group flex w-full items-center  px-4 py-2 text-sm`}
                  >
                    Duplicate
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500/50 text-white" : "text-gray-900"
                    } group flex w-full items-center  px-4 py-2 text-sm`}
                  >
                    Archive
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500/50 text-white" : "text-gray-900"
                    } group flex w-full items-center  px-4 py-2 text-sm`}
                  >
                    Move
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-gray-500/50 text-white" : "text-gray-900"
                    } group flex w-full items-center  px-4 py-2 text-sm`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
