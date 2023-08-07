import Image from "next/image";
import Team1 from '@/assets/img/team/team-1.jpg';
import Team2 from '@/assets/img/team/team-2.jpg';
import Team3 from '@/assets/img/team/team-3.jpg';
import Team4 from '@/assets/img/team/team-3.jpg';


export default function TeamMembers() {

  return (
    <section className="team-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h6>Team Member</h6>
              <h2>Expert Team</h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <Image src={Team1} alt="team" />
                <div className="team-social-icon">
                  <a href="/" className="social-color-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social-color-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" className="social-color-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Ava Farrington</h3>
                <span>Founder, ceo</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <Image src={Team2} alt="team" />
                <div className="team-social-icon">
                  <a href="/" className="social-color-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social-color-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" className="social-color-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Kevin Haley</h3>
                <span>Co-founder, cto</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <Image src={Team3} alt="team" />
                <div className="team-social-icon">
                  <a href="/" className="social-color-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social-color-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" className="social-color-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Alishia Fulton</h3>
                <span>Chief creative officer</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-team-box">
              <div className="team-image">
                <Image src={Team4} alt="team" />
                <div className="team-social-icon">
                  <a href="/" className="social-color-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social-color-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" className="social-color-3">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              <div className="team-info">
                <h3>Lucas Martinez</h3>
                <span>Project Manager</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
