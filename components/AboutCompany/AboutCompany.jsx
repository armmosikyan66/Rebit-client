import Image from 'next/image';
import About from '../../assets/img/Logo/LogoMark_color.png';

export default function AboutCompany() {

  return (
    <section className="about-area section-padding">
        <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              {/* <h6>What We Provide</h6> */}
              <h2>About Rebit</h2>
            </div>
          </div>
        </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content">
                <div className="about-content-text">
                  <h2>
                    Innovative software solutions for business success.                                                                     
                  </h2>
                  <p>
                    Rebit.ai is a software development company that offers innovative solutions to help businesses achieve their goals.
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
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
