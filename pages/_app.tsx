import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
