import { 
    Layout, 
    SliderHeader, 
    AboutCompany, 
    OurStack, 
    ChooseUs, 
    TrustUs, 
    Achievements, 
    ClientsSay, 
    School, 
    Blog, 
    CooperationBlock, 
    OurCustomers 
  } from '@/components'
  
  
  export default function Home() {

    return (
      <>
        {/* <Layout fromHome={true} > */}
          <SliderHeader />
          <AboutCompany />
          <OurStack />
          {/* <ChooseUs /> */}
          {/* <TrustUs /> */}
          {/* <Achievements /> */}
          {/* <ClientsSay /> */}
          <School />
          {/* <Blog /> */}
          {/* <CooperationBlock /> */}
          <OurCustomers />
        {/* </Layout> */}
      </>
    )
  }