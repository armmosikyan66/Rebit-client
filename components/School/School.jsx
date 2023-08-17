import Image from 'next/image'
import ItSchhool from '@/assets/img/choose-1.jpg'

export default function School() {
  return (
    // <div id="it-school" className="it-school">
    //   <div className="content">
    //         <div className="section-title">
    //           <h2 >IT School</h2>
    //         </div>
    //     <div className="d-flex align-items-center">
    //       <div className="col-lg-6 col-md-12 col-sm-12">
    //         <p>
    //           We invite everyone who is interested in the IT world to study and become part of our team,
    //            regardless of their age. Our experienced specialists will train you with all the necessary means so that you can enter the IT field.
    //            Join us to learn new things and become smart specialists and develop further
    //         </p>
    //       </div>
    //       <div className="col-lg-6 col-md-12 col-sm-12">
    //         <Image src={ItSchhool} alt="IT School" height={500}/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="about-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              {/* <h6>What We Provide</h6> */}
              <h2>It School</h2>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-content">
              <div className="about-content-text">
                <p>
                  We invite everyone who is interested in the IT world to study
                  and become part of our team, regardless of their age. Our
                  experienced specialists will train you with all the necessary
                  means so that you can enter the IT field. Join us to learn new
                  things and become smart specialists and develop further
                </p>
                <div className="d-flex ">
                  <div className="about-btn-box">
                    <a className="default-btn project-btn-1" href="itschool">
                      Learn More<span></span>
                    </a>
                  </div>

                  {/* <div className="about-btn-box  ml-4">
                    <a className="default-btn project-btn-1" href='/'>Donate</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
            <div className="about-image">
              <Image src={ItSchhool} alt="IT School" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
