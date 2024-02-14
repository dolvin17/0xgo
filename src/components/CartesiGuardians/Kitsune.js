import Image from "next/image";

export default function Kitsune() {
	return (
		<>
		   <div className="flex flex-row items-center justify-center gap-12 mt-4 overflow-hidden rounded-xl sm:mx-48 bg-0xgo-dark">
        <ProductCards
          name="KITSUNE"
          imageURL="/nft-kitsune.png"
          precios="50"
        />
        <div className="flex flex-col items-center">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-yellow-400">
            {" "}
            KITSUNE
          </h1>
          <p className="px-24 text-white indent-5">
            The mythical spirits of the nine-tailed foxes are revered for their
            cunning and intelligence, their shape-shifting abilities, and their
            connection to the spirit world. They are charming, and it is
            undeniable that they continue to represent mysticism and wisdom in
            various interpretations. 
			<br/> Kitsune hold a special place in folklore as
            unique and extraordinary creatures. Its ability to transform and
            navigate between worlds symbolizes adaptability and a deep
            understanding of the complexities of life. In modern contexts,
            Kitsune are celebrated not only for their magical qualities but also
            as icons of intelligence and resilience.
            <br />
          </p>
            <p className="px-24 py-4 text-white indent-5">
              <span className="font-semibold text-0xgo-blue">
                {" "}
                Cartesi Guardians
              </span>
              , is a NFT collection composed of{" "}
              <span className="font-semibold text-yellow-400">
                {" "}
                256 limited editions.
              </span>{" "}
			  These pieces are not for sale, you will only be able to own a {" "} 
              <span className="font-semibold text-0xgo-blue"> 
			  Kitsune Cartesi Guardian 	 {" "} 
              </span>
			  after staking<span className="font-semibold text-yellow-400"> 50 CTSI</span> tokens,
			  on one of the available pools.
            </p>
        </div>
      </div>
		</>
	)
}
function ProductCards({ name, imageURL, precios }) {
	return (
	  <article className="flex  mx-12 flex-col w-full max-w-[16rem]  py-32  ">
		<div className="relative w-full h-full">
		  <figure className="w-64 h-64 ">
			<Image
			  className="object-cover w-full h-full scale-[2]"
			  fill
			  src={imageURL}
			  alt=""
			/>
		  </figure>
		</div>
		<div className="flex flex-col items-center justify-center mt-32 ml-16 lg:flex-row">
		  <div className="p-3 border-gray-900/10 sm:border-l-transparent ">
			<h3 className="text-xl font-bold text-center tracking-[.25em] antialiased text-yellow-400 uppercase">
			  {name}
			</h3>
			<p className="flex flex-row gap-1 px-16 font-thin text-white ">
			  {precios}
			  <Image src="/ctsi.svg" alt="0xGO" width={14} height={14} />
			</p>
		  </div>
		</div>
	  </article>
	);
  }
  