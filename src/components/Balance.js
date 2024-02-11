'use client';
import { useAccount, useNetwork, useBalance } from "wagmi";

export default function Balance() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data, isError, error, isLoading } = useBalance({
    address:  address,
  });

  return (
    <div suppressHydrationWarning>
      {data?.formatted ?? 0}  {data?.symbol ?? 'ETH'}
    </div>
  );
}
