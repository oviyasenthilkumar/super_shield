
import Breadcrumbs from "../../../components/Breadcrumbs";
import CoreCompetenciesSection from "../../../components/CoreCompetenciesSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CoreCompetenciesHero from "../../../components/CoreCompetenciesHero";

const corecompetencies = () => {
  return (
    <div>
      <Header />
      <CoreCompetenciesHero/>
      <Breadcrumbs />
      <CoreCompetenciesSection />
      <Footer />
    </div>
  );
};

export default corecompetencies;
