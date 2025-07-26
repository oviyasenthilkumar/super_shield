import Breadcrumbs from "../../../../components/Breadcrumbs";
import OverviewSolution from "../../../../components/OverviewSolution";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import ProvenSolution from '../../../../components/ProvenSolution'
import DryBoxSystemComponent from "../../../../components/DryBoxSystemComponent";
import DryboxComponent from '../../../../components/DryboxComponent'
import SystemSolutions from "../../../../components/SystemSolution";


const Overview = () => {
  return (
    <div>
      <Header />
      <OverviewSolution/>
      <Breadcrumbs />
      <ProvenSolution />
    <SystemSolutions />
      <Footer />
    </div>
  );
};

export default Overview;