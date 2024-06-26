"use client";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { isLoading, isSuccess, data, write } from "react-query";
import { parseEther } from "viem";
import { use, useState } from "react";
import { erc20ABI } from "wagmi";
import Image from "next/image";
import clsx from "clsx";

const abi = require("./contract.json");

export default function ApproveStake() {
  const { address } = useAccount();
  const { openChainModal } = useChainModal();
  const { openConnectModal = openChainModal } = useConnectModal();
  const { openAccountModal = openConnectModal } = useAccountModal();

  const [amount, setAmount] = useState("");
  const parsedAmount = parseEther(amount || "0");

  const [isApproved, setApproved] = useState(false);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
    isLoading: isAproving,
  } = usePrepareContractWrite({
    address: "0x9d2133302B0beB040d2E86D1fbC78Da1Dea9Fa3e", // CTSI token address
    abi: erc20ABI,
    functionName: "approve",
    args: ["0x297Ee41C619912bDC839b5464559090D8AD4E302", parsedAmount], // Pool address and parsed amount
  });
  const {
    data,
    error,
    isError,
    isLoading: isStaking,
    write: writeApprove,
  } = useContractWrite(config);

  const { write: writeStake } = useContractWrite({
    //zeroPool contract address: 0x297Ee41C619912bDC839b5464559090D8AD4E302
    address: "0x297Ee41C619912bDC839b5464559090D8AD4E302",
    abi,
    functionName: "depositAndStake",
    //CommunityAddress: 0x3c0e20fCA6d2E084127D056377a5f35294503447
    args: ["0x3c0e20fCA6d2E084127D056377a5f35294503447", parsedAmount],
  });

  const handleStake = async () => {
    try {
      if (address) {
        if (!isApproved) {
          await writeApprove();
          setApproved(true);
        } else {
          await writeStake();
        }
      } else {
        openAccountModal();
      }
    } catch (error) {
      console.error("The error is", error);
    }
  };

  const isDisabled = !amount || isAproving || isStaking;
  return (
    <>
      <label className="flex items-center pl-4 pr-2 border-2 bg-white/50 backdrop-blur-sm rounded-xl">
        <input
          className="flex-grow w-full py-4 font-light text-black bg-transparent outline-none rounded-xl"
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
          className="flex flex-row justify-center gap-2 px-5 py-1 font-semibold text-black rounded-lg bg-white/25 disabled:opacity-50"
          disabled={!amount}
        >
          <Image src="/ctsi.svg" alt="arrow-right" width={24} height={24} />
          CTSI
          <Image src="/mingcute.svg" alt="arrow-right" width={24} height={24} />
        </button>
      </label>
      <button
        suppressHydrationWarning
        disabled={isDisabled}
        onClick={() => handleStake()}
        className={clsx(
          "items-center flex-grow w-full py-4 pl-4 pr-2 my-4 text-xl font-bold text-black rounded-lg bg-0xgo-blue/90 hover:bg-0xgo-blue",
		  isDisabled && "opacity-60 cursor-not-allowed"
        )}
      >
        <div>{isApproved ? "Stake" : "Approve"} </div>
      </button>
    </>
  );
}
