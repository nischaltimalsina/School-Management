import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Routine = () => {
  return (
    <div className="p-4 large:p-10 larger:px-20">
      <h1 className="text-xl large:text-2xl font-light">
        Welcome to the Routine Generator
      </h1>
      <p className="font-light">Select an option to continue:</p>
      <div>
        <NavLink to="/time-table/slot-criteria">Set up Routine Slots</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Routine;

export const RoutineSlot = () => {

  const [slot, setSlot] = useState({
    startTime: "",
    sessionDuration: "",
    breakDuration: "",
    routineLevel: "",
  });
  const [off, setOff] = useState({dayOff:[]});

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSlot({ ...slot, [name]: value });
  };

  const handleOff = (e) => {
    name = e.target.name;
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setOff({[name]:value});
  };

  // let data = {...slot,...off}

  // const {startTime, sessionDuration,breakDuration, routineLevel, dayOff} = data




  return (
    <div className="">
      <form method="POST" className="space-y-5">
        <h1>Enter Your Routine Slot Details</h1>
        <div className=" max-w-[450px] space-y-2">
          <div className="grid grid-cols-12 items-center  ">
            <label htmlFor="breakduration " className="col-span-8">
              Enter Level
              <span className="text-xs ml-5 font-light">
                <p>(PG /Primary /Secondary)</p>
              </span>
            </label>
            <input
              className="col-span-4  h-10 outline-none pl-4 pr-1 peer inline-flex"
              min={10}
              id="routineLevel"
              name="routineLevel"
              type="text"
              value={slot.routineLevel}
              onChange={handleInputs}
            />
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>
          <div className="grid grid-cols-12 items-center ">
            <label htmlFor="starttime " className="col-span-8">
              Start Time
              <span className="text-xs ml-5 font-light">
                <p> (HH:MM : AM/PM)</p>
              </span>
            </label>
            <input
              className="col-span-4  h-10 outline-none pl-4 pr-1  inline-flex out-of-range:border-2 out-of-range:border-red-500"
              min="4:00:AM"
              max="9:00:PM"
              id="startTime"
              name="startTime"
              type="time"
              value={slot.startTime}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="grid grid-cols-12 items-center  ">
            <label htmlFor="starttime " className="col-span-8">
              Session Duration
              <span className="text-xs ml-5 font-light">
                <p>(in Minutes)</p>
              </span>
            </label>
            <input
              className="col-span-4  h-10 outline-none pl-4 pr-1 peer inline-flex"
              min={20}
              max={120}
              id="sessionDuration"
              name="sessionDuration"
              type="number"
              value={slot.sessionDuration}
              onChange={handleInputs}
            />
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2 ease-in-out duration-200 ">
              <p>
                Invalid Range: <i>Enter a value between (20-120)</i>
              </p>
            </span>
          </div>
          <div className="grid grid-cols-12 items-center  ">
            <label htmlFor="breakduration " className="col-span-8">
              Break Duration
              <span className="text-xs ml-5 font-light">
                <p>(in Minutes)</p>
              </span>
            </label>
            <input
              className="col-span-4  h-10 outline-none pl-4 pr-1 peer inline-flex"
              min={10}
              id="breakDuration"
              name="breakDuration"
              type="number"
              value={slot.breakDuration}
              onChange={handleInputs}
            />
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>

          <div className="grid grid-cols-12 items-start  ">
            <label htmlFor="breakduration " className="col-span-8 mt-2">
              Select Day Off
              <span className="text-xs ml-5 font-light">
                <p className="text-wrap">
                  (Press Ctrl to select multiple days)
                </p>
              </span>
            </label>
            <select
              className="col-span-4  h-30 outline-none text-sm  peer inline-flex"
              min={10}
              id="dayOff"
              name="dayOff"
              value={off.dayOff}
              onChange={handleOff}
              multiple={true}
            >
              <option className="h-8  items-center flex px-4" value="sunday">
                Sunday
              </option>
              <option className="h-8  items-center flex px-4" value="monday">
                Monday
              </option>
              <option className="h-8  items-center flex px-4" value="tuesday">
                Tuesday
              </option>
              <option className="h-8  items-center flex px-4" value="wednesday">
                Wednesday
              </option>
              <option className="h-8  items-center flex px-4" value="thursday">
                Thursday
              </option>
              <option className="h-8  items-center flex px-4" value="friday">
                Friday
              </option>
              <option className="h-8  items-center flex px-4" value="saturday">
                Saturday
              </option>
            </select>
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export const DisplayRoutineSlot = () => {
  return (
    <table className=" table-fixed border-collapse border">
      <thead className="bg-gray-200 h-10">
        <tr>
          <th className=" w-32 border border-gray-300">
            <p className="p-2">Routine</p>
          </th>
          <th className=" w-32 border border-gray-300">
            <p className="p-2 font-light">First</p>
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        <tr id="sunday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Sunday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
        <tr id="monday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Monday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
        <tr id="tuesday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Tuesday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
        <tr id="wednesday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Wednesday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
        <tr id="thursday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Thursday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
        <tr id="friday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Friday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
        <tr id="saturday">
          <td className="text-center h-10 bg-gray-200 border border-gray-300">
            <p className="p-2 font-light">Saturday</p>
          </td>
          <td className="text-center h-10 border border-gray-300">
            <p className="p-2 font-light"></p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
