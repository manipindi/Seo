import Head from "next/head";
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ description, name, type, title, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          image ||
          "https://narayanaiasacademy.com/wp-content/uploads/2022/03/narayanalogo.png"
        }
      />
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default SEO;
