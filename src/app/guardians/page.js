import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";
import { BiHappyBeaming } from "react-icons/bi";
import { RiCopperCoinFill } from "react-icons/ri";
import { GiBreakingChain, GiMagnifyingGlass } from "react-icons/gi";
import Footer from "@/components/Navigation/Footer";

export default function Cards() {
  return (
    <>
      <Navigation />
        <div className="flex flex-col items-center justify-center py-8 pt-24 pb-8 text-gray-900">
          <h1 className="pb-8 text-3xl font-bold tracking-widest text-yellow-400">
            COMMING SOON.. FOR STAKING
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center w-full text-gray-600 gap-x-32 bg-wh">
            <div className=" rounded-2xl">
              <ProductCards
                name="M8"
                imageURL="/nft-m8.png"
                precios="Discord Role"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="Kitsune"
                imageURL="/nft-kitsune.png"
                precios="50 CTSI"
              />
            </div>
            <div className=" rounded-2xl">
              <ProductCards
                name="Hánuman"
                imageURL="/nft-hanuman.png"
                precios="250 CTSI"
              />
            </div>

            <div className=" rounded-2xl">
              <ProductCards
                name="HeimdallR"
                imageURL="/nft-keimdall.png"
                precios="500 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="Bastet"
                imageURL="/nft-bastet.png"
                precios="800 CTSI"
              />
            </div>

			<div className=" rounded-2xl">
              <ProductCards
                name="DRAKE"
                imageURL="/nft-drake.png"
                precios="800 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="SIMURGH"
                imageURL="/nft-simurgh.png"
                precios="1000 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="CALADRIUS"
                imageURL="/nft-caladrius.png"
                precios="1000 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="PHOENIX"
                imageURL="/nft-phoenix.png"
                precios="1000 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="POSEIDON"
                imageURL="/nft-poseidon.png"
                precios="1600 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="NEPTUNO"
                imageURL="/nft-neptuno.png"
                precios="1600 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="KUKULKAN"
                imageURL="/nft-kukulkan.png"
                precios="+ 2000 CTSI"
              />
            </div>
			<div className=" rounded-2xl">
              <ProductCards
                name="QUETZALCOATL"
                imageURL="/nft-quetz.png"
                precios="+ 2000 CTSI"
              />
            </div>
		
			
          </div>
      </div>
	  <Footer />
    </>
  );
}
function ProductCards({ name, imageURL, precios }) {
  return (
    <article className="flex flex-col w-full max-w-[16rem]  overflow-x-hidden transition-transform animate-wiggle animate-infinite animate-duration-[6000ms] animate-delay-700 py-32 shadow-2xl border-2 rounded-2xl  border-black ">
      <div className="relative w-full h-[16rem] bg-white ">
        <figure className="w-64 h-64 transition bg-black border-2 border-black rounded-b-none ">
          <Image
            className="object-cover w-full h-full scale-[2]"
            fill
            src={imageURL}
            alt=""
          />
        </figure>
      </div>
      <div className="flex flex-col items-center justify-center mt-24 ml-16 lg:flex-row">
        <div className="p-3 border-gray-900/10 sm:border-l-transparent ">
          <h3 className="text-xl font-bold text-center text-yellow-400 uppercase">{name}</h3>
          <p className="flex flex-row gap-1 px-4 font-thin text-white ">{precios}
		  <Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
		  </p>
        </div>
      </div>
    </article>
  );
}
