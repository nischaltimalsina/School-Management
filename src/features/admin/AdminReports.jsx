import React, { useState } from "react";
import { BsPeopleFill,BsDownload } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import Chart from "../../lib/Chart";
import { report, monthly, yearly } from "./data";
import * as htmlToImage from 'html-to-image';


const AdminReports = () => {
  const [dataArray, setDataArray] = useState(report);

  const labels = dataArray.map((data) => data.name);
  const dataset1 = dataArray.map((data) => data.Income);
  const dataset2 = dataArray.map((data) => data.Expenses);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: dataset1,
        backgroundColor: "rgba(5, 150, 105 , .8",
      },
      {
        label: "Expenses",
        data: dataset2,
        backgroundColor: "rgba(239,68,68, .8",
      },
    ],
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-6 text-gray-500">
        <div className="col-span-4 bg-white drop-shadow-lg rounded p-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl mb-2">1350</h1>
            <p>Total Students</p>
            <p className="text-xs text-green-500 mt-1">+0.4% than last month</p>
          </div>
          <BsPeopleFill size={50} />
        </div>
        <div className="col-span-4 bg-white drop-shadow-lg rounded p-4 flex justify-between items-end">
          <div>
            <h1 className="text-3xl mb-2">50</h1>
            <p>Total Staff</p>
            <p className="text-xs text-red-500 mt-1">-0.4% than last month</p>
          </div>
          <FaGraduationCap size={55} />
        </div>
      </div>
      <FinanceReports
        dataArray={dataArray}
        data={data}
        setDataArray={setDataArray}
      />
    </div>
  );
};

export default AdminReports;

export const FinanceReports = (props) => {

  const saveAs = (link, fileName) =>{
    var elem = window.document.createElement('a');
    elem.href = link
    elem.download = fileName;
    elem.crossOrigin = "anonymous"

    if (typeof elem.click === 'function') {
        elem.click();
    } else {
        elem.dispatchEvent(new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
        }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
  }

  const getImage = ()=>{
    htmlToImage.toPng(document.getElementById("report"))
    .then((dataUrl) => {
     saveAs(dataUrl, "report.png")
    })
    .catch((err) => {
      console.log(err);
    });
  }


 

  return (
    <div className="grid grid-cols-12 mt-4 gap-6 text-gray-500">
      <div className="col-span-12 larger:col-span-8 bg-white rounded drop-shadow-lg p-6 h-[30rem] overflow-hidden divide-y">
        <div className="flex justify-between">
          <div>
            <button
              className="bg-gray-100 p-2 border "
              onClick={() => props.setDataArray(report)}
            >
              Weekly
            </button>
            <button
              className="bg-gray-100 p-2 border "
              onClick={() => props.setDataArray(monthly)}
            >
              Monthly
            </button>
            <button
              className="bg-gray-100 p-2 border "
              onClick={() => props.setDataArray(yearly)}
            >
              Yearly
            </button>
          </div>
          <button className="flex items-center gap-2" id="download" onClick={getImage}><span className="text-sm font-light text-gray-500">PNG</span><BsDownload size={15}/></button>
        </div>

        <div className="h-96" id="report" crossOrigin="anonymous">
          <Chart
            title="Financial Report"
            axis="x"
            step="3000"
            width={30}
            data={props.data}
            stacked={false}
          />
        </div>
      </div>
      <div className="col-span-12 larger:col-span-4 bg-white rounded drop-shadow-lg p-6">
        <div className="" id="canvas"></div>
      </div>
    </div>
  );
};
