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
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
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
    </Router>
  );
}

export default App;
