import Footer from "@/components/Navigation/Footer";
import Navigation from "@/components/Navigation/Navigation";
import Denny from "@/components/Us/Denny";
import Karol from "@/components/Us/Karol";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-3xl font-bold">Meet the 0xGO Team</h1>
        <p className="pb-8 mt-4 text-xl text-center border-b-2 text-white/25">
          We are a team of developers building the future of finance.
        </p>
        <div className="flex flex-row items-center justify-center gap-16 mt-16">
          <Karol />
          <Denny />
        </div>
        <p className="pt-8 mt-8 text-xl text-center duration-300 border-t-2 text-white/25 animate-delay-1000 animate-pulse animate-twice">
          Want to chat?
        </p>
        <Link
          href="https://t.me/+XXvIHa1l_K9mY2Fk"
          target="_blank"
          className="mt-4 text-xl font-bold text-cyan-500 hover:text-yellow-300"
        >
          Join us on Telegram
        </Link>
      </div>
      <Footer />
    </>
  );
}
