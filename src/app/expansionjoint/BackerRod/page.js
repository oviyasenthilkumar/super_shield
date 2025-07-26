
import AboutHero from "../../../../components/AboutHero";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import BackedRodHero from "../../../../components/BackedRodHero"
import AdmixPlusApplication from '../../../../components/AdmixPlusApplication'

import BackdropRodProduct from "../../../../components/BackdropRodProduct";

const BackerRod = () => {
  return (
    <div>
      <Header/>
     
      <BackedRodHero />
       <Breadcrumbs/>
      <BackdropRodProduct />
      <Footer/>
    </div>
  );
};

export default BackerRod;
