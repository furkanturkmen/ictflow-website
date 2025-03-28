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

export default function PrivacyPage() {
  return (
    <Page>
      <Container>
        <Title>Privacy Policy</Title>
        <Paragraph>
          ICT Flow values your privacy. We only collect the information you provide through our contact form, such as your name and email address. This data is used solely to respond to inquiries and is never shared with third parties.
        </Paragraph>
        <Paragraph>
          By using this website, you agree to this privacy policy. We do not use tracking cookies and we do not collect personal data beyond what is voluntarily submitted.
        </Paragraph>
        <Paragraph>
          For any questions, feel free to reach out via our contact form.
        </Paragraph>
      </Container>
    </Page>
  );
}
