'use client';
import Spline from '@splinetool/react-spline';
import Image from "next/image";


export default function Resume() {
	  return (
	<div className="flex items-center justify-center gap-8 my-16 mt-32 sm:text-xl">
		<div className="flex flex-col items-center">
		<span className="font-bold">10,000 CTSI</span>
		<span className="font-thin">Total Staked</span>
		</div>
		<Image src="/line.svg" alt="cts" width={1} height={4} />
		<div className="flex flex-col items-center">
		<span className="font-bold">$250.32</span>
		<span className="font-thin">Total Donated</span>
		</div>
		<Image src="/line.svg" alt="cts" width={1} height={4} />
		<div className="flex flex-col items-center">
		<span className="font-bold">$452</span>
		<span className="font-thin">Total Earned</span>
		</div>
	</div>
  );
}