import React, { useState } from "react";

export const StaffProfile = () => {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const cancelEdit = () => {
    document.getElementById("staff-profile").reset();
    setEdit(!edit);
  };

  return (
    <>
      <div className=" p-4">
        <div className="text-sm max-w-[1440px] mx-auto">
          <h1 className="text-2xl">Personal Profile</h1>
          <form id="staff-profile" className="py-10" method="PATCH">
          <div className="mb-6 mt-4 ">
                    <p className="text-center text-lg font-light">General Information</p>
                </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light">Staff ID</p>
              </label>
              <input
                type="text"
                placeholder="PSC"
                className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
                disabled
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
              >
                <p className="font-light"> Role</p>
              </label>
              <input
                type="text"
                placeholder="Admin"
                className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
                disabled
              />
            </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Employment Type</p>
              </label>
              <input
                disabled
                type="text"
                placeholder="PSC"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
            </div>
            <div className="mb-6 mt-4 ">
                    <p className="text-center text-lg font-light">Personal Information</p>
                </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Firstname</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="John"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
              >
                <p className="font-light"> Middle name</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="Marcel"
                className="col-span-7 font-sans font-light text-gray-500 large:col-span-4 bg-gray-50 outline-none h-10 p-2 mb-4 mr-4"
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Lastname</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="Robinson"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
            </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Email</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="youremail@example.com"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
              >
                <p className="font-light"> Phone</p>
              </label>
              <input
                disabled={edit}
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
                placeholder="9866066773"
                className="col-span-7 font-sans font-light text-gray-500 large:col-span-4 bg-gray-50 outline-none h-10 p-2 mb-4 mr-4"
              />
            </div>
          </form>
          <div className="grid grid-cols-12 items-center w-full text-lg ">
            {edit ? (
              <button
                className="col-span-3 col-start-6 large:col-start-3 mr-4 uppercase font-light font-sans text-gray-100 bg-gray-600 h-10"
                onClick={handleEdit}
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="col-span-3 col-start-6 large:col-start-3 mr-4 uppercase font-light font-sans text-gray-100 bg-gray-600 h-10"
                >
                  Submit
                </button>
                <button
                  onClick={cancelEdit}
                  className="col-span-2 text-start text-gray-500"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const StudentProfile = () => {
  const [edit, setEdit] = useState(true);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const cancelEdit = () => {
    document.getElementById("student-profile").reset();
    setEdit(!edit);
  };

  return (
    <>
      <div className=" p-4">
        <div className="text-sm max-w-[1440px] mx-auto">
          <h1 className="text-2xl text-center">Student Profile</h1>
          <form id="student-profile" className="py-10" method="PATCH">
            <div className="mb-6 mt-4 ">
              <p className="text-center text-lg font-light">
                General Information
              </p>
            </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light">Student ID</p>
              </label>
              <input
                type="text"
                placeholder="PSC"
                className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
                disabled
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
              >
                <p className="font-light"> Class</p>
              </label>
              <input
                type="text"
                placeholder="Admin"
                className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
                disabled
              />
            </div>

            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Medium</p>
              </label>
              <input
                disabled
                type="text"
                placeholder="PSC"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
            </div>

            {/* Personal Information */}

            <div className="mb-6 mt-4 ">
              <p className="text-center text-lg font-light">
                Personal Information
              </p>
            </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Firstname</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="John"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
              >
                <p className="font-light"> Middle name</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="Marcel"
                className="col-span-7 font-sans font-light text-gray-500 large:col-span-4 bg-gray-50 outline-none h-10 p-2 mb-4 mr-4"
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Lastname</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="Robinson"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
            </div>
            <div className="grid grid-cols-12 w-full items-center">
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
              >
                <p className="font-light"> Email</p>
              </label>
              <input
                disabled={edit}
                type="text"
                placeholder="youremail@example.com"
                className="col-span-7 large:col-span-4 bg-gray-50 font-sans font-light text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
              />
              <label
                htmlFor=""
                className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
              >
                <p className="font-light"> Phone</p>
              </label>
              <input
                disabled={edit}
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{4}"
                placeholder="9866066773"
                className="col-span-7 font-sans font-light text-gray-500 large:col-span-4 bg-gray-50 outline-none h-10 p-2 mb-4 mr-4"
              />
            </div>
          </form>
          <div className="flex justify-center items-center w-full text-lg ">
            {edit ? (
              <button
                className=" mr-4 w-24 uppercase font-light font-sans text-gray-100 bg-gray-600 h-10"
                onClick={handleEdit}
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className=" mr-4 w-24 uppercase font-light font-sans text-gray-100 bg-gray-600 h-10"
                >
                  Submit
                </button>
                <button
                  onClick={cancelEdit}
                  className=" text-start text-gray-500"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
