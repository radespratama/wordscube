import type { NextPage } from "next";
import Dynamic from "next/dynamic";

import AppLayout from "@layout/AppLayout";

import MetaTags from "@component/MetaTags";
const Switcher = Dynamic(() => import("@component/Switcher"));
const Hero = Dynamic(() => import("@component/Hero"));

const Home: NextPage = () => {
  return (
    <>
      <MetaTags
        title="Wordscube - Let's start living like no one can help us in any event"
        description="Let's start living like no one can help us in any event, so that when we are helped in certain times, it becomes a plus in itself."
        url={process.env.NEXT_PUBLIC_BASE_URL}
      />
      <AppLayout>
        <Hero />
      </AppLayout>
      <Switcher />
    </>
  );
};

export default Home;
