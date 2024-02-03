'use client';
import React, { useRef, useEffect, useState } from 'react';

import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js/auto';
import 'chart.js'

function LineChart02({
  data,
  width,
  height
}) {

  const [chart, setChart] = useState(null)
  const canvas = useRef(null);
  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const newChart =  new Chart(ctx, {
		type: 'bar',
		data: data,
		options: {
		  indexAxis: 'y',
		  layout: {
			padding: {
			  top: 12,
			  bottom: 12,
			  left: 20,
			  right: 20,
			},
		  },
		  scales: {
			x: {
			  stacked: true,
			  display: false,
			},
			y: {
			  stacked: true,
			  display: false,
			},
		  },
		  plugins: {
			legend: {
			  display: false,
			},
			tooltip: {
			  callbacks: {
				title: () => false, // Disable tooltip title
				label: (context) => context.parsed.x,
			  },
			},
		  },
		  interaction: {
			intersect: false,
			mode: 'nearest',
		  },
		  animation: {
			duration: 500,
		  },
		  maintainAspectRatio: false,
		  resizeDelay: 200,
		},
		 
	  });
    setChart(newChart);
    return () => newChart.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center grow">
      <div>
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </div>
  );
}

export default LineChart02;