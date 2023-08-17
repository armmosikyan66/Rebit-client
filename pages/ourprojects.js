import Head from "next/head";
import { PageTitle } from "@/components";

function OurProjects() {
  return (
    <>
      <Head>
        <title>Our Projects</title>
        <meta name="description" content="About our projects" />
      </Head>
      <PageTitle title={"Portfolio"} />
    </>
  );
}

export default OurProjects;
