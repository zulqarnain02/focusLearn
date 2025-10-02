import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { color } from 'chart.js/helpers';
import useWindowSize from '../../hooks/useWindowSize';

// Registering the required Chart.js components
ChartJS.register(
  ArcElement, // Required for Doughnut and Pie charts
  Tooltip,
  Legend,
  CategoryScale, // Required for Line charts
  LinearScale,
  PointElement,
  LineElement
);

const OverallJourneyChart = ({ journeys }) => {
  const { width } = useWindowSize();
  const mobileBreakpoint = 768;

  const chartData = {
    labels: journeys.map(journey => journey.name),
    datasets: [
      {
        label: 'Journey Progress',
        color:'#ffff',
        data: journeys.map(journey => journey.progress),
        fill: true,
        // backgroundColor: '#6366f1',
        backgroundColor: '#111827',
        borderColor: '#4f46e5',
      },
    ],
  };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//   };


const options = {
    scales: {
      x: {
        ticks: {
          color: 'white', 
          maxRotation: width < mobileBreakpoint ? 90 : 0,
          minRotation: width < mobileBreakpoint ? 90 : 0,
          callback: function(value) {
            const label = this.getLabelForValue(value);
            if (width < mobileBreakpoint) {
              return label.length > 20 ? label.substring(0, 20) + '...' : label;
            }
            return label;
          }
        },
        grid: {
            color: '#7a7979c2', 
          },
      },
      y: {
        ticks: {
          color: 'white', 
        },
        grid: {
            color: '#7a7979c2', 
          },
        beginAtZero: true,
        max: 100,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Color of the legend text
        },
      },
    },
    maintainAspectRatio: false,
  };


  return (
    <div className="bg-gray-800 p-2 sm:p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold text-primary-200 mb-4">Overall Journey Progress</h3>
      <div className='h-96 relative w-full'>
      <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default OverallJourneyChart;
