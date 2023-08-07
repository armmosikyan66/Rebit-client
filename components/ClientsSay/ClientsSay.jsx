import Image from "next/image";
import testimonial1 from '@/assets/img/client/testimonial-1.jpg';
import testimonial2 from '@/assets/img/client/testimonial-2.jpg';
import testimonial3 from '@/assets/img/client/testimonial-3.jpg';


export default function ClientsSay() {

  return (
    <section className="testimonial-section pb-100">
        <div className="container">
          <div className="section-title">
            <h6>Testimonial</h6>
            <h2>What Our Client Say</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="testimonial-slider owl-carousel owl-theme">
                <div className="single-testimonial">
                  <div className="rating-box">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation.
                    </p>
                  </div>
                  <div className="avatar">
                    <Image src={testimonial1} alt="testimonial images" />
                  </div>
                  <div className="testimonial-bio">
                    <div className="bio-info">
                      <h3>Saabir al-Obeid</h3>
                      <span>Business Man</span>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="rating-box">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation.
                    </p>
                  </div>
                  <div className="avatar">
                    <Image src={testimonial2} alt="testimonial images" />
                  </div>
                  <div className="testimonial-bio">
                    <div className="bio-info">
                      <h3>Zahra Burnett</h3>
                      <span>Business Man</span>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="rating-box">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. enim ad minim veniam, quis nostrud exercitation.
                    </p>
                  </div>
                  <div className="avatar">
                    <Image src={testimonial3} alt="testimonial images" />
                  </div>
                  <div className="testimonial-bio">
                    <div className="bio-info">
                      <h3>Stevie Wills</h3>
                      <span>Business Man</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
