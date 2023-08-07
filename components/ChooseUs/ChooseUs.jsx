import Image from "next/image";
import Choose1 from '@/assets/img/choose-1.jpg'

export default function ChooseUs() {
  return (
    <section className="overview-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="overview-image">
                <Image src={Choose1} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overview-content">
                <h6>Why Choose Us?</h6>
                <h2>Safeguard your brand with Cyber-Security & IT Solutions</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="features-list">
                  <li>
                    {' '}
                    <span>Remote It Assistance</span>
                  </li>
                  <li>
                    {' '}
                    <span>Solving IT Problems</span>
                  </li>
                  <li>
                    {' '}
                    <span>Practice IT Management</span>
                  </li>
                  <li>
                    {' '}
                    <span>IT Security Services</span>
                  </li>
                  <li>
                    {' '}
                    <span>Managed IT Service</span>
                  </li>
                  <li>
                    {' '}
                    <span>Cloud Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
