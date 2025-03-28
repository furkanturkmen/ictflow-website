import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import emailjs, { init } from '@emailjs/browser';
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
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const content = {
    en: {
      title: 'Contact Us',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      submit: 'Send',
      required: 'All fields are required.',
      invalid: 'Please enter a valid email address.',
      error: 'Failed to send message. Please try again.',
      success: 'Message sent successfully!',
      seoTitle: 'Contact ICT Flow – Ask us anything',
      seoDesc: 'Get in touch with ICT Flow for questions about our Microsoft 365 services.'
    },
    nl: {
      title: 'Neem contact op',
      namePlaceholder: 'Uw naam',
      emailPlaceholder: 'Uw e-mailadres',
      messagePlaceholder: 'Uw bericht',
      submit: 'Versturen',
      required: 'Alle velden zijn verplicht.',
      invalid: 'Vul een geldig e-mailadres in.',
      error: 'Bericht verzenden mislukt. Probeer het opnieuw.',
      success: 'Bericht succesvol verzonden!',
      seoTitle: 'Neem contact op met ICT Flow',
      seoDesc: 'Stel ons uw vragen over Microsoft 365 of onze services. Wij helpen u graag.'
    }
  };

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
      setError(content[lang].required);
      return;
    }

    if (!validateEmail(email)) {
      setError(content[lang].invalid);
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
      setError(content[lang].error);
    }
  };

  return (
    <Page>
      <SEO title={content[lang].seoTitle} description={content[lang].seoDesc} />
      <Container>
        <Title>{content[lang].title}</Title>
        <Form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" placeholder={content[lang].namePlaceholder} required />
          <Input type="email" name="user_email" placeholder={content[lang].emailPlaceholder} required />
          <Textarea name="message" placeholder={content[lang].messagePlaceholder} required />
          <input type="hidden" name="reply_to" value={form.current?.user_email?.value || ''} />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">{content[lang].submit}</Button>
          {success && <SuccessMessage>{content[lang].success}</SuccessMessage>}
        </Form>
      </Container>
    </Page>
  );
}
