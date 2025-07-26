
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import InnovationHero from "../../../components/InnovationHero";
import InnovationHistory from "../../../components/InnovationHistory";
import Timeline from "../../../components/TimeLine";
import { TimelineDemo } from "../../../components/TimelineDemo";
// import TimelineSection from "../../../components/TimeLineSection";
const innovation = () => {
  return (
    <div>
      <Header />
      <InnovationHero />
      <Breadcrumbs />
      <InnovationHistory />
      {/* <TimelineSection/> */}
      {/* <TimelineDemo/> */}
      <Timeline/>
      <Footer />
    </div>
  );
};

export default innovation;