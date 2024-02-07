import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Helmet } from "react-helmet-async";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
        <meta property="og:image" content="https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
      </Helmet>
      helo
    </div>
  );
}
