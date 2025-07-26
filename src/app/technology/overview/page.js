import OverView from "../../../../components/OverView";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import CrystallineFormation from '../../../../components/CrystallineFormations'
import Discover from '../../../../components/Discover'
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";


const Overview = () => {
  return (
    <div>
      <Header/>
      
      <OverView />
        <Breadcrumbs/>
      <CrystallineFormation />
      <Discover />
     
      <Footer/>
    </div>
  );
};

export default Overview;
