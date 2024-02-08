import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount, useWaitForTransaction } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { parseEther } from "ethers";
import Image from "next/image";
import { erc20ABI } from "wagmi";
import { useState } from "react";

export default function Approve() {
  const { address } = useAccount();
  const { openChainModal } = useChainModal();
  const { openConnectModal = openChainModal } = useConnectModal();
  const { openAccountModal = openConnectModal } = useAccountModal();

  const [amount, setAmount] = useState("");
  const parsedAmount = parseEther(amount || "0");
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0x9d2133302B0beB040d2E86D1fbC78Da1Dea9Fa3e", // CTSI token address
    abi: erc20ABI,
    functionName: "approve",
    args: ["0x297Ee41C619912bDC839b5464559090D8AD4E302", parsedAmount], // Pool address and parsed amount
  });
  const { data, error, isError, write } = useContractWrite(config);

  //user input
  function handleApprove() {
    if (address) {
      if (config) {
        write?.();
      }
    } else {
      openAccountModal();
    }
  }

  return (
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
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        className="flex flex-row justify-center gap-2 px-5 py-1 font-semibold text-white rounded-lg bg-white/25 disabled:opacity-50"
        disabled={!amount}
        onClick={handleApprove}
      >
        <Image src="/ctsi.svg" alt="arrow-right" width={24} height={24} />
        Aprove
        <Image src="/mingcute.svg" alt="arrow-right" width={24} height={24} />
      </button>
    </label>
  );
}
