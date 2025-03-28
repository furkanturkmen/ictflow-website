import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { LanguageContext } from './LanguageContext';

const defaultImage = 'https://ictflow.netlify.app/assets/social-preview.png';

export default function SEO({ title, description, image = defaultImage }) {
  const { lang } = useContext(LanguageContext);

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://ictflow.netlify.app" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
