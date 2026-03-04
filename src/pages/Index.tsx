import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ScheduleSection from "@/components/ScheduleSection";
import GallerySection from "@/components/GallerySection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EventsSection />
    <ScheduleSection />
    <GallerySection />
    <RegistrationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
