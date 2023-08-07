import Image from "next/image";
import Client1 from '@/assets/img/partner/client-1.png';
import Client2 from '@/assets/img/partner/client-2.png';
import Client3 from '@/assets/img/partner/client-3.png';
import Client4 from '@/assets/img/partner/client-4.png';
import Client5 from '@/assets/img/partner/client-5.png';
import Client6 from '@/assets/img/partner/client-6.png';
import Client7 from '@/assets/img/partner/client-7.png';
import Client8 from '@/assets/img/partner/client-8.png';


export default function OurCustomers() {
  return (
    <section className="partner-section pt-100 pb-70">
      <div className="container">
        <div className="partner-title">
          <h6>Trusted By Over 40,000</h6>
          <h2>Our Customers</h2>
        </div>
        <div className="partner-list">
          <div className="partner-item">
            <a href="#0">
              <Image src={Client1} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client2} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client3} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client4} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client5} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client6} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client7} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client8} alt="image" />
            </a>
          </div>
          <div className="partner-item">
            <a href="#0">
              <Image src={Client1} alt="image" />
              Name
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
