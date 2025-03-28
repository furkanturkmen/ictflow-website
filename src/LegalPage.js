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

export default function LegalPage() {
  return (
    <Page>
      <Container>
        <Title>Legal Disclaimer</Title>
        <Paragraph>
          ICT Flow provides digital services and solutions for small businesses. While we do our best to ensure the accuracy of the information on this website, we cannot be held responsible for any errors or omissions.
        </Paragraph>
        <Paragraph>
          All content, branding, and code are the property of ICT Flow. Unauthorized reproduction or use is prohibited.
        </Paragraph>
        <Paragraph>
          For legal inquiries, please contact us directly via the contact form.
        </Paragraph>
      </Container>
    </Page>
  );
}
