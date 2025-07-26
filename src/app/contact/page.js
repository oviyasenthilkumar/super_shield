
import Breadcrumbs from "../../../components/Breadcrumbs";
import ContactPage from "../../../components/Contact";
import ContactHero from "../../../components/ContactHero";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default async function Contact() {
  return (
    <div>
      <Header />
      <ContactHero/>
      <Breadcrumbs />
      <ContactPage />
      <Footer />
    </div>
  );
}

