import type { AppProps } from "next/app";
import Dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";

const Cursor = Dynamic(() => import("@component/Cursor"));

import "@css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#0EA5E9"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
