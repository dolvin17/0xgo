import React from 'react';
import LineChart01 from '../app/charts/LineChart01';
import Link from 'next/link';

function Chartsito() {

  const chartData = {
    labels: [
      '03-02-2024',
    ],
    datasets: [
      // Indigo line
      {
        data: [0, 1, 2, 3, 4, 5, 6,],
     
      },
      // Gray line
      {
        data: [0, 1, 2, 3, 4, 5, 6,],
 
      },
    ],
  };

  return (
    <div className="flex flex-col rounded-sm shadow-lg col-span-full sm:col-span-6 xl:col-span-4 dark:bg-white">
      <div className="px-5 pt-5">
        <div className="mb-1 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">PROFIT</div>
      </div>
      <div className="flex-grow overflow-hidden max-w-[calc(100vw-4rem)] sm:max-w-none">
        <LineChart01 data={chartData} width={530} height={150} />
      </div>
    </div>
  );
}

export default Chartsito;