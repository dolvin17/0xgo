import Image from "next/image";

export default function Node() {
  return (
    <>
      <div className="flex bg-white/50 backdrop-blur-sm border rounded-xl pt-4 flex-col-reverse w-full max-w-[22rem] mt-16">
        <div className="mx-3 text-center">
          <p className="text-2xl font-bold text-center text-yellow-500 ">
            {" "}
            Node Operator{" "}
          </p>
          <p className="pb-4 text-xl text-black">
            {" "}
            We Operate a Cartesi Node and have a Controller Contract that gives
            extra incentives...{" "}
          </p>
          <p className="pb-4 text-xl text-black ">
            that gives extra incentives as ZEROToken and access to VIP features
            like NFT Staking.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
            src="/node.gif"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
