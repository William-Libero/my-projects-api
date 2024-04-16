import "../globals.css";
import { Providers } from "../provider/provider";
import Head from "next/head";

export default function app({ Component, pageProps }) {
  return (
    <Providers>
      <Head>
        <title>Next.js - My projects API - API Routes</title>
        <meta
          name="description"
          content="Next.js - My projects API - API Routes"
        />
        <link rel="icon" href="/images/code.png" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
}
