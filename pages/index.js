import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Helmet } from "react-helmet-async";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Learning React Helmet!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
        <meta
          property="og:title"
          content="How to Become an SEO Expert (8 Steps)"
        />
        <meta
          property="og:description"
          content="Get from SEO newbie to SEO pro in 8 simple steps."
        />
        <meta
          property="og:image"
          content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
        />
      </Head>
      helo
    </div>
  );
}
