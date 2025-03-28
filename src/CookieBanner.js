import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-router-dom';

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Message = styled.p`
  margin: 0;
  font-size: 0.9rem;

  a {
    color: #4db3f7;
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #229EBC;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieAccepted');
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  const content = {
    en: {
      message: 'We use minimal cookies to enhance functionality and track anonymous usage with Plausible. By continuing, you agree to our',
      button: 'Got it!',
      policy: 'cookie policy'
    },
    nl: {
      message: 'Wij gebruiken minimale cookies voor functionaliteit en anonieme analytics via Plausible. Door verder te gaan, accepteert u ons',
      button: 'Begrepen!',
      policy: 'cookiebeleid'
    }
  };

  if (!visible) return null;

  return (
    <Banner>
      <Message>
        {content[lang].message} <Link to="/cookies">{content[lang].policy}</Link>.
      </Message>
      <Button onClick={handleAccept}>{content[lang].button}</Button>
    </Banner>
  );
}