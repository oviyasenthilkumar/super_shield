import AboutHero from "../../../components/AboutHero";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import InnovationSection from "../../../components/Innovationsection";
import StandardsSection from "../../../components/StandarsSection";

const About = () => {
  return (
    <div>
      <Header/>
      <AboutHero/>
      <Breadcrumbs/>
      <InnovationSection/>
      <StandardsSection/>
      <Footer/>
    </div>
  );
};

export default About;
