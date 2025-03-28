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

export default function PrivacyPage() {
  const { lang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Privacy Policy',
      seoTitle: 'ICT Flow – Privacy Policy',
      seoDesc: 'How ICT Flow handles your data, cookies, and communication securely.',
      paragraphs: [
        'We only collect data necessary for communication and analytics. ICT Flow does not share your information with third parties.',
        'By using our services, you agree to the collection of limited anonymized analytics (via Plausible) and contact information as needed for inquiries.'
      ]
    },
    nl: {
      title: 'Privacybeleid',
      seoTitle: 'ICT Flow – Privacybeleid',
      seoDesc: 'Hoe ICT Flow veilig omgaat met uw gegevens, cookies en communicatie.',
      paragraphs: [
        'We verzamelen alleen gegevens die nodig zijn voor communicatie en analytics. ICT Flow deelt uw informatie niet met derden.',
        'Door onze diensten te gebruiken, stemt u in met het verzamelen van beperkte geanonimiseerde analytics (via Plausible) en contactgegevens voor vragen.'
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
