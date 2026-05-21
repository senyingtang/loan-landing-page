import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import LoanProcess from "@/components/LoanProcess";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Requirements from "@/components/Requirements";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <LoanProcess />
      <CaseStudies />
      <Testimonials />
      <Requirements />
      <FAQ />
      <ContactCTA />
      <Footer />
      <StickyContact />
    </main>
  );
}
