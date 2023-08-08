import { PageTitle } from "@/components";

function Services() {
  console.log('services');

  return (
    <>
      <PageTitle title={"Our Services"} />
      <div className="web-dev">webdevelopment</div>
      <div className="mobile-app">mobileapp</div>
      <div className="ai">aiiaiaiaiai</div>
      <div className="devops">devops</div>
      <div className="consulting">consulting</div>
      <div className="uiux">ui ux</div>
    </>
  );
}

export default Services;
