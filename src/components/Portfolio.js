'use client';
import React from 'react';
import LineChart02 from '../app/charts/LineChart02';
import { TbPointFilled } from "react-icons/tb";
import Image from 'next/image';
import Organizations from './Organizations';

function Portfolio() {

  const chartData = {
	labels: ['Organization'],
    datasets: [
      {
        label: 'HD SPAIN',
        data: [65],
		backgroundColor: '#00E834',
		
      },
      {
        label: 'Sochi',
        data: [23],
		backgroundColor: '#FF02F5',
      },
      {
        label: 'Ashe',
        data: [12],
		backgroundColor: '#FFF200',

      },
    ],
  };

  return (
    <div  className="w-full max-w-xl mx-auto bg-black border-opacity-50 rounded-2xl shadow-black/30">
      <div className="flex flex-row items-center px-5 pt-4 border-slate-100 dark:border-slate-700">
        <h2 className="mt-4 font-semibold text-slate-800 dark:text-slate-100">PORTFOLIO</h2>
		<div className='flex flex-grow'></div>
	  <p className="px-5 mt-4 text-xs text-slate-800 text-white/40">*Hover to see your investment</p>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="mx-auto grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart02 data={chartData} width={595} height={42} />
      </div>
	  <div className='flex items-center justify-between gap-10 pt-4 mx-2 w-fit'>
		<span className='text-white/50 sm:w-[120px] font-thin'>Organization </span>
		<span className='text-white/50 sm:w-[65px] font-thin'>Alloc. </span>
		<span className='text-white/50 w-[40px] sm:w-[65px] font-thin'>Your Deposit </span>
		<span className='text-white/50 w-[30px] sm:w-[80px] font-thin'>Total Earned </span>
		<span className='text-white/50 sm:w-[50px] font-thin'>Donated </span>
	  </div>
	<Organizations />
	<div className='flex flex-row items-center justify-center gap-16 px-2 py-4 mx-1 mb-2 border-b-2 border-white/40'>
	<button className="items-center flex-grow w-full py-2 pl-4 pr-2 my-4 text-white rounded-lg bg-0xgo-dark/70 hover:bg-0xgo-dark">
		Restake Rewards
	</button>
	<button className="items-center flex-grow w-full py-2 pl-4 pr-2 my-4 text-black rounded-lg bg-0xgo-blue/90 hover:bg-0xgo-blue">
		Claim Rewards $73
	</button>
    </div>
    </div>
  );
}

export default Portfolio;