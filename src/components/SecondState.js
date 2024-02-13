import Image from "next/image";

export default function SecondState() {
  return (
    <>
      <div className="grid gap-4 px-8 py-16 mt-4 sm:grid-cols-2 sm:flex-col-reverse">
        <div className="flex items-center justify-center">
       <Image className="transition-transform animate-fade-right animate-once animate-duration-[3000ms] animate-delay-700"src="/node.gif" alt="" width={400} height={400} />
        </div>
       <div className="flex flex-col items-center justify-center tracking-wide ">
	   <p className=" mx-8 sm:text-2xl text-center animate-fade-left  antialiased tracking-widest animate-once animate-duration-800 animate-delay-[900ms] animate-fill-both">We Operate a <span className="text-2xl font-bold text-0xgo-blue " > Cartesi Node </span> and have a Controller Contract that gives extra incentives... </p>
	   </div>
      </div>
    </>
  );
}
