import Image from "next/image";

export default function ThirdState() {
	return (
	  <>
		<div className="grid gap-4 py-16 w-fit sm:grid-cols-2">
		
		 <div className="flex flex-col items-center justify-center tracking-wide ">
		 <p className=" mx-8 sm:text-2xl antialiased tracking-widest text-center animate-fade-left animate-once animate-duration-800 animate-delay-[900ms] animate-fill-both">as <span className="text-2xl font-bold text-0xgo-blue" > ZEROToken</span>, which allows You, to earn potential rewards.. and access to VIP features like... </p>
		 </div>
		 <div className="flex items-center justify-center">
		<Image className=" transition-transform animate-wiggle  animate-infinite animate-duration-[4000ms] animate-delay-700"src="/token.png" alt="" width={300} height={300} />
		  </div>
		</div>
	  </>
	);
  }
  