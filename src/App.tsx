import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import CompanyHighlights from './components/sections/CompanyHighlights';
import FeaturedProducts from './components/sections/FeaturedProducts';
import ServicesOverview from './components/sections/ServicesOverview';
import Testimonials from './components/sections/Testimonials';
import CallToAction from './components/sections/CallToAction';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Home Page Sections */}
      <Hero darkMode={darkMode} />
      <CompanyHighlights darkMode={darkMode} />
      <FeaturedProducts darkMode={darkMode} />
      <ServicesOverview darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <CallToAction darkMode={darkMode} />

      {/* Additional Pages */}
      <About darkMode={darkMode} />
      <Products darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <Blog darkMode={darkMode} />
      <Contact darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
