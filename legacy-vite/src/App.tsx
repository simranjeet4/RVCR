import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WhatIsRvcrPage } from './pages/WhatIsRvcrPage';
import { RvcrSpecificsPage } from './pages/RvcrSpecificsPage';
import { HowRvcrWorksPage } from './pages/HowRvcrWorksPage';
import { RvcrApplicationsPage } from './pages/RvcrApplicationsPage';
import { RvcrFeasibilityPage } from './pages/RvcrFeasibilityPage';
import { RvcrViabilityPage } from './pages/RvcrViabilityPage';
import { RvcrValuePage } from './pages/RvcrValuePage';
import { BroaderImpactPage } from './pages/BroaderImpactPage';
import { StrategicAdvantagesPage } from './pages/StrategicAdvantagesPage';
import { AboutUsPage } from './pages/AboutUsPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/what-is-rvcr" element={<WhatIsRvcrPage />} />
            <Route path="/rvcr-specifics" element={<RvcrSpecificsPage />} />
            <Route path="/how-rvcr-works" element={<HowRvcrWorksPage />} />
            <Route path="/rvcr-applications" element={<RvcrApplicationsPage />} />
            <Route path="/rvcr-feasibility" element={<RvcrFeasibilityPage />} />
            <Route path="/rvcr-viability" element={<RvcrViabilityPage />} />
            <Route path="/rvcr-value" element={<RvcrValuePage />} />
            <Route path="/broader-impact" element={<BroaderImpactPage />} />
            <Route path="/strategic-advantages" element={<StrategicAdvantagesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            
            {/* Common WordPress Aliases & Redirects */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/RVCR%20feasibility" element={<Navigate to="/rvcr-feasibility" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
