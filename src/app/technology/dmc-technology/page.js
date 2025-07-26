
import Breadcrumbs from "../../../../components/Breadcrumbs";
import ClimateCastingPerformance from "../../../../components/ClimateCastingPerformance";
import DMCAdvantages from "../../../../components/DMCAdvantages";
import DMCFunctionalPrinciple from "../../../../components/DMCFunctionalPrinciple ";
import DmcHero from "../../../../components/DmcHero";
import DmcIntro from "../../../../components/DmcIntro";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import SelfHealingTechnologies from "../../../../components/SelfHealingTechnologies";

const dmcTechnology = () => {
  return (
    <div>
      <Header />
      <DmcHero/>
      <Breadcrumbs />
      <DmcIntro/>
      <DMCFunctionalPrinciple/>
      <DMCAdvantages/>
      <ClimateCastingPerformance/>
      <SelfHealingTechnologies/>
      <Footer />
    </div>
  );
};

export default dmcTechnology;