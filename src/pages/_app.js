import "@/styles/globals.css";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function App({ Component, pageProps }) {
  useAnalytics();

  return <Component {...pageProps} />;
}
