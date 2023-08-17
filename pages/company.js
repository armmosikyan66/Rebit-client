import { useEffect } from "react";
import { useRouter } from "next/router";
import { AboutCompany, PageTitle } from "@/components";
import Image from "next/image";
import imgs from "@/assets/img/choose-2.jpg";
import Career from "@/assets/img/career.png";

const teamMembers = [
  {
    name: "Ava Farrington",
    role: "Founder, CEO",
    image: imgs,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ava Farrington",
    role: "Founder, CEO",
    image: imgs,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

function TeamMember({ member }) {
  const { name, role, image, socialLinks } = member;

  return (
    <div className="single-team-box">
      <div className="team-image">
        <img src={image} alt="team" />
        <div className="team-social-icon">
          <a href={socialLinks.facebook} className="social-color-1">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href={socialLinks.twitter} className="social-color-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href={socialLinks.linkedin} className="social-color-3">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="team-info">
        <h3>{name}</h3>
        <span>{role}</span>
      </div>
    </div>
  );
}

function Company() {
  let router = useRouter();
  const asPath = router.asPath;

  useEffect(() => {
    (() => {
      if (asPath.includes("#")) {
        const last = asPath.split("#")[1];
        const navbar = document.getElementsByClassName("navbar-area")[0];

        if (last === "aboutus") {
          const element = document.getElementsByClassName('about-area')[0];
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "team") {
          const element = document.getElementsByClassName("team-area")[0];
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "careers") {
          const element = document.getElementById("careersss");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          window.scrollTo({ top: rect, behavior: "smooth" });
        }
      }
    })();

  }, [asPath]);

  return (
    <>
      <PageTitle title={"Company"} />
      <AboutCompany />

     
      <section className="team-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                {/* <h6>What We Provide</h6> */}
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content">
                <div className="about-content-text align-items-center">

                  <p>
                    Our team consists of talented and experienced professionals who are passionate about delivering high-quality web and software development solutions. We have a diverse group of individuals with a wide range of skills and expertise, including web design, software development, project management, and quality assurance.
                  </p>


                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
              <div className="about-image">
                <Image src={imgs} alt="team" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careersss" className="team-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h2>Careers</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="about-content">
                <div className="about-content-text align-items-center">

                  <p>
                    Are you ready to embark on an exhilarating journey of skill sharpening, problem cracking, and idea sparking? As part of the Rebit family, you'll not only master the intricacies of cutting-edge technologies but also create lasting connections with like-minded individuals who share your passion.
                  </p>
                  <p>
                    Join us on this captivating expedition and be part of a community that values growth, fosters creativity, and celebrates your individuality. Together, we're not just embracing the future; we're crafting it.
                  </p>
                  <p>Welcome to TechNexa – where careers are forged and dreams are realized.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 col-md-12 col-sm-12">
              <div className="about-image">
                <Image src={Career} alt="career" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Company;
