import Image from "next/image";

export default function Kitsune() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 overflow-hidden sm:flex-row rounded-xl sm:mx-48 bg-0xgo-dark">
        <ProductCards
          name="HANUMAN"
          imageURL="/nft-hanuman.png"
          precios="250"
        />
        <div className="flex flex-col items-center  h-[400px]">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-center text-yellow-400">
            {" "}
            HANUMAN
          </h1>
		  <div  className="p-2 overflow-y-auto sm:pr-16 ">
          <p className="text-white indent-5">
            Hanuman, the revered monkey god in Hinduism, recognized for his
            strength and wisdom. He represents unparalleled physical and mental
            strength, also lifts mountains with ease and travels long distances,
            symbolizing perseverance and dedication.
            <br /> His legacy extends beyond ancient writings, until today, he
            inspires artists, writers and cultural movements, serving as a
            timeless symbol of courage, wisdom and resilience. Hanuman was
            dedicated to the selfless service of others. He helped the needy,
            protected the weak, and fought for justice. His spirit of service
            made him a symbol of compassion and generosity. He is also
            considered a erudite, who has mastered the six schools of grammar,
            the four Vedas and the six shastras. The Monkey God does not boast
            about how much he knows; It is the real expression of humility.
            <br />
            </p>
            <p className="py-4 text-white indent-5">
              <span className="font-semibold text-0xgo-blue">
                {" "}
                Cartesi Guardians
              </span>
              , is a NFT collection composed of{" "}
              <span className="font-semibold text-yellow-400">
                {" "}
                256 limited editions.
              </span>{" "}
              These pieces are not for sale, you will only be able to own a{" "}
              <span className="font-semibold text-0xgo-blue">
                Hanuman Cartesi Guardian{" "}
              </span>
              after staking
              <span className="font-semibold text-yellow-400">
                {" "}
                250 CTSI
              </span>{" "}
              tokens, on one of the available pools.
          </p>
        </div>
        </div>
      </div>
    </>
  );
}
function ProductCards({ name, imageURL, precios }) {
	return (
		<article className="flex flex-col ">
		  <div className="relative w-full h-full ">
			<figure className="w-[500px] h-[500px] ">
			  <Image
				className="object-cover"
				fill
				src={imageURL}
				alt=""
			  />
			</figure>
		  </div>
		  <div className="flex flex-col items-center justify-center ml-16 lg:flex-row">
			<div className="p-x border-gray-900/10 sm:border-l-transparent ">
			  <h3 className="text-xl font-bold text-center -skew-y-3 tracking-[.25em]  antialiased  text-yellow-400 uppercase">
				{name}
			  </h3>
			  <p className="flex flex-row gap-1 px-16 mb-8 font-thin text-white -skew-y-3 ">
				{precios}
				<Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
			  </p>
			</div>
		  </div>
		</article>
	  );
	}
	