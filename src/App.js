import Navigation from './components/Navigation'
import WhySection from './components/WhySection';
import SkillsSection from './components/SkillsSection';
import LandingPage from './components/LandingPage';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import PriceSection from './components/PriceSection';

function App() {
  return (
      <div className="App bg-gray-400 min-h-screen max-h-full">
          <Navigation/>
          <LandingPage/>

          <WhySection/>
          <SkillsSection/>
          <AboutSection/>
          <ContactSection/>
          <PriceSection/>
        </div>
      
  );
}

export default App;
