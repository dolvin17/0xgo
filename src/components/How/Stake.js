import Image from "next/image";

export default function Stake() {
  return (
    <>
      <div className="flex bg-white/50 backdrop-blur-sm border rounded-xl pt-4 flex-col-reverse w-full max-w-[22rem] mt-16">
        <div className="mx-3 text-center">
          <p className="text-2xl font-bold text-center text-yellow-500 ">
            {" "}
            Mint
          </p>
          <p className="pb-4 text-xl text-black">
            {" "}
            Show your involvement, we will assign a frame to your NFT, based on
            your staked amount.{" "}
          </p>
          <p className="pb-4 text-xl text-black ">
            Choose the elements you like the most, personalize your NFT.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
            src="/mint.svg"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
