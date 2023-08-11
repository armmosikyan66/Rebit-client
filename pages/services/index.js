import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";
import { PageTitle } from "@/components";
import Web from '@/assets/img/webb-removebg-preview.png';
import Mobile from '@/assets/img/mobile-removebg-preview.png';
import Ai from '@/assets/img/aii-removebg-preview.png';
import Devops from '@/assets/img/devops.png';
import Consulting from '@/assets/img/consul-removebg-preview.png';
import Ui from '@/assets/img/ui.png';

function Services() {
  let router = useRouter();
  const asPath = router.asPath;
  console.log("asPath", asPath);

  //   console.log('services');
  //   console.log('route', router.asPath);

  useEffect(() => {
    (() => {
      if (asPath.includes("#")) {
        const last = asPath.split("#")[1];
        console.log("last", last);
        const navbar = document.getElementsByClassName("navbar-area")[0];

        if (last === "webdevelopment") {
          const element = document.getElementById("web-dev");
          const rect =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            navbar.clientHeight;
          console.log("webdevelopment", rect);
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
      <PageTitle title={"Our Services"} />
      <div id="web-dev" className="stack-element">
        <div className="content-wrapper">
          <div className="text-block">
            <div className="text-block__title">
              <span>Web Applications</span>
            </div>
            <p>
              Our Web applications aren't just lines of code; they are gateways
              to immersive online experiences, meticulously designed to capture
              attention and spark engagement. Our team of skilled developers,
              architects, and designers collaborates harmoniously to transform
              ideas into visually stunning and functionally impeccable web
              applications.
            </p>
          </div>
          <div className="image-block">
            <Image src={Web} />
          </div>
        </div>
      </div>

      <div id="mobile-app" className="stack-element">
        <div className="content-wrapper">
          <div className="image-block">
            <Image src={Mobile} />
          </div>
          <div className="text-block">
            <div className="text-block__title">
              <span>Mobile Applications</span>
            </div>
            <p>
              Within our visionary IT company, we orchestrate symphonies of
              innovation in the realm of mobile applications. These digital
              marvels are not mere programs, but rather conduits of
              transformation that bring unparalleled convenience and
              connectivity to users' fingertips. Our talented team of
              developers, designers, and strategists collaborates harmoniously
              to sculpt mobile applications that seamlessly meld aesthetics with
              functionality.
            </p>
          </div>
        </div>
      </div>

      <div id="ai" className="stack-element">
        <div className="content-wrapper">
          <div className="text-block">
            <div className="text-block__title">
              <span>Work with AI Models – lorem ipsum</span>
            </div>
            <p>
              The blend of experience, skill, and proactive approach guarantees
              that the technology օur developers create isn't just reactive but
              can adapt and grow along with the changing world. So, whether
              you're working with complex AI algorithms or need technology that
              can quickly adjust to changes, our developers are here to guide
              you on this journey of transformation.
            </p>
          </div>
          <div className="image-block">
            <Image src={Ai} />
          </div>
        </div>
      </div>

      <div id="devopss" className="stack-element">
        <div className="content-wrapper">
          <div className="image-block">
            <Image src={Devops} />
          </div>
          <div className="text-block">
            <div className="text-block__title">
              <span>DevOps</span>
            </div>
            <p>
              The highly proficient DevOps team is dedicated to furnishing
              solutions that prioritize the rapid and efficient delivery of
              software. By incorporating a well-orchestrated blend of
              automation, continuous integration, and continuous deployment
              practices, they ensure that the entire software development life
              cycle operates with optimal speed and precision.
            </p>
          </div>
        </div>
      </div>

      <div id="xxxxxxx" className="stack-element">
        <div className="content-wrapper">
          <div className="text-block">
            <div className="text-block__title">
              <span>Consulting</span>
            </div>
            <p>
              Our IT consultations are designed to provide strategic insights,
              practical solutions, and actionable roadmaps tailored to your
              unique business challenges. Whether you're seeking to optimize
              processes, embrace new technologies, or enhance cybersecurity, we
              have the expertise to help you succeed. Unlocking Strategic
              Insights, Implementing Practical Solutions, and Following Tailored
              Roadmaps for Your Unique Business Challenges"
            </p>
          </div>
          <div className="image-block">
            <Image src={Consulting} />
          </div>
        </div>
      </div>

      <div id="uiuxs" className="stack-element">
        <div className="content-wrapper">
          <div className="image-block">
            <Image src={Ui} />
          </div>
          <div className="text-block">
            <div className="text-block__title">
              <span>UI/UX</span>
            </div>
            <p>
              services at Rebit.ai revolve around your users' needs and expectations. We meticulously analyze user behaviors, preferences, and pain points to develop design strategies that cater to their unique journey, ensuring a memorable and delightful experience at every touchpoint. Innovative Visual Storytelling: We believe that design should not only be functional but also visually compelling. Our creative designers specialize in weaving visual narratives that communicate your brand's story while enhancing usability. Through striking visuals, intuitive layouts, and harmonious color palettes, we create designs that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
