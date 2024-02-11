import Navigation from "@/components/Navigation/Navigation";
import Resume from "@/components/Navigation/Resume";
import Staking from "@/components/Staking";
import Portfolio from "@/components/Portfolio";
import Caring from "@/components/Caring";
import Footer from "@/components/Navigation/Footer";

export default function Stake() {
  return (
    <>
      <Navigation />
      <Resume />
      <Staking />
      <Portfolio />
      <Caring />
      <Footer />
    </>
  );
}
