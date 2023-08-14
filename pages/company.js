import { useEffect } from "react";
import { useRouter } from "next/router";
import { AboutCompany, PageTitle } from "@/components";
import imgs from "@/assets/img/team/team-1.jpg";

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
        console.log("last", last);
        const navbar = document.getElementsByClassName("navbar-area")[0];

        if (last === "aboutus") {
          const element = document.getElementById("about-us");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("aboutus", rect);
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "mobileapp") {
          const element = document.getElementById("mobile-app");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("mobileapp", rect);
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "aimodels") {
          const element = document.getElementById("ai");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("aimodels", rect);
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "devops") {
          const element = document.getElementById("devopss");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("devops", rect);
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "consulting") {
          const element = document.getElementById("xxxxxxx");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("consulting", rect);
          window.scrollTo({ top: rect, behavior: "smooth" });
        } else if (last === "uiux") {
          const element = document.getElementById("uiuxs");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("uiux", rect);
          window.scrollTo({ top: rect, behavior: "smooth" });
        }
      }
    })();

    console.log("useeffect works empty array");
  }, [asPath]);

  return (
    <>
      <PageTitle title={"Company"} />
      <AboutCompany />

      <section className="team-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h6>Team Member</h6>
                <h2>Expert Team</h2>
              </div>
            </div>
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="careers">Careers</div>
    </>
  );
}

export default Company;
