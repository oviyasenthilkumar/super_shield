import AdaptiveTechnology from "../../components/AdaptiveTechnology";
import DryboxSystem from "../../components/DryBoxSystem";
import ExploreSection from "../../components/ExploreMore";
import FeaturedVideos from "../../components/FeaturedVideos";
import FirstFold from "../../components/FirstFold";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import InnovationCards from "../../components/InnovationCards";
import ProductLines from "../../components/ProductLines";
import ProjectsSection from "../../components/ProjectsSection";
import ShieldSection from "../../components/ShieldSection";
import ThreeTechnologies from "../../components/ThreeTechnologies";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FirstFold />
      <AdaptiveTechnology />
      <ThreeTechnologies />
      <ShieldSection />
      <DryboxSystem />
      <InnovationCards />
      <FeaturedVideos />
      <ProductLines />
      <ProjectsSection />
      <ExploreSection />
      <Footer />
    </>
  );
}
