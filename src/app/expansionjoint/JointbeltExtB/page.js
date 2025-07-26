import Breadcrumbs from "../../../../components/Breadcrumbs";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import JointbeltHero from "../../../../components/JointbeltHero"
import JointbeltExt from "../../../../components/JointbeltExtB";
import Products from '../../../../components/Products'
import JointApplication from "../../../../components/JointApplication";

const JointbeltExtB = () => {
  return (
    <div>
      <Header/>
      <JointbeltHero/>
      <Breadcrumbs/>
      <JointbeltExt />
      <JointApplication/>
      <Products />
      <Footer/>
    </div>
  );
};

export default JointbeltExtB;
