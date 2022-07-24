import React from "react";
import Chart from "../../lib/Chart";
import ProgressCircle from "../../lib/ProgressCircle";
import User from "./assets/user.jpeg";

const AdminDash = () => {
  const labels = ["Absent", "Present"];
  const label = "Attendance";
  const data = [60, 150];
  const background = ["rgba(239,68,68, .9)", "rgba(5, 150, 105 , .8)"];

  const dataset = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        backgroundColor: background,
      },
    ],
  };

  const report = [
    {
      subject: "English",
      grade: "6A",
      totalChapters: "14",
      completed: "9",
    },
    {
      subject: "English",
      grade: "6B",
      totalChapters: "14",
      completed: "11",
    },
    {
      subject: "Nepali",
      grade: "5",
      totalChapters: "15",
      completed: "12",
    },
    {
      subject: "Social",
      grade: "5",
      totalChapters: "14",
      completed: "4",
    },
  ];

  const dataset2 = {
    labels: report.map((reports) => `${reports.grade} ${reports.subject}`),
    datasets: [
      {
        label: "Completed",
        data: report.map((reports) => reports.completed),
        backgroundColor: "rgba(5, 150, 105 , .8",
      },
      {
        label: "Remaining",
        data: report.map(
          (reports) => reports.totalChapters - reports.completed
        ),
        backgroundColor: "rgba(239,68,68, .8",
      },
    ],
  };
  return (
    <div className="w-full grid grid-cols-12 gap-5 h-full mb-10">
      <div className="col-span-12 larger:col-span-8 mt-6 space-y-5 h-full">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-7 text-end p-4">
            <h1 className="text-2xl font-light larger:text-3xl">
              Greetings, Admin
            </h1>
            <p className="font-extralight larger:text-lg">
              Welcome to your Dashboard
            </p>
            <p className="text-xs larger:text-sm font-extralight">
              Get a glimpse at your daily activities and reports
            </p>
          </div>
          <div className="col-span-5  ">
            <img
              src={User}
              alt=""
              className="object-cover rounded-full h-48 w-48 shadow-inner drop-shadow-lg"
            />
          </div>
        </div>

        {/* Schedule */}

        <div className="w-full bg-white rounded-md shadow p-4 ">
          <p className="text-gray-500 font-extralight">Today's Schedule</p>
          <div className="flex justify-between items-center mt-2 mb-2">
            <p className="text-sm text-emerald-600 font-extralight">
              Time Remaining
            </p>
            <p className=" text-sm text-gray-500">4 hrs </p>
          </div>
          <div className="relative w-full bg-gray-300 h-2 rounded-full mb-3">
            <div
              className="bg-emerald-500 h-full rounded-full"
              style={{ width: "45%" }}
            ></div>
            <div
              className={`absolute w-4 h-4 rounded-full bg-emerald-500 -top-1 border border-white `}
              style={{ left: "44%" }}
            ></div>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-6 medium:col-span-2  flex justify-between medium:justify-start gap-5 bg-red-100/80 p-2 rounded shadow">
              <p className="text-gray-500 font-extralight text-sm">
                Previous Session:
              </p>
              <p className="text-red-500 text-sm">Grade 4 A</p>
            </div>
            <div className="col-span-6 medium:col-span-2  flex justify-between medium:justify-start gap-5 bg-emerald-600/20 p-2 rounded shadow">
              <p className="text-gray-500 font-extralight text-sm">
                Current Session:
              </p>
              <p className="text-emerald-500 text-sm">Grade 3 A</p>
            </div>
            <div className="col-span-6 medium:col-span-2  flex justify-between medium:justify-start gap-5 bg-amber-100/80 p-2 rounded shadow">
              <p className="text-gray-500 font-extralight text-sm">
                Next Session:
              </p>
              <p className="text-amber-500 text-sm">Grade 4 A</p>
            </div>
          </div>
        </div>

        {/* Attendance Progress */}

        <div className="w-full flex justify-center space-y-5 medium:space-y-0 items-center medium:justify-between  flex-wrap  bg-white rounded-md shadow p-4  overflow-hidden">
          <div></div>
          <div className="h-48 w-48">
            <ProgressCircle data={dataset} />
          </div>
        </div>

        {/* Course Progress */}

        <div className="w-full bg-white rounded-md shadow p-5">
          <p className="text-gray-500 font-extralight">Your Course Progress</p>
          <div className="flex justify-between items-center mt-5 mb-2">
            <p className="text-sm text-gray-600 font-extralight">
              Overall Credit Progress
            </p>
            <p className=" text-sm text-gray-500">Satisfactory </p>
          </div>
          <p className="my-2 text-xs text-gray-400">
            Your progress schedule looks manageable.
          </p>
          <div className="relative w-full h-64">
            <Chart
              id="course-progress"
              title="Overall Course Progress"
              axis="y"
              width={10}
              data={dataset2}
              stacked={true}
            />
          </div>
          <div className="flex justify-between items-center mt-5 mb-2">
            <p className="text-sm text-gray-600 font-extralight">
              Current Session Progress
            </p>
            <p className=" text-sm text-gray-500">Late</p>
          </div>
          <p className="my-2 text-xs text-gray-400">
            Oops, it looks like you're running behind schedule here.
          </p>
          <div className="relative w-full bg-gray-300 h-2 rounded-full">
            <div
              className="bg-red-500 h-full rounded-full"
              style={{ width: "32%" }}
            ></div>
            <div
              className={`absolute w-4 h-4 rounded-full bg-red-500 -top-1 border border-white `}
              style={{ left: "31%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="col-span-12 larger:col-span-4 mt-6  large:mt-0 bg-white h-full rounded-md shadow">
        <div className="p-4 ">
          <h1 className="text-end  text-xl uppercase mb-6">Your Activities</h1>

          <ol className="relative border-l border-gray-300">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 -left-1.5 mt-1.5 bg-gray-300 rounded-full border border-white"></div>
              <p className="text-sm text-gray-400">July 2022</p>
              <p className="text-gray-600 text-lg font-light ">
                Assignment Review
              </p>
              <p className="text-sm text-gray-500 font-extralight">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 -left-1.5 mt-1.5 bg-gray-300 rounded-full border border-white"></div>
              <p className="text-sm text-gray-400">July 2022</p>
              <p className="text-gray-600 text-lg font-light">
                Assignment Review
              </p>
              <p className="text-sm text-gray-500 font-extralight">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 -left-1.5 mt-1.5 bg-gray-300 rounded-full border border-white"></div>
              <p className="text-sm text-gray-400">July 2022</p>
              <p className="text-gray-600 text-lg font-light">
                Assignment Review
              </p>
              <p className="text-sm text-gray-500 font-extralight">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
