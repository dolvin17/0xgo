import Chartsito from "./Chartsito";
import Balance from "./Balance";
import Stake from "./Stake";

export default function Staking() {
  return (
    <div className="max-w-xl p-6 mx-1 mt-8 text-xl text-black border border-opacity-50 sm:mx-auto bg-white/50 backdrop-blur-sm rounded-xl shadow-black/30">
      <div className="flex flex-row items-center gap-6 mb-4 ">
        <button className="font-bold ">STAKE</button>
        <button className="font-semibold ">UNSTAKE</button>
        <div className="flex-grow"></div>
        <Balance />
      </div>
        <Stake />
      <div className="my-4 text-base font-semibold sm:text-lg">
        <span className="py-2 ">
          Estimated returns for statking 100 CTSI{" "}
        </span>
        <span className="ml-1 text-gray-500">(CTSI / month)</span>
      </div>
      <div className="flex items-center flex-grow w-full max-w-xl gap-4">
        <Chartsito />
  </div>
    </div>
  );
}
