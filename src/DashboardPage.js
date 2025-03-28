import React, { useState } from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 1rem;
  min-height: 100vh;
`;
``
const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3rem 2rem;
  border-radius: 12px;
  max-width: 1100px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #229EBC;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #013047;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
`;

const PlansWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  flex-wrap: nowrap;
`;

const Plan = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const PlanTitle = styled.h3`
  color: #229EBC;
  margin-bottom: 0.75rem;
`;

const PlanPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PlanFeatures = styled.ul`
  padding-left: 1rem;
  list-style: disc;
  line-height: 1.6;
  flex-grow: 1;
`;

const PlanButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #229EBC;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1c7fa3;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  background: none;
  border: none;
  color: #229EBC;
  font-weight: bold;
  cursor: pointer;
`;

export default function DashboardPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => setSelectedPlan(null);

  return (
    <Page>
      <Container>
        <Title>Dashboard</Title>
        <Section>
          <Heading>Overview</Heading>
          <Text>View key insights and workflow summaries from your Microsoft 365 environment.</Text>
        </Section>
        <Section>
          <Heading>Users</Heading>
          <Text>Manage employee accounts and collaboration tools.</Text>
        </Section>
        <Section>
          <Heading>Licenses</Heading>
          <Text>Monitor and assign licenses for Microsoft 365 Business Basic.</Text>
        </Section>
        <Section>
          <Heading>Plans</Heading>
          <PlansWrapper>
            {['Starter', 'Standard', 'Premium'].map((name, idx) => (
              <Plan key={name}>
                <PlanTitle>{name}</PlanTitle>
                <PlanPrice>{['€6/month', '€12/month', '€16/month'][idx]}</PlanPrice>
                <PlanFeatures>
                  {[
                    ['Email & Calendar', '1 User Setup', 'Basic Support'],
                    ['Microsoft 365 Setup', 'Up to 5 Users', 'Priority Support'],
                    ['Full M365 Integration', 'Unlimited Users', 'Dedicated Consultant'],
                  ][idx].map((item, i) => <li key={i}>{item}</li>)}
                </PlanFeatures>
                <PlanButton onClick={() => handleChoosePlan(name)}>Choose Plan</PlanButton>
              </Plan>
            ))}
          </PlansWrapper>
        </Section>
      </Container>
      {selectedPlan && (
        <Modal>
          <ModalContent>
            <h3>Thank you for choosing the {selectedPlan} plan!</h3>
            <p>We’ll reach out to you shortly to get started.</p>
            <CloseButton onClick={closeModal}>Close</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Page>
  );
}
