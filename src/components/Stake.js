import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Stake() {
  const { address } = useAccount();
  const { openChainModal } = useChainModal();
  const { openConnectModal = openChainModal } = useConnectModal();
  const { openAccountModal = openConnectModal } = useAccountModal();

  function stakeOrConnect() {
    if (address) {
      alert("Stake");
    } else {
      openAccountModal();
    }
  }
  return (
    <button
      suppressHydrationWarning
      onClick={stakeOrConnect}
      className="items-center flex-grow w-full py-4 pl-4 pr-2 my-4 text-xl font-bold text-black rounded-lg bg-0xgo-blue/90 hover:bg-0xgo-blue"
    >
      {
		address
		  ? "Stake"
		  : "Connect Wallet"
	  }
    </button>
  );
}
