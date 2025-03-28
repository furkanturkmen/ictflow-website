import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { LanguageContext } from './LanguageContext';

export default function SEO({ title, description }) {
  const { lang } = useContext(LanguageContext);

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}
