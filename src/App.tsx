import MobileHeader from './components/MobileHeader';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ClubSection from './sections/ClubSection';
import ContactSection from './sections/ContactSection';
import HeroSection from './sections/HeroSection';
import LocationSection from './sections/LocationSection';
import PlansSection from './sections/PlansSection';
import SpaceSection from './sections/SpaceSection';

export default function App() {
  return (
    <>
      <div className="top-accent-band" aria-hidden="true" />
      <MobileHeader />
      <div className="shell">
        <Sidebar />
        <main>
          <HeroSection />
          <SpaceSection />
          <LocationSection />
          <ClubSection />
          <PlansSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
