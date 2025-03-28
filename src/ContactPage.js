import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs, { init } from '@emailjs/browser';

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
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #229EBC;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #229EBC;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 1rem;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
`;

export default function ContactPage() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      form.current.reset();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <Page>
      <Container>
        <Title>Contact Us</Title>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder="Your name" required />
          <Input type="email" name="user_email" placeholder="Your email" required />
          <Textarea name="message" placeholder="Your message" required />
          <input type="hidden" name="reply_to" value={form.current?.user_email?.value || ''} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Send</Button>
          {success && <SuccessMessage>Message sent successfully!</SuccessMessage>}
        </Form>
      </Container>
    </Page>
  );
}
