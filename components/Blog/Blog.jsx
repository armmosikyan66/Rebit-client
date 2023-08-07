import Image from 'next/image';
import Blog1 from '@/assets/img/blog/blog-1.jpg';
import Blog2 from '@/assets/img/blog/blog-2.jpg';
import Blog3 from '@/assets/img/blog/blog-3.jpg';


export default function Blog() {
  return (
    <section className="blog-section bg-grey pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h6>Blog & Article</h6>
            <h2>Recent Blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="single-blog.html">
                    <Image src={Blog1} alt="image" />
                  </a>
                </div>
                <div className="single-blog-item">
                  <ul className="blog-list">
                    <li>
                      <a href="#">
                        {' '}
                        <i className="fa fa-user-alt"></i> Author
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {' '}
                        <i className="fas fa-calendar-week"></i>17 June 2021
                      </a>
                    </li>
                  </ul>
                  <div className="blog-content">
                    <h3>
                      <a href="single-blog.html">
                        Planning for a Safe Return to the Workplace IT Solutions
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt
                    </p>
                    <div className="blog-btn">
                      {' '}
                      <a href="single-blog.html" className="blog-btn-one">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="single-blog.html">
                    <Image src={Blog2} alt="image" />
                  </a>
                </div>
                <div className="single-blog-item">
                  <ul className="blog-list">
                    <li>
                      <a href="#">
                        {' '}
                        <i className="fa fa-user-alt"></i> Author
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {' '}
                        <i className="fas fa-calendar-week"></i>20 June 2021
                      </a>
                    </li>
                  </ul>
                  <div className="blog-content">
                    <h3>
                      <a href="single-blog.html">
                        Announcing Our New Smiles for Success Charity
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt
                    </p>
                    <div className="blog-btn">
                      <a href="single-blog.html" className="blog-btn-one">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="single-blog.html">
                    <Image src={Blog3} alt="image" />
                  </a>
                </div>
                <div className="single-blog-item">
                  <ul className="blog-list">
                    <li>
                      <a href="#">
                        {' '}
                        <i className="fa fa-user-alt"></i> Author
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {' '}
                        <i className="fas fa-calendar-week"></i>25 June 2021
                      </a>
                    </li>
                  </ul>
                  <div className="blog-content">
                    <h3>
                      <a href="single-blog.html">
                        Machine Learning Applications for Every Industry
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt
                    </p>
                    <div className="blog-btn">
                      {' '}
                      <a href="single-blog.html" className="blog-btn-one">
                        Read More
                      </a>
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
