// import React removed for linting
import GlobalCloudBackground from './components/GlobalCloudBackground';
import AtmosphericMist from './components/AtmosphericMist';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SmoothScroll from './components/SmoothScroll';
import { AtmosphereProvider } from './context/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <AtmosphereProvider>
      <HelmetProvider>
        <SmoothScroll>
          <div className="relative min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white">
            <GlobalCloudBackground />
            <AtmosphericMist />
            <Navbar />
            <main>
              <Home />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </HelmetProvider>
    </AtmosphereProvider>
  );
}

export default App;
