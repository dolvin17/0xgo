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
		],
	  };
	

  return (
    <div className="flex flex-col p-1 border shadow-lg bg-white/50 backdrop-blur-sm rounded-xl col-span-full sm:col-span-6 xl:col-span-4 ">
      <div className="pt-5 pb-1">
        <div className="mb-1 font-thin text-center text-yellow-400 uppercase dark:text-slate-500">EXPECTED YIELD</div>
      </div>
      <div className="flex-grow overflow-hidden max-w-[calc(100vw-4rem)] sm:max-w-none">
        <LineChart01 data={chartData} width={530} height={150} />
      </div>
    </div>
  );
}

export default Chartsito;