import React from 'react';
import styled from 'styled-components';

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
  return (
    <Page>
      <Container>
        <Title>Cookie Policy</Title>
        <Paragraph>
          This website uses minimal cookies. We use cookies only to support functionality and gather anonymous analytics via Plausible, which does not use personal data or track users across sites.
        </Paragraph>
        <Paragraph>
          You can continue using this site without adjusting cookie settings. No personal information is stored unless you submit a contact form.
        </Paragraph>
        <Paragraph>
          Questions? Feel free to contact us.
        </Paragraph>
      </Container>
    </Page>
  );
}
