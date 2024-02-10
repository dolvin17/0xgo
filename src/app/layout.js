"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { Analytics } from '@vercel/analytics/react';
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
			<Analytics />
          <RainbowKitProvider modalSize="compact" chains={chains} >{children}</RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}


