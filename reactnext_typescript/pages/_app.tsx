import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

interface customPageProps {
  // our props
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
