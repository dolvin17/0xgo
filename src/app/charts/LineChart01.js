'use client';
import React, { useRef, useEffect, useState } from 'react';

import {
  Chart, LineController, LineElement, Filler, PointElement, LinearScale, TimeScale, Tooltip,
} from 'chart.js/auto';
import 'chart.js'

function LineChart01({
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
		type: 'line',
		data: {
		  labels: ['100 CTSI', '115 CTSI', '130 CTSI', '155 CTSI', '185 CTSI'],
		  datasets: [{
			data: [0, 3, 5, 8, 12],
			borderWidth: 3,
			borderColor: '#02F6FF',
			pointHoverRadius: 5,
			backgroundColor: '#02F6FF15',
			pointBackgroundColor: '#02F6FF',
			fill: true,
			tension: 0.4,
		  }]
		},
		options: {
			plugins: {
				legend: {
				  display: false,
				},
		  scales: {
			y: {
			  beginAtZero: true,
			}
		  }
		},
	}
	  });
    setChart(newChart);
    return () => newChart.destroy();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas ref={canvas} width={width} height={height}></canvas>
  );
}

export default LineChart01;