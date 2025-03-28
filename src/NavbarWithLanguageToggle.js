import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

const Navbar = styled.nav`
  background-color: #222;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

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

const LanguageToggle = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    background: none;
    border: 1px solid white;
    color: white;
    padding: 0.25rem 0.6rem;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  button.active {
    background-color: white;
    color: #222;
  }
`;

export default function NavbarComponent() {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  const links = {
    en: ['Home', 'Dashboard', 'Contact'],
    nl: ['Start', 'Dashboard', 'Contact']
  };

  return (
    <Navbar>
      <Link to="/">
        <img src="/assets/ictflow_logo_white_bgless.png" alt="ICT Flow Logo" style={{ height: '40px' }} />
      </Link>
      <NavLinks>
        <Link to="/">{links[lang][0]}</Link>
        <Link to="/dashboard">{links[lang][1]}</Link>
        <Link to="/contact">{links[lang][2]}</Link>
        <LanguageToggle>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => toggleLanguage('en')}>
            EN
          </button>
          <button className={lang === 'nl' ? 'active' : ''} onClick={() => toggleLanguage('nl')}>
            NL
          </button>
        </LanguageToggle>
      </NavLinks>
    </Navbar>
  );
}
