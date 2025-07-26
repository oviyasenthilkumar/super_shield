
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MultigaurdDryHero from "../../../components/multigaurdDryHero"
import MultiguardApplication from '../../../components/MultiguardApplication'

import MultisealRelatedProducts from "../../../components/MultisealRelatedProduct";

const Multiguard = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <MultigaurdDryHero />
      <MultiguardApplication/>
      <MultisealRelatedProducts />
      <Footer/>
    </div>
  );
};

export default Multiguard;
