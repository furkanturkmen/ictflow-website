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
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3rem 2rem;
  border-radius: 12px;
  max-width: 960px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #229EBC;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.6;
`;

export default function HomePage() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Welcome to ICT Flow',
      text: 'We help small businesses streamline their workflow by implementing and managing Microsoft 365 Business Basic tools — from communication to licenses.',
      seoTitle: 'ICT Flow – Streamline with Microsoft 365',
      seoDesc: 'Helping small businesses simplify with Microsoft 365 Business Basic.'
    },
    nl: {
      title: 'Welkom bij ICT Flow',
      text: 'Wij helpen kleine bedrijven hun workflow te verbeteren door Microsoft 365 Business Basic te implementeren en te beheren — van communicatie tot licentiebeheer.',
      seoTitle: 'ICT Flow – Workflow optimaliseren',
      seoDesc: 'Wij helpen kleine bedrijven efficiënter werken met Microsoft 365.'
    }
  };

  return (
    <Page>
      <SEO title={content[lang].seoTitle} description={content[lang].seoDesc} />
      <Container>
        <Title>{content[lang].title}</Title>
        <Paragraph>{content[lang].text}</Paragraph>
      </Container>
    </Page>
  );
}