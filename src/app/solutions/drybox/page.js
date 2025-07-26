import Breadcrumbs from "../../../../components/Breadcrumbs";
import DryBoxSystem from "../../../../components/DryBox";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import GroundStructureNeed from "../../../../components/GroundStructureNeeds";
import DryBoxSystemComponent from "../../../../components/DryBoxSystemComponent";
import DryboxComponent from "../../../../components/DryboxComponent";
import WatertightConcrete from "../../../../components/WatertightConcrete";
import ConstructionJoints from "../../../../components/ConstructionJoints";
import ExpansionJoints from "../../../../components/ExpansionJoints";
import ProgrammedCracks from "../../../../components/ProgrammedCracks";
import FormWork from "../../../../components/FormWork";
import PipePentrations from "../../../../components/PipePenetrations";

const DryBox = () => {
  return (
    <div>
      <Header />
      <DryBoxSystem />
      <Breadcrumbs />
      <GroundStructureNeed />
      <DryboxComponent />
      {/* <DryBoxSystemComponent /> */}
      <WatertightConcrete />
      <ConstructionJoints />
      <ExpansionJoints/>
      <ProgrammedCracks />
      <FormWork />
      <PipePentrations />
      <Footer />
    </div>
  );
};

export default DryBox;
