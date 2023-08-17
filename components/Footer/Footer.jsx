import { useState, useEffect } from "react";
import Link from "next/link";
import { ContactUs } from "..";

export default function Footer() {

  const [isScrollActive, setIsScrollActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 600) {
        setIsScrollActive(true);
      } else {
        setIsScrollActive(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
    <section>
      <ContactUs />
    </section>
      <section className="footer-subscribe-wrapper">
        <div className="footer-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Rebit.ai</h3>
                  </div>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p> */}
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Our Services</h3>
                  </div>
                  <ul className="footer-quick-links">
                    <li>
                      {" "}
                      <Link href="services/#webdevelopment">Web Development</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="services/#mobileapp">Mobile App</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="services/#aimodels">AI Models</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="services/#devops">DevOps</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="services/#consulting">Consulting</Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="/services/#uiux">UI/UX</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>Contact Info</h3>
                  </div>
                  <div className="footer-info-contact">
                    {" "}
                    <i className="flaticon-phone-call"></i>
                    <h3>Phone</h3>
                    <span>
                      <a href="tel:0802235678">+374 77 701 105</a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    {" "}
                    <i className="flaticon-envelope"></i>
                    <h3>Email</h3>
                    <span>
                      <a href="mailto:demo@example.com">hello@rebit.ai</a>
                    </span>
                  </div>
                  <div className="footer-info-contact">
                    {" "}
                    <i className="flaticon-placeholder"></i>
                    <h3>Address</h3>
                    <span>Tumanyan 6, Yerevan, Armenia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{color: 'white', textAlign: 'center'}}>
        © 2023 Rebit.ai. All rights reserved.
        </div>

      </section>


	    <div className={`go-top ${isScrollActive ? 'active' : ''}`} onClick={scrollToTop}>
        <i className="fas fa-chevron-up"></i>
        <i className="fas fa-chevron-up"></i>
      </div>
    </>
  );
}
