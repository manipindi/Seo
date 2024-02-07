import "@/styles/globals.css";
import { HelmetProvider } from "react-helmet-async";

export default function App({ Component, pageProps }) {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <Component {...pageProps} />
    </HelmetProvider>
  );
}
