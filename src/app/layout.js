"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";
import { Londrina_Solid } from "next/font/google";
import { publicProvider } from "wagmi/providers/public";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const londrina = Londrina_Solid({ subsets: ["latin"], variable: '--font-londrina',
	  weight: "400", display: "swap" });

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
      <body className={londrina.className}>
        <WagmiConfig config={wagmiConfig}>
			<Analytics />
			<SpeedInsights />
          <RainbowKitProvider modalSize="compact" chains={chains} >
			<div className='bg-center bg-repeat-y bg-auto bg-nouns-sea'>{children}
				</div></RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}


