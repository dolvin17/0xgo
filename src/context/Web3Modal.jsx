'use client'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, avalanche, fantom, gnosis, mainnet, metis, optimism, polygon, goerli } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '449f2fcb77536fe10ddf235f81039e79'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, polygon, optimism, gnosis, metis, fantom, avalanche, goerli]
const wagmiConfig = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
	enableWalletConnect: true,
	enableInjected: true,
	enableEIP6963: true,
	enableCoinbase: true,
	enableEmail: true,
	enableLedger: true, })

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeVariables: {
	'--w3m-color-mix': '#000000',
	'--w3m-color-mix-strength': 1,
	'--w3m-color-mix-strength-hover': 60
  }
})

export function Web3Modal({ children }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}