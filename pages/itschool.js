import Head from "next/head";
import { PageTitle } from "@/components";

function ItSchool() {
  return (
    <>
      <Head>
        <title>Our IT School</title>
        <meta name="description" content="About our IT School" />
      </Head>
      <PageTitle title={"It School"} />
    </>
  );
}

export default ItSchool;
