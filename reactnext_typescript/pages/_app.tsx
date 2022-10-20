import { FC } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { Provider } from "react-redux";
import Layout from "../Components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../redux/store";

const MyApp: NextPage<AppProps> = ({
  Component,
  pageProps,
  ...rest
}: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};
export default MyApp;
