import Image from 'next/image';
import About from '../../assets/img/about.jpg';

export default function AboutCompany() {

  return (
    <section className="about-area section-padding">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content">
                <div className="about-content-text">
                  <h6>About Our Company</h6>
                  <h2>
                    Providing your business with a quality IT service is our
                    passion.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua enim ad minim veniam, nostrud
                  </p>
                  {/* <div className="skills"> */}
                    {/* <div className="skill-item">
                      <h6>
                        IT Consulting <em>90%</em>
                      </h6>
                      <div className="skill-progress">
                        <div className="progres" data-value="90%"></div>
                      </div>
                    </div> */}
                    {/* <div className="skill-item">
                      <h6>
                        Virtual Workstation <em>75%</em>
                      </h6>
                      <div className="skill-progress">
                        <div className="progres" data-value="75%"></div>
                      </div>
                    </div> */}
                    {/* <div className="skill-item">
                      <h6>
                        Managed IT Service <em>80%</em>
                      </h6>
                      <div className="skill-progress">
                        <div className="progres" data-value="80%"></div>
                      </div>
                    </div> */}
                  {/* </div> */}
                  <div className="about-btn-box">
                    <a
                      className="default-btn project-btn-1"
                      href="company"
                    >
                      Learn More<span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
              <div className="about-image">
                <Image src={About} alt="About" />
                <div className="years-design">
                  <h2>5</h2>
                  <h5>Years Experience</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
