import PanelStopHero from "../../../components/PanelstopHero";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import PanelStop from '../../../components/Panelstop'
import Breadcrumbs from "../../../components/Breadcrumbs";
import ProductRange from '../../../components/ProductRange'
import PanelStopApplications from "../../../components/PanelStopApplications";

const Panelstop = () => {
  return (
    <div>
     <Header />
      <PanelStopHero />
      <Breadcrumbs />
      <PanelStop />
      <PanelStopApplications/>
      <ProductRange />
        <Footer />
    </div>
  );
};

export default Panelstop;

