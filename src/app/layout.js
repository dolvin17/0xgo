import "./globals.css";
import { Web3Modal } from "@/context/Web3Modal";

export const metadata = {
  title: "Oxgo",
  description: "A Cartesi Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
	<link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
		<body>
		<Web3Modal>{children}</Web3Modal>
		</body>
    </html>
  );
}
