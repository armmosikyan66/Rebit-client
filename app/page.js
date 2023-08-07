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
      <Layout>
        <SliderHeader />
        {/* second Part */}
        <AboutCompany />
        {/* thirth part */}
        <OurStack />
        {/* forth Part */}
        <ChooseUs />
        {/* fifth Part */}
        <TrustUs />
        {/* sixth Part */}
        <Achievements />
        {/* {sevnyh Part} */}
        <ClientsSay />
        {/* {eighth Part} */}
        <TeamMembers />
        {/* {Ninth Part} */}
        <Blog />
        {/* {Tenth Part} */}
        <CooperationBlock />
        {/* {eleventh Part} */}
        <OurCustomers />
      </Layout>
    </>
  )
}