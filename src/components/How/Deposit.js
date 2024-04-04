import Image from "next/image";

export default function Deposit() {
  return (
    <>
      <div className="flex bg-white/50 backdrop-blur-sm border rounded-xl pt-4 flex-col-reverse w-full max-w-[22rem] mt-16">
        <div className="mx-3 text-center">
          <p className="text-2xl font-bold text-center text-yellow-500 ">
            {" "}
            Deposit && Stake
          </p>
          <p className="pb-4 text-xl text-black">
            {" "}
            Make the deposit and staking in just one click!{" "}
          </p>
          <p className="pb-4 text-xl text-black ">
            Forget about paying double gas fees. We have simplified the process
            for you in a single operation.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 duration-700 flex-flex-col sm:hover:skew-y-12"
            src="/deposit.svg"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
