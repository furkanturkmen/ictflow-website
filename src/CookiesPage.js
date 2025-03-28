import React, { useContext } from 'react';
import styled from 'styled-components';
import { LanguageContext } from './LanguageContext';
import SEO from './SEO';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 1rem;
  min-height: 100vh;
`;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 3rem 2rem;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #229EBC;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default function CookiesPage() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Cookie Policy',
      seoTitle: 'ICT Flow – Cookie Policy',
      seoDesc: 'Details about the minimal cookie usage on ICT Flow using Plausible Analytics.',
      paragraphs: [
        'ICT Flow only uses Plausible Analytics, which respects your privacy and does not use tracking cookies.',
        'This ensures full GDPR compliance while still allowing us to improve the website based on anonymized usage data.'
      ]
    },
    nl: {
      title: 'Cookiebeleid',
      seoTitle: 'ICT Flow – Cookiebeleid',
      seoDesc: 'Informatie over het minimale cookiegebruik van ICT Flow via Plausible Analytics.',
      paragraphs: [
        'ICT Flow gebruikt alleen Plausible Analytics, dat uw privacy respecteert en geen trackingcookies gebruikt.',
        'Dit zorgt voor volledige AVG-naleving en stelt ons in staat de website te verbeteren op basis van geanonimiseerde gegevens.'
      ]
    }
  };

  return (
    <Page>
      <SEO title={content[lang].seoTitle} description={content[lang].seoDesc} />
      <Container>
        <Title>{content[lang].title}</Title>
        {content[lang].paragraphs.map((text, index) => (
          <Paragraph key={index}>{text}</Paragraph>
        ))}
      </Container>
    </Page>
  );
}
