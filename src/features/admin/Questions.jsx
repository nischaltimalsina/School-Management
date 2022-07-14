import React from "react";

const Questions = () => {
  return <div>Hello</div>;
};

export default Questions;

export const CreateQuestions = () => {
  return (
    <>
      <div className="p-4 large:p-10 larger:px-24">
        <div className=" max-w-[450px] space-y-5 ">
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="dayOff " className="col-span-8 mt-2">
              Select a Class
            </label>
            <select
              className="col-span-4  h-10 outline-none text-sm  peer inline-flex"
              min={10}
              id="dayOff"
              name="dayOff"
            >
              <option className="h-8  items-center flex px-4" value="sunday">
                Sunday
              </option>
            </select>
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="dayOff " className="col-span-8 mt-2">
              Select a Subject
            </label>
            <select
              className="col-span-4  h-10 outline-none text-sm  peer inline-flex"
              min={10}
              id="dayOff"
              name="dayOff"
            >
              <option className="h-8  items-center flex px-4" value="sunday">
                Sunday
              </option>
            </select>
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="dayOff " className="col-span-8 mt-2">
              Select a Chapter
            </label>
            <select
              className="col-span-4  h-10 outline-none text-sm  peer inline-flex"
              min={10}
              id="dayOff"
              name="dayOff"
            >
              <option className="h-8  items-center flex px-4" value="sunday">
                Sunday
              </option>
            </select>
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>
          <div className="grid grid-cols-12 items-center">
            <label htmlFor="dayOff " className="col-span-8 mt-2">
              Select a Category
              <span className="text-xs ml-5 font-light">
                <p>(Very Short, Short or Long)</p>
              </span>
            </label>
            <select
              className="col-span-4  h-10 outline-none text-sm  peer inline-flex"
              min={10}
              id="dayOff"
              name="dayOff"
            >
              <option className="h-8  items-center flex px-4" value="sunday">
                Sunday
              </option>
            </select>
            <span className="col-span-12 text-red-500 text-xs font-light h-0 mt-0 invisible peer-invalid:h-6 peer-invalid:visible peer-invalid:mt-2  ease-in-out duration-200">
              <p>
                Invalid Range: <i>Enter a value above 10</i>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export const ViewSets = () => {
  return <>Set</>;
};

export const ViewCollections = () => {
  return <>Collection</>;
};
