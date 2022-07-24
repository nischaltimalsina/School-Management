import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (props) => {
    const options = {
        indexAxis:props.axis,
        responsive:true ,
        scales: {
          x: {
            stacked:props.stacked,
            grid: {
              display: false,
            },
          },
          y: {
            stacked:props.stacked,
            min: 0,
            ticks:{
              stepSize:props.step,
              precision:0,
              maxTicksLimit:7
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              padding: 20,
              font: {
                family: "'Noto Serif Display', serif",
                size: 14,
                weight: 300,
              },
            },
          },
          title: {
            display: true,
            text: props.title,
            padding: 20,
            font: {
              family: "'Noto Serif Display', serif",
              size: 20,
              weight: 300,
            },
          },
          point: {
            pointStyle: "circle",
          },
          tooltip: {
            padding: 15,
            caretSize: 10,
            caretPadding: 15,
            boxWidth: 10,
            boxHeight: 10,
            boxPadding: 5,
            titleFont: {
              family: "'Noto Serif Display', serif",
              size: 18,
              weight: 300,
            },
            bodyFont: {
              family: "'Noto Serif Display', serif",
              size: 14,
              weight: 300,
            },
          },
        },
        maintainAspectRatio: false,
        maxBarThickness: props.width,
        borderRadius: 3,
        font: {
          family: "'Noto Serif Display', serif",
          size: 14,
        },
      };
  return <Bar options={options} data={props.data}/>;
};

export default Chart;
