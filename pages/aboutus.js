// import OwlCarousel from 'react-owl-carousel'
import { 
  AboutCompany,
  Achievements, 
  ClientsSay, 
  CooperationBlock, 
  OurCustomers, 
  PageTitle, 
  TeamMembers,
  Layout
} from '@/components'


function AboutUs() {

  return (
    <Layout>
      <>
        <PageTitle title="About Us"/>
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
    </Layout>
  )
}

export default AboutUs