import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import DashboardPage from './DashboardPage';

const Navbar = styled.nav`
  background-color: #222;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    a {
      padding: 0.5rem 0;
    }
  }
`;

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
  return (
    <Router>
      <GlobalStyle />
      <GlobalWrapper>
        <Navbar>
          <Link to="/">
            <img src="/assets/ictflow_logo_white_bgless.png" alt="ICT Flow Logo" style={{ height: '40px' }} />
          </Link>
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/dashboard">Dashboard</Link>
          </NavLinks>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </GlobalWrapper>
    </Router>
  );
}

export default App;
