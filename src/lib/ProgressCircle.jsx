import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const ProgressCircle = (props) => {
    const options = {
        cutout: "87%",
        hoverOffset: 4,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              padding: 20,
              font: {
                family: "'Noto Serif Display', serif",
                size: 10,
                weight: 300,
              },
            },
          },
          point: {
            pointStyle: "circle",
          },
          tooltip: {
            backgroundColor:"rgba(255, 255, 255, 0.8)",
            bodyColor:"rgba(0, 0, 0, 1)",
            borderColor:"rgba(0, 0, 0, 1)",
            borderWidth:0.5,
            padding: 15,
            caretSize: 0,
            caretPadding: 15,
            boxWidth: 10,
            boxHeight: 10,
            boxPadding: 10,
            usePointStyle: true,
            pointStyle: "circle",
            titleFont: {
              family: "'Noto Serif Display', serif",
              size: 10,
              weight: 300,
            },
            bodyFont: {
              family: "'Noto Serif Display', serif",
              size: 14,
              weight: 300,
            },
          },
        },
      };

  return <Doughnut data={props.data} options={options}/>;
};

export default ProgressCircle;
