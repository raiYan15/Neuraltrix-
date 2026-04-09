import HeroSection from "../components/HeroSection";
import TrustedCompanies from "../components/TrustedCompanies";
import CEOLetter from "../components/CEOLetter";
import ServicesSection from "../components/ServicesSection";
import SolutionsSection from "../components/SolutionsSection";
import CaseStudies from "../components/CaseStudies";
import TechStack from "../components/TechStack";
import StatsSection from "../components/StatsSection";
import Industries from "../components/Industries";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import BlogResources from "../components/BlogResources";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <CEOLetter />
      <ServicesSection />
      <SolutionsSection />
      <CaseStudies />
      <TechStack />
      <StatsSection />
      <Industries />
      <WhyChooseUs />
      <Testimonials />
      <BlogResources />
      <ContactForm />
    </>
  );
}
