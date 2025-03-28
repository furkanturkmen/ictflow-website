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
  return (
    <Page>
      <Container>
        <Title>Welcome to ICT Flow</Title>
        <Paragraph>
          We help small businesses streamline their workflow by implementing and managing Microsoft 365 Business Basic tools — from communication to licenses.
        </Paragraph>
      </Container>
    </Page>
  );
}
