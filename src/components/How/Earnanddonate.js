import Image from "next/image";

export default function Earnanddonate() {
  return (
    <>
      <div className="flex bg-white/50 backdrop-blur-sm border rounded-xl pt-4 flex-col-reverse w-full max-w-[22rem] mt-16">
        <div className="mx-3 text-center">
          <p className="text-2xl font-bold text-center text-yellow-500 ">
            {" "}
            Donate && Earn
          </p>
          <p className="pb-4 text-xl text-black">
            {" "}
			Choose the communities, and the % you want to allocate to each one.{" "}
          </p>
          <p className="pb-4 text-xl text-black ">
		  Earn up to 600 Reward Tokens for sending a batch tx to stake Pending pool deposits
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
            src="/head-heart.svg"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
