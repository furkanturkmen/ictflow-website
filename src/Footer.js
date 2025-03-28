import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LanguageContext } from './LanguageContext';

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
`;

const FooterLinks = styled.div`
  margin-bottom: 1rem;
  a {
    margin: 0 1rem;
    color: #229EBC;
    text-decoration: none;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export default function Footer() {
  const { lang } = useContext(LanguageContext);

  const labels = {
    en: {
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      legal: 'Legal',
      copyright: '© 2025 ICT Flow. All rights reserved.'
    },
    nl: {
      privacy: 'Privacybeleid',
      cookies: 'Cookiebeleid',
      legal: 'Juridisch',
      copyright: '© 2025 ICT Flow. Alle rechten voorbehouden.'
    }
  };

  return (
    <FooterContainer>
      <FooterLinks>
        <Link to="/privacy">{labels[lang].privacy}</Link>
        <Link to="/cookies">{labels[lang].cookies}</Link>
        <Link to="/legal">{labels[lang].legal}</Link>
      </FooterLinks>
      <Copyright>{labels[lang].copyright}</Copyright>
    </FooterContainer>
  );
}