import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";
import { useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <SEO />
      <div className={styles.links_wrapper}>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/posts-copy"}>Posts Copy</Link>
      </div>
    </div>
  );
}
