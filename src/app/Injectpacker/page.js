import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import TechnicalDocumentation from "../../../components/TechnicalDocumentation";
import InjectProducts from "../../../components/InjectProducts";
import InjectHero from "../../../components/InjectHero";
import InjectApplication from "../../../components/InjectApplication";
const documents = [
  {
    title: "Technical Datasheet",
    type: "download",
    href: "/tech_document/TDS-V2_INJECTPACKER.pdf",
  },
  {
    title: "Safety Datasheet",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Declaration of Performance",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Specifications",
    type: "external",
    href: "/ProductCatalogueModal",
  },
  {
    title: "Approvals and Certificates",
    type: "external",
    href: "/ProductCatalogueModal",
  },
];
const details = {
  img: "/inject-packer.webp",
  title: "INJECT PACKER",
  subtitile: "Flat-head Injectors in Steel and Rubber for Masonry Injections",
  para: "Rubber and steel injectors are designed to be inserted directly in line with damage such as cracks, loose foundations, joints, and cavities. They are then used to waterproof these areas through the application of Supershield INJECT hydro-expansive polyurethane resins, which are specifically formulated to immediately stop water infiltration. Each injector is equipped with a 'flat head' featuring a non-return valve and is used in conjunction with the Supershield INJECTOR CONNECTOR.",
  Application:
    "This product is designed for immediate stoppage of water infiltrations under pressure in buildings and effective waterproofing of underground areas with hydro-expansive products. It is also ideal for sealing movement and construction joints. Additionally, it serves in structural maintenance for dams, reservoirs, pipes, water channels, bridges, viaducts, tunnels, and galleries, enhancing their longevity and structural integrity.",
};

const Injectpacker = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <InjectHero details={details} />
      <InjectApplication details={details}/>
      <TechnicalDocumentation documents={documents} />
      <InjectProducts />
      <Footer />
    </>
  );
};

export default Injectpacker;
