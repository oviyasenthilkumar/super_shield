
import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import CleargaurdHero from "../../../components/CleargaurdHero"
import CleargaurdApplication from '../../../components/CleargaurdApplication'

import MultisealRelatedProducts from "../../../components/MultisealRelatedProduct";

const Clearseal = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs/>
      <CleargaurdHero />
      <CleargaurdApplication/>
      <MultisealRelatedProducts />
      <Footer/>
    </div>
  );
};

export default Clearseal;
