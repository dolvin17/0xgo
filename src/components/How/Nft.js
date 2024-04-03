import Image from "next/image";

export default function Nft() {
  return (
    <>
      <div className="flex bg-white/50 backdrop-blur-sm border rounded-xl pt-4 flex-col-reverse w-full max-w-[22rem] mt-16">
        <div className="mx-3 text-center">
          <p className="text-2xl font-bold text-center text-yellow-500 ">
            {" "}
            NFT Staking
          </p>
          <p className="pb-4 text-xl text-black">
            {" "}
			We have a token-gated badges to our early stakers, to obtain custom platform titles like...  {" "}
          </p>
          <p className="pb-4 text-xl text-black ">
		  early pools access, exclusive discounts and even more...
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
            src="/nft-quetz.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
