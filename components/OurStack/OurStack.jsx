import Link from 'next/link'

export default function OurStack() {
  return (
    <section className="services-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              {/* <h6>What We Provide</h6> */}
              <h2>What We Provide</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-services-item">
              <div className="services-icon">
                <i className="flaticon-mobile-app"></i>
              </div>
              <h3>Mobile App</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua
              </p>
              <div className="services-btn-link">
                <Link href="/services/#mobileapp" className="services-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-item">
              <div className="services-icon">
                <i className="flaticon-programming"></i>
              </div>
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua
              </p>
              <div className="services-btn-link">
                <Link
                  href="/services/#webdevelopment"
                  className="services-link"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-item">
              <div className="services-icon">
                <i className="flaticon-innovation"></i>
              </div>
              <h3>AI Models</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua
              </p>
              <div className="services-btn-link">
                <Link href="/services/#aimodels" className="services-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-item">
              <div className="services-icon">
                <i className="flaticon-coding"></i>
              </div>
              <h3>DevOps</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua
              </p>
              <div className="services-btn-link">
                <Link href="/services/#devops" className="services-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-item">
              <div className="services-icon">
                <i className="flaticon-project-management"></i>
              </div>
              <h3>Consulting</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua
              </p>
              <div className="services-btn-link">
                <Link href="/services/#consulting" className="services-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-services-item">
              <div className="services-icon">
                <i className="flaticon-puzzle"></i>
              </div>
              <h3>UI/UX</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt dolore magna aliqua
              </p>
              <div className="services-btn-link">
                <Link href="/services/#uiux" className="services-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
