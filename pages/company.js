import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AboutCompany, PageTitle } from "@/components";
import imgs from "@/assets/img/team/team-1.jpg";
import axios from "axios";

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

// function TeamMember({ member }) {
//   const { name, role, image, socialLinks } = member;

//   return (
//     <div className="single-team-box">
//       <div className="team-image">
//         <img src={image} alt="team" />
//         <div className="team-social-icon">
//           <a href={socialLinks.facebook} className="social-color-1">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href={socialLinks.twitter} className="social-color-2">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href={socialLinks.linkedin} className="social-color-3">
//             <i className="fab fa-linkedin"></i>
//           </a>
//         </div>
//       </div>
//       <div className="team-info">
//         <h3>{name}</h3>
//         <span>{role}</span>
//       </div>
//     </div>
//   );
// }

function Company() {
  let router = useRouter();
  const asPath = router.asPath;

  useEffect(() => {
    const func = async () => {
      console.log('ssssssssssssss', await axios.get('https://rebit-server.onrender.com/api/projects?type=project'))
    }

    func()
  }, []);

  // useEffect(() => {
  //   (() => {
  //     if (asPath.includes("#")) {
  //       const last = asPath.split("#")[1];
  //       const navbar = document.getElementsByClassName("navbar-area")[0];

  //       if (last === "aboutus") {
  //         const element = document.getElementsByClassName('about-area')[0];
  //         const rect =
  //           element.getBoundingClientRect().top +
  //           window.pageYOffset -
  //           navbar.clientHeight;
  //         window.scrollTo({ top: rect, behavior: "smooth" });
  //       } else if (last === "team") {
  //         const element = document.getElementsByClassName("team-area")[0];
  //         const rect =
  //           element.getBoundingClientRect().top +
  //           window.pageYOffset -
  //           navbar.clientHeight;
  //         window.scrollTo({ top: rect, behavior: "smooth" });
  //       } else if (last === "careers") {
  //         const element = document.getElementById("careersss");
  //         const rect =
  //           element.getBoundingClientRect().top +
  //           window.pageYOffset -
  //           navbar.clientHeight;
  //         window.scrollTo({ top: rect, behavior: "smooth" });
  //       }
  //     }
  //   })();

  // }, [asPath]);

  return (
    <>
      <Head>
        <title>Rebit.ai</title>
        <meta name="description" content="about Rebit.ai software development company team" />
      </Head>
      <PageTitle title={"Company"} />
      <AboutCompany />

      <section className="team-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Our Team</h2>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div id="careersss">Careers</div>
    </>
  );
}

export default Company;
