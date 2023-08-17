import Head from "next/head";
import {
  SliderHeader,
  AboutCompany,
  OurStack,
  School,
  OurCustomers,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rebit</title>
        <meta name="description" content="Rebit.ai homepage"></meta>
      </Head>
      <SliderHeader />
      <AboutCompany />
      <OurStack />
      <School />
      <OurCustomers />
    </>
  );
}
