
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import MultisealDryHero from "../../../components/MultisealDryHero"
import MultisealDryApplication from '../../../components/MultisealDryApplictaion'

import MultisealRelatedProducts from "../../../components/MultisealRelatedProduct";

const Multiseal = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <MultisealDryHero />
      <MultisealDryApplication/>
      <MultisealRelatedProducts />
      <Footer/>
    </div>
  );
};

export default Multiseal;
