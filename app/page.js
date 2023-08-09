// import styles from './page.module.css'
import { 
  Layout, 
  SliderHeader, 
  AboutCompany, 
  OurStack, 
  ChooseUs, 
  TrustUs, 
  Achievements, 
  ClientsSay, 
  TeamMembers, 
  Blog, 
  CooperationBlock, 
  OurCustomers 
} from '@/components'


export default function Home() {

  return (
    <>
      <Layout fromHome={true} >
        <SliderHeader />
        <AboutCompany />
        <OurStack />
        {/* <ChooseUs /> */}
        {/* <TrustUs /> */}
        {/* <Achievements /> */}
        {/* <ClientsSay /> */}
        <TeamMembers />
        {/* <Blog /> */}
        {/* <CooperationBlock /> */}
        <OurCustomers />
      </Layout>
    </>
  )
}