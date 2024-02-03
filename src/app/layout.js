import "./globals.css";
import { Web3Modal } from "@/context/Web3Modal";

export const metadata = {
  title: "Oxgo",
  description: "LFG",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<body>
		<Web3Modal>{children}</Web3Modal>
		</body>
    </html>
  );
}
