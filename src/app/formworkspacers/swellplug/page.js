import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Swellstop from "../../../../components/SwellstopHero"
import Swellstopcontent from "../../../../components/Swellostop";
import ProductForSwell from '../../../../components/ProductForSwell'

const Swellplug = () => {
  return (
    <div>
      <Header/>
      <Swellstop/>
      <Breadcrumbs/>
      <Swellstopcontent />
      <ProductForSwell />
      <Footer/>
    </div>
  );
};

export default Swellplug;
