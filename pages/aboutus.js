// import OwlCarousel from 'react-owl-carousel'
import {
  AboutCompany,
  OurCustomers,
  PageTitle,
  TeamMembers
} from "@/components";

function AboutUs() {
  return (
    <>
      <PageTitle title="About Us" />
      <AboutCompany />
      {/* <Achievements /> */}
      <TeamMembers />
      {/* <ClientsSay /> */}
      {/* <CooperationBlock /> */}
      <OurCustomers />

      <div className="go-top">
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-up"></i>
      </div>
    </>
  );
}

export default AboutUs;
