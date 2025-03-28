import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import DashboardPage from './DashboardPage';
import PrivacyPage from './PrivacyPage';
import CookiesPage from './CookiesPage';
import LegalPage from './LegalPage';
import { LanguageProvider } from './LanguageContext';
import NavbarComponent from './NavbarWithLanguageToggle';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const GlobalWrapper = styled.div`
  @media (max-width: 768px) {
    .plans-wrapper {
      flex-direction: column;
    }

    .plan-card {
      width: 100% !important;
    }
  }
`;

function App() {
  import { useEffect } from 'react';

useEffect(() => {
  new Image().src = '/assets/social-preview.png';
}, []);

  return (
    <LanguageProvider>
      <Router>
        <GlobalStyle />
        <NavbarComponent />
        <CookieBanner />
        <GlobalWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
          <Footer />
        </GlobalWrapper>
      </Router>
    </LanguageProvider>
  );
}

export default App;
