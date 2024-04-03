import Link from "next/link";
import Image from "next/image";

export default function Stage() {
  return (
    <div className="grid flex-row items-center justify-center pt-24 sm:pt-48 sm:mb-32">
      <h3 className="px-24 mt-8 font-bold text-center text-yellow-500 text-7xl sm:text-5xl shadow-color-black animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
        Staking 4 Good
      </h3>
      <div className="flex flex-col items-center justify-center max-w-lg mt-4 antialiased italic tracking-widest text-center shadow-color-black sm:text-2xl text-black/50 animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
        <p className="text-3xl font-thin">
          {" "}
          Sharing is giving from what one has, not from what one has left over{" "}
        </p>
        <p className="p-2 mt-4 text-3xl not-italic text-black text-md animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
          Staking protocol by running validators and operating nodes to earn
          passive rewards, and staking incentives. These rewards goes towards
          communities
        </p>
        <form className="flex items-center justify-center gap-4 my-16 sm:my-24">
          <Link
            href="https://explorer.cartesi.io/stake/0xf22dbcf128c394b067f484fe78586fef86846834"
            target="_blank"
            className="p-2 not-italic border-2 shadow-lg shadow-cyan-500/50 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out hover:bg-cyan-700"
          >
            Active Pools
          </Link>
          <Link
            href="/guardians"
            target="_blank"
            className="p-2 not-italic border-2 shadow-lg shadow-cyan-500/50 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out hover:bg-cyan-700"
          >
            CTSI Guardians
          </Link>
        </form>
      </div>
    </div>
  );
}
