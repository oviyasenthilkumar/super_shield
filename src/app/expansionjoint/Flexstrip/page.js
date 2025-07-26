import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import TBE from '../../../../components/TBE'
import FlexstripProduct from "../../../../components/FlexstripProducts";
import FlexstripHero from '../../../../components/FlexstripHero'

const Flexstrip = () => {
  return (
    <div>
      <Header/>
      <FlexstripHero/>
      <Breadcrumbs/>
      <TBE />
      <FlexstripProduct />
      <Footer/>
    </div>
  );
};

export default Flexstrip;
