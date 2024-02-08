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

const abi = require("./contract.json");

export default function Stake() {
  const { address } = useAccount();
  const { openChainModal } = useChainModal();
  const { openConnectModal = openChainModal } = useConnectModal();
  const { openAccountModal = openConnectModal } = useAccountModal();

  const { data, isLoading, isSuccess, write, error} = useContractWrite({
	//zeroPool contract address: 0x297Ee41C619912bDC839b5464559090D8AD4E302
	address: "0x297Ee41C619912bDC839b5464559090D8AD4E302",
	abi,
	functionName: "depositAndStake",
  });
 
  function stakeOrConnect() {
    if (address) {
      write({
		//CommunityAddress: 0x3c0e20fCA6d2E084127D056377a5f35294503447
		args: [ "0x3c0e20fCA6d2E084127D056377a5f35294503447",
        parseEther("1")],
	  });
    } else {
      openAccountModal();
    }
  }
  return (
    <button
      suppressHydrationWarning
      onClick={() => stakeOrConnect()}
      className="items-center flex-grow w-full py-4 pl-4 pr-2 my-4 text-xl font-bold text-black rounded-lg bg-0xgo-blue/90 hover:bg-0xgo-blue"
    >
       <div>Stake</div>
    </button>
  );
}
