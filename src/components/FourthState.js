import Image from "next/image";

export default function FourthState() {
  return (
    <>
      <div className="grid gap-4 py-16 my-2 sm:grid-cols-2 w-fit">
        <div>
		<Image  className="transition-transform animate-wiggle animate-infinite animate-duration-[4000ms] animate-delay-700"src="/guardiannft.png" alt="" width={1000} height={1000} />
        </div>
       <div className="flex flex-col items-center justify-center tracking-wide ">
	   <p className="mx-8 sm:text-2xl text-center antialiased tracking-widest animate-fade-left animate-once animate-duration-800 animate-delay-[900ms] animate-fill-both"> <span className="text-2xl font-bold text-0xgo-blue" > Cartesi Guardians </span> is a token-gated badge to our early stakers, to obtain custom platform titles, early pools access, exclusive discounts and even more.... </p>
	   </div>
      </div>
    </>
  );
}
