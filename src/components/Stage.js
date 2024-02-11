import Link from "next/link";
import Image from "next/image";

export default function Stage() {
  return (
    <div className="grid flex-row items-center justify-center px-8 pt-16 sm:grid-cols-2 sm:pt-32 sm:mb-12">
      <div className="flex flex-col items-center justify-center">
        <div className="px-24 mt-8 font-bold text-center text-7xl sm:text-5xl shadow-color-black text-0xgo-blue animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
          Staking 4 Good
        </div>
        <div className="max-w-lg mt-4 ml-12 text-center shadow-color-black sm:text-2xl text-white/50 animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
          Make real impact, help and earn
          <p className="mt-4 text-white text-md animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
            Actively participates in staking protocols by running validators and
            operating nodes to earn passive rewards, and staking incentives.
            These rewards goes towards communities.
          </p>
          <form className="flex items-center justify-center my-16 sm:my-24">
            <Link
              href="https://explorer.cartesi.io/stake/0xf22dbcf128c394b067f484fe78586fef86846834"
              target="_blank"
              className="p-2 border-2 text-0xgo-blue bg-0xgo-dark border-cyan-600 rounded-xl animate-fade-up animate-once animate-duration-700 animate-delay-300 animate-ease-in-out hover:bg-cyan-700"
            >
              Active Pools
            </Link>
          </form>
        </div>
      </div>
      <div className="static flex flex-col items-center justify-center">
        <div className="flex flex-row ">
          <div className="animate-fade animate-once animate-duration-[10000ms] animate-delay-300 animate-ease-in-out">
            <Image src="/cartesito.png" alt="" width={600} height={600} />
          </div>
        </div>
      </div>
    </div>
  );
}
