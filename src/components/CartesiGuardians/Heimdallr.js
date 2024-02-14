import Image from "next/image";

export default function Heimdallr() {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-12 mt-4 overflow-hidden rounded-xl sm:mx-48 bg-0xgo-dark">
        <ProductCards
          name="HEIMDALLR"
          imageURL="/nft-keimdall.png"
          precios="500"
        />
        <div className="flex flex-col items-center">
          <h1 className="pb-8 text-4xl font-bold tracking-widest text-yellow-400">
            {" "}
            HEIMDALLR
          </h1>
          <p className="px-24 text-white indent-5">
            Heimdallr is a legendary figure known for his role protecting the kingdom of the gods.
			He has supernatural sight and hearing that allow
            him to observe and hear everything that happens in the nine worlds.
            He can see to the end of time and hear the grass growing. He stands
            on the Bifröst, the bridge that connects Asgard to Midgard. His
            constant vigilance protects Asgard from intrusions and threats. He
            is also known for his wielding of the Gjallarhorn, the magical horn
            of which will sound with a deafening roar to announce Ragnarok.
			<br />
            Heimdallr represents light and vigilance. Despite knowing all the
            secrets of the universe, He is noble and honorable, always
            acts with integrity. The figure of Heimdallr continues to inspire
            people today as a symbol of vigilance, protection and fight for
            worthy causes.
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
              These pieces are not for sale, you will only be able to own a{" "}
              <span className="font-semibold text-0xgo-blue">
                Heimdallr Cartesi Guardian{" "}
              </span>
              after staking
              <span className="font-semibold text-yellow-400"> 500 CTSI</span>{" "}
              tokens, on one of the available pools.
          </p>
        </div>
      </div>
    </>
  );
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
