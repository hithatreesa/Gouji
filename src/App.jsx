// import React removed for linting
import Navbar from './components/Navbar';
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
            <Navbar />
            <main>
              <Home />
            </main>
          </div>
        </SmoothScroll>
      </HelmetProvider>
    </AtmosphereProvider>
  );
}

export default App;
