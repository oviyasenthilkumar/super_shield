import DpcHero from "../../../../components/DpcHero";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import DeepPenetrate from "../../../../components/DeepPenetrate";
import HealingProcessSection from "../../../../components/HealingProcessSection";
import SEMCrystallineSection from "../../../../components/SEMCrystallineSection";
import FunctionalPrinciple from "../../../../components/FunctionalPrinciple";

const Dpc = () => {
  return (
    <div>
      <Header/>
      <DpcHero/>
      <Breadcrumbs/>
      <DeepPenetrate/>
      <FunctionalPrinciple/>
      <HealingProcessSection/>
      <SEMCrystallineSection/>
      <Footer/>
    </div>
  );
};

export default Dpc;
