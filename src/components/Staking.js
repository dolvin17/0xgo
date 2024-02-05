import Chartsito from "./Chartsito";
import Balance from "./Balance";
import Image from "next/image";


export default function Staking() {
  return (
    <div className="max-w-xl p-6 mx-1 border-opacity-50 sm:mx-auto bg-0xgo-dark rounded-2xl shadow-black/30">
      <div className="flex flex-row items-center gap-6 mb-4 text-white">
        <button className="font-bold text-white ">STAKE</button>
        <button className="font-semibold text-white ">UNSTAKE</button>
        <div className="flex-grow"></div>
		<Balance />
      </div>
      <label className="flex items-center pl-4 pr-2 border-2 rounded-lg border-white/30 bg-white/10">
        <input
          className="flex-grow w-full py-4 font-light bg-transparent outline-none text-white/30 rounded-xl"
          placeholder="123 CTSI"
          inputMode="decimal"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          type="text"
          minLength="1"
          maxLength="9"
        />
        <button className="flex flex-row justify-center gap-2 px-5 py-1 font-semibold text-white rounded-lg bg-white/25">
          <Image src="/ctsi.svg" alt="arrow-right" width={24} height={24} />
          CTSI
          <Image src="/mingcute.svg" alt="arrow-right" width={24} height={24} />
        </button>
      </label>
      <button className="items-center flex-grow w-full py-4 pl-4 pr-2 my-4 text-xl font-bold text-black rounded-lg bg-0xgo-blue/90 hover:bg-0xgo-blue">
        Stake CTSI
      </button>
	  {/*}
      <div className="my-4 text-base font-semibold sm:text-lg">
        <span className="py-2 text-white">
          Estimated returns for statking 1 CTSI{" "}
        </span>
        <span className="ml-1 text-gray-500">(CTSI / month)</span>
      </div>
      <div className="flex items-center flex-grow w-full max-w-xl gap-4">
        <Chartsito />
  </div>*/}
    </div>
  );
}
