import Breadcrumbs from "../../../../components/Breadcrumbs";
import ServicesOverviewHero from "../../../../components/ServicesOverviewHero";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import WeGoBeyond from '../../../../components/WeGoBeyond'
import SystemSolutions from "../../../../components/SystemSolution";
import PlanningPhase from "../../../../components/PlanningPhase";
import ExcutionPhase from "../../../../components/ExcutionPhase";


const Services = () => {
  return (
    <div>
      <Header />
      <ServicesOverviewHero />
      <Breadcrumbs />
      <WeGoBeyond />
      <PlanningPhase />
      <ExcutionPhase />
      <Footer />
    </div>
  );
};

export default Services;