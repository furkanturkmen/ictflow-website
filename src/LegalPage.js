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

export default function LegalPage() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Legal Disclaimer',
      seoTitle: 'ICT Flow – Legal Notice',
      seoDesc: 'Important legal information about the use of this website and ICT Flow’s services.',
      paragraphs: [
        'ICT Flow provides digital services and solutions for small businesses. While we do our best to ensure the accuracy of the information on this website, we cannot be held responsible for any errors or omissions.',
        'All content, branding, and code are the property of ICT Flow. Unauthorized reproduction or use is prohibited.',
        'For legal inquiries, please contact us directly via the contact form.'
      ]
    },
    nl: {
      title: 'Juridische Disclaimer',
      seoTitle: 'ICT Flow – Juridische Informatie',
      seoDesc: 'Belangrijke juridische informatie over het gebruik van deze website en de diensten van ICT Flow.',
      paragraphs: [
        'ICT Flow levert digitale diensten en oplossingen voor kleine bedrijven. Hoewel we ons best doen om de juistheid van de informatie op deze website te waarborgen, kunnen we niet aansprakelijk worden gesteld voor eventuele fouten of weglatingen.',
        'Alle inhoud, branding en code zijn eigendom van ICT Flow. Ongeoorloofde reproductie of gebruik is verboden.',
        'Voor juridische vragen kunt u rechtstreeks contact met ons opnemen via het contactformulier.'
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
