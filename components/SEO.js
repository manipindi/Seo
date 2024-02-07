import Head from "next/head";
import React from "react";

const SEO = () => {
  return (
    <Head>
      <title>Learning React Helmtet!</title>
      <meta
        name="description"
        content="Beginner friendly page for learning React Helmet."
      />
      <meta
        property="og:title"
        content="How to Become an SEO Expert (8 Steps) How to Become an SEO Expert (8 Steps)"
      />
      <meta
        property="og:description"
        content="Get from SEO newbie to SEO pro in 8 simple steps."
      />
      <meta
        property="og:image"
        content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
      />
      <meta name="twitter:creator" content={"Company name."} />
      <meta name="twitter:card" content={"article"} />
      <meta name="twitter:title" content={"Learning React Helmet!"} />
      <meta name="twitter:description" content={"Beginner friendly page for learning React Helmet."} />
    </Head>
  );
};

export default SEO;
