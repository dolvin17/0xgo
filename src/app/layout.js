"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {
    useAccount,
    useConnect,
    useDisconnect,
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
    useBalance,
    chain,
    allChains,
    defaultChains,
} from "wagmi";
import { injected } from "wagmi/connectors";

const { chains, publicClient } = configureChains(
  [goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "0xGO",
  projectId: "449f2fcb77536fe10ddf235f81039e79",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
      <body>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider modalSize="compact" chains={chains} >{children}</RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}


