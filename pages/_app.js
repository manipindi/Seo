import { store } from "@/redux/store";
import "@/styles/globals.css";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
     <Provider store={store}>
     <Component {...pageProps} />
     </Provider>
    </HelmetProvider>
  );
}
