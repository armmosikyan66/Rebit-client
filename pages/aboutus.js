// import OwlCarousel from 'react-owl-carousel';
import {
  AboutCompany,
  OurCustomers,
  PageTitle,
  School
} from "@/components";


function AboutUs() {

  return (
    <>
      <PageTitle title="About Us" />
      <AboutCompany />
      {/* <Achievements /> */}
      <School />
      {/* <ClientsSay /> */}
      {/* <CooperationBlock /> */}
      <OurCustomers />
    </>
  );
}

export default AboutUs;
