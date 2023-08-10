import { useRouter } from 'next/router';
import { PageTitle } from "@/components";


function Services() {

  let router = useRouter()

  console.log('services');

  return (
    <>
      <PageTitle title={"Our Services"} />
      <div id="web-dev">webdevelopment</div>
      <div id="mobile-app">mobileapp</div>
      <div id="ai">aiiaiaiaiai</div>
      <div id="devops">devops</div>
      <div id="consulting">consulting</div>
      <div id="uiux">ui ux</div>
    </>
  );
}

export default Services;
