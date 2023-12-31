import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { PageTitle } from "@/components";
import Web from "@/assets/img/webb-removebg-preview.png";
import Mobile from "@/assets/img/mobile-removebg-preview.png";
import Ai from "@/assets/img/aii-removebg-preview.png";
import Devops from "@/assets/img/devops.png";
import Consulting from "@/assets/img/consul-removebg-preview.png";
import Ui3 from "@/assets/img/Social_Media_Platforms-removebg-preview.png";

function Services() {
  let router = useRouter();
  const asPath = router.asPath;

  const stackElements = [
    {
      id: "web-dev",
      title: "Web Applications",
      description: `Our Web applications aren't just lines of code; they are gateways
                    to immersive online experiences, meticulously designed to capture
                    attention and spark engagement. Our team of skilled developers,
                    architects, and designers collaborates harmoniously to transform
                    ideas into visually stunning and functionally impeccable web
                    applications.`,
      image: Web,
    },
    {
      id: "mobile-app",
      title: "Mobile Applications",
      description: `Within our visionary IT company, we orchestrate symphonies of
                    innovation in the realm of mobile applications. These digital
                    marvels are not mere programs, but rather conduits of
                    transformation that bring unparalleled convenience and
                    connectivity to users' fingertips. Our talented team of
                    developers, designers, and strategists collaborates harmoniously
                    to sculpt mobile applications that seamlessly meld aesthetics with
                    functionality.`,
      image: Mobile,
    },
    {
      id: "ai",
      title: "Work with AI Models",
      description: `The blend of experience, skill, and proactive approach guarantees
                    that the technology օur developers create isn't just reactive but
                    can adapt and grow along with the changing world. So, whether
                    you're working with complex AI algorithms or need technology that
                    can quickly adjust to changes, our developers are here to guide
                    you on this journey of transformation.`,
      image: Ai,
    },
    {
      id: "devopss",
      title: "DevOps",
      description: `The highly proficient DevOps team is dedicated to furnishing
                    solutions that prioritize the rapid and efficient delivery of
                    software. By incorporating a well-orchestrated blend of
                    automation, continuous integration, and continuous deployment
                    practices, they ensure that the entire software development life
                    cycle operates with optimal speed and precision.`,
      image: Devops,
    },
    {
      id: "xxxxxxx",
      title: "Consulting",
      description: `Our IT consultations are designed to provide strategic insights,
                    practical solutions, and actionable roadmaps tailored to your
                    unique business challenges. Whether you're seeking to optimize
                    processes, embrace new technologies, or enhance cybersecurity, we
                    have the expertise to help you succeed. Unlocking Strategic
                    Insights, Implementing Practical Solutions, and Following Tailored
                    Roadmaps for Your Unique Business Challenges`,
      image: Consulting,
    },
    {
      id: "uiuxs",
      title: "UI/UX",
      description: `Services at Rebit.ai revolve around your users' needs and expectations.
                    We meticulously analyze user behaviors, preferences, and pain points to develop design 
                    strategies that cater to their unique journey, ensuring a memorable and delightful experience 
                    at every touchpoint. Innovative Visual Storytelling: We believe that design should not only be 
                    functional but also visually compelling. Our creative designers specialize in weaving visual 
                    narratives that communicate your brand's story while enhancing usability. Through striking visuals, 
                    intuitive layouts, and harmonious color palettes, we create designs that leave a lasting impact.`,
      image: Ui3,
    },
  ];

  const StackSection = ({ id, title, description, image, index }) => (
    // <div id={id} className="stack-element">
    //   <div
    //     id="reverse"
    //     className="content-wrapper"
    //     style={{ flexDirection: index % 2 === 1 ? "row-reverse" : "" }}
    //   >
    //     <div className="text-block">
    //       <div className="text-block__title" style={{ order: 2 }}>
    //         <span>{title}</span>
    //       </div>
    //       <p style={{ order: 1 }}>{description}</p>
    //     </div>
    //     <div className="image-block" style={{ order: 3 }}>
    //       <Image src={image} alt="stacks" priority />
    //     </div>
    //   </div>
    // </div>
    <section className="stack-element" style={{ paddingBottom: 30 }} id={id}>
      <div className="container">
        <div className="row ">
          <div className="col-sm-12">
            <div className="section-title">
              {/* <h6>What We Provide</h6> */}
              <h2>{title}</h2>
            </div>
          </div>
        </div>

        <div
          id="reverse"
          className={`row align-items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
        >
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-between">
            <div className="about-content">
              <div className="about-content-text">
                <p>
                  We invite everyone who is interested in the IT world to study and
                  become part of our team, regardless of their age. Our experienced
                  specialists will train you with all the necessary means so that you
                  can enter the IT field. Join us to learn new things and become smart
                  specialists and develop further
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-start">
            <div className="about-image">
              <Image src={image} alt="IT School" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );

  useEffect(() => {
    const idHashMapping = {
      webdevelopment: "web-dev",
      mobileapp: "mobile-app",
      aimodels: "ai",
      devops: "devopss",
      consulting: "xxxxxxx",
      uiux: "uiuxs",
    };

    if (asPath.includes("#")) {
      const last = asPath.split("#")[1];
      const navbar = document.getElementsByClassName("navbar-area")[0];

      const elementId = idHashMapping[last];
      if (elementId) {
        const element = document.getElementById(elementId);
        if (element) {
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          window.scrollTo({ top: rect, behavior: "smooth" });
        }
      }
    }
  },);

  return (
    <>
      <Head>
        <title>Our Services</title>
        <meta
          name="description"
          content="Learn about our company, our team members, and our mission."
        />
      </Head>
      <PageTitle title={"Our Services"} />
      {stackElements.map((section, index) => (
        <StackSection
          index={index}
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          image={section.image}
        />
      ))}
    </>
  );
}

export default Services;
