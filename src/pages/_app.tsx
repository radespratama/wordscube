import "@css/globals.css";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

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
    </>
  );
}

export default MyApp;
