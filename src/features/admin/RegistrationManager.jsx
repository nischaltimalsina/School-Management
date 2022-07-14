import React from "react";

export const ClassRegister = () => {
  
  return (
    <>
      <div className="text-sm max-w-[1440px] mx-auto mb-10 ">
        <h1 className="text-center my-8 text-lg">Class Information</h1>

        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Medium</p>
          </label>
          <select
            type="text"
            placeholder="PSC"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          >
            <option readOnly>-Select-</option>
            <option value="emc">EMC</option>
            <option value="nmc">NMC</option>
          </select>
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Level</p>
          </label>
          <select
            type="text"
            placeholder="Admin"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          >
            <option readOnly>-Select-</option>
            <option value="pre-primary">Pre Primary</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="plustwo">10 (+2)</option>
          </select>
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Class </p>
          </label>
          <input
            type="text"
            placeholder="eg: PG, 5, 10"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />

          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light"> Capacity </p>
          </label>
          <input
            type="text"
            placeholder="Seats Quota"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="flex justify-center gap-4 px-6 text-wrap w-full items-center mt-6">
          <input type={"checkbox"} required className="mb-6 " />
          <label className=" font-light mb-6" htmlFor="">
            <p>
              I hereby declare that all the information given above is true and
              correct to the best of my knowledge.
            </p>
          </label>
        </div>

        <div className="grid grid-cols-12 w-full items-center mt-6">
          <button
            type="submit"
            className="col-span-4 col-start-5 font-sans font-light bg-gray-500 text-gray-50 text-lg uppercase outline-none  p-2 mb-4 mr-4"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export const SubjectRegister = () => {
  return (
    <>
      <div className="text-sm max-w-[1440px] mx-auto mb-10 ">
        <h1 className="text-center my-8 text-lg">Create Departments</h1>

        <div className="grid grid-cols-12 w-full items-start">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light mt-3">Level</p>
          </label>
          <div className="col-span-7 large:col-span-4 grid grid-cols-6 font-sans font-light bg-gray-50 text-gray-500 outline- p-2 mb-4 mr-4 items-center">
            <input name="level" id="preprimary" type="checkbox" className="col-span-1 mb-4 h-4" />
            <label htmlFor="preprimary" className="col-span-5 mb-4">
              <p className="font-light">Pre Primary</p>
            </label>
            <input name="level" id="primary" type="checkbox" className="col-span-1 mb-4 h-4" />
            <label htmlFor="preprimary" className="col-span-5 mb-4">
              <p className="font-light">Primary</p>
            </label>
            <input name="level" id="secondary" type="checkbox" className="col-span-1 mb-4 h-4" />
            <label htmlFor="secondary" className="col-span-5 mb-4">
              <p className="font-light">Secondary</p>
            </label>
            <input name="level" id="preprimary" type="checkbox" className="col-span-1 mb-4 h-4" />
            <label htmlFor="plustwo" className="col-span-5 mb-4">
              <p className="font-light">10 (+2)</p>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Department</p>
          </label>
          <input
            type="text"
            placeholder="eg: Science"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Class </p>
          </label>
          <input
            type="text"
            placeholder="eg: PG, 5, 10"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />

          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light"> Capacity </p>
          </label>
          <input
            type="text"
            placeholder="Seats Quota"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="flex justify-center gap-4 px-6 text-wrap w-full items-center mt-6">
          <input type={"checkbox"} required className="mb-6 " />
          <label className=" font-light mb-6" htmlFor="">
            <p>
              I hereby declare that all the information given above is true and
              correct to the best of my knowledge.
            </p>
          </label>
        </div>

        <div className="grid grid-cols-12 w-full items-center mt-6">
          <button
            type="submit"
            className="col-span-4 col-start-5 font-sans font-light bg-gray-500 text-gray-50 text-lg uppercase outline-none  p-2 mb-4 mr-4"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="text-sm max-w-[1440px] mx-auto mb-10 ">
        <h1 className="text-center my-8 text-lg">Subject Information</h1>

        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Department</p>
          </label>
          <select
            type="text"
            placeholder="PSC"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          >
            <option readOnly>-Select-</option>
            <option value="emc">EMC</option>
            <option value="nmc">NMC</option>
          </select>
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Level</p>
          </label>
          <select
            type="text"
            placeholder="Admin"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          >
            <option readOnly>-Select-</option>
            <option value="pre-primary">Pre Primary</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="plustwo">10 (+2)</option>
          </select>
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Class </p>
          </label>
          <input
            type="text"
            placeholder="eg: PG, 5, 10"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />

          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light"> Capacity </p>
          </label>
          <input
            type="text"
            placeholder="Seats Quota"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="flex justify-center gap-4 px-6 text-wrap w-full items-center mt-6">
          <input type={"checkbox"} required className="mb-6 " />
          <label className=" font-light mb-6" htmlFor="">
            <p>
              I hereby declare that all the information given above is true and
              correct to the best of my knowledge.
            </p>
          </label>
        </div>

        <div className="grid grid-cols-12 w-full items-center mt-6">
          <button
            type="submit"
            className="col-span-4 col-start-5 font-sans font-light bg-gray-500 text-gray-50 text-lg uppercase outline-none  p-2 mb-4 mr-4"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export const StaffRegister = () => {
  const options = [
    { label: "Admin", value: "admin" },
    { label: "Teacher", value: "teacher" },
    { label: "Accountant", value: "accountant" },
    { label: "Exam Controller", value: "coe" },
    { label: "Librarian", value: "librarian" },
  ];
  const employmentStat = [
    { label: "Public Service", value: "public" },
    { label: "Private Hire", value: "private" },
  ];

  return (
    <>
      <form className="text-sm max-w-[1440px] mx-auto mb-10">
        <h1 className="text-center my-4 text-lg">Personal Information</h1>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Firstname</p>
          </label>
          <input
            type="text"
            placeholder="Firstname"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Middle Name</p>
          </label>
          <input
            type="text"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Lastname</p>
          </label>
          <input
            type="text"
            placeholder="Lastname"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Date of Birth</p>
          </label>
          <input
            type="date"
            placeholder="9856744987"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Nationality</p>
          </label>
          <input
            type="text"
            defaultValue={"Nepali"}
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Gender</p>
          </label>
          <div className="col-span-7 large:col-span-4 flex items-center gap-2 h-12 pb-3">
            <input
              name="gender"
              id="male"
              type="radio"
              value={"male"}
              className=""
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value={"female"}
              className="ml-6"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Email Address</p>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Mobile</p>
          </label>
          <input
            type="tel"
            placeholder="9856744987"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />

          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Address</p>
          </label>
          <input
            type="text"
            placeholder="Nijgadh-7"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>

        <h1 className="text-center my-4 text-lg">Employment Status</h1>

        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Employee Type</p>
          </label>
          <select
            type="text"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          >
            <option readOnly>-Select-</option>
            {employmentStat.map((stat) => (
              <option key={stat.value} value={stat.value}>
                {stat.label}
              </option>
            ))}
          </select>
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light inline-flex"> Role </p>
          </label>
          <select
            type="text"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          >
            <option readOnly>-Select-</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <h1 className="text-center my-4 text-lg">Details and Documents</h1>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Citizenship No.</p>
          </label>
          <input
            type="text"
            placeholder="email@example.com"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> PAN No.</p>
          </label>
          <input
            type="text"
            placeholder="9856744987"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />

          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Education</p>
          </label>
          <input
            type="text"
            placeholder="Bachelors"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light inline-flex">Citizenship </p>
          </label>
          <input
            type="file"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Certificates</p>
          </label>
          <input
            type="file"
            multiple
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="flex justify-center gap-4 px-6 text-wrap w-full items-center mt-6">
          <input type={"checkbox"} required className="mb-6 " />
          <label className=" font-light mb-6" htmlFor="">
            <p>
              I hereby declare that all the information given above is true and
              correct to the best of my knowledge.
            </p>
          </label>
        </div>

        <div className="grid grid-cols-12 w-full items-center mt-6">
          <button
            type="submit"
            className="col-span-4 col-start-5 font-sans font-light bg-gray-500 text-gray-50 text-lg uppercase outline-none  p-2 mb-4 mr-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export const StudentRegister = () => {
  return (
    <>
      <div className="text-sm max-w-[1440px] mx-auto mb-10">
        <h1 className="text-center my-4 text-lg">Personal Information</h1>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Firstname</p>
          </label>
          <input
            type="text"
            placeholder="Firstname"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Middle Name</p>
          </label>
          <input
            type="text"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Lastname</p>
          </label>
          <input
            type="text"
            placeholder="Lastname"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Email Address</p>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Mobile</p>
          </label>
          <input
            type="tel"
            placeholder="9856744987"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Gender</p>
          </label>
          <div className="col-span-7 large:col-span-4 flex items-center gap-2 h-12 px-3 pb-3">
            <input
              name="gender"
              id="male"
              type="radio"
              value={"male"}
              className=""
            />
            <label htmlFor="male">
              <p className="font-light">Male</p>
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value={"female"}
              className="ml-6"
            />
            <label htmlFor="female">
              <p className="font-light">Female</p>
            </label>
          </div>
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Nationality</p>
          </label>
          <input
            type="text"
            defaultValue={"Nepali"}
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Date of Birth</p>
          </label>
          <input
            type="date"
            placeholder="9856744987"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Address</p>
          </label>
          <input
            type="text"
            placeholder="Nijgadh-7"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <h1 className="text-center my-4 text-lg">Guardian's Information</h1>

        <div className="grid grid-cols-12 w-full items-center">
          <p className=" col-start-6 large:col-start-3 col-span-5 h-10 text-base tracking-wide font-light uppercase">
            Father's Details
          </p>
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Firstname</p>
          </label>
          <input
            type="text"
            placeholder="Firstname"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Middle Name</p>
          </label>
          <input
            type="text"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Lastname</p>
          </label>
          <input
            type="text"
            placeholder="Lastname"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light inline-flex">Email </p>
            <span className="inline-flex ml-2">
              <p className="text-xs font-thin">(Optional)</p>
            </span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Mobile</p>
          </label>
          <input
            type="tel"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <p className=" col-start-6 large:col-start-3 col-span-5 h-10 text-base tracking-wide font-light uppercase">
            Mother's Details
          </p>
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Firstname</p>
          </label>
          <input
            type="text"
            placeholder="Firstname"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Middle Name</p>
          </label>
          <input
            type="text"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Lastname</p>
          </label>
          <input
            type="text"
            placeholder="Lastname"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light inline-flex">Email </p>
            <span className="inline-flex ml-2">
              <p className="text-xs font-thin">(Optional)</p>
            </span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Mobile</p>
          </label>
          <input
            type="tel"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <p className=" col-start-6 large:col-start-3 col-span-5 h-10 text-base tracking-wide font-light uppercase">
            Guardian's Details
          </p>
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light">Firstname</p>
          </label>
          <input
            type="text"
            placeholder="Firstname"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Middle Name</p>
          </label>
          <input
            type="text"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light">Lastname</p>
          </label>
          <input
            type="text"
            placeholder="Lastname"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light inline-flex">Email </p>
            <span className="inline-flex ml-2">
              <p className="text-xs font-thin">(Optional)</p>
            </span>
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Mobile</p>
          </label>
          <input
            type="tel"
            placeholder="Middle Name"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <h1 className="text-center my-4 text-lg">Required Documents</h1>
        <div className="grid grid-cols-12 w-full items-center">
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4"
          >
            <p className="font-light inline-flex">Birth Certificate </p>
          </label>
          <input
            type="file"
            className="col-span-7 large:col-span-4 font-sans font-light bg-gray-50 text-gray-500 outline-none h-10 p-2 mb-4 mr-4"
          />
          <label
            htmlFor=""
            className="text-end mr-4 col-span-5 large:col-span-2 mb-4 "
          >
            <p className="font-light"> Photo</p>
          </label>
          <input
            type="file"
            className="col-span-7 font-sans font-light bg-gray-50 text-gray-500 large:col-span-4 outline-none h-10 p-2 mb-4 mr-4"
          />
        </div>
        <div className="flex justify-center gap-4 px-6 text-wrap w-full items-center mt-6">
          <input type={"checkbox"} required className="mb-6 " />
          <label className=" font-light mb-6" htmlFor="">
            <p>
              I hereby declare that all the information given above is true and
              correct to the best of my knowledge.
            </p>
          </label>
        </div>

        <div className="grid grid-cols-12 w-full items-center mt-6">
          <button
            type="submit"
            className="col-span-4 col-start-5 font-sans font-light bg-gray-500 text-gray-50 text-lg uppercase outline-none  p-2 mb-4 mr-4"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
