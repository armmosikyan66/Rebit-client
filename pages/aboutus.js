// import OwlCarousel from 'react-owl-carousel';
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
    </>
  );
}

export default AboutUs;
