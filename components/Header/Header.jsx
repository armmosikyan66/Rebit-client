"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/Logo/Logo_mono_white.png";
import LogoBlack from "@/assets/img/Logo/Logo_mono_dark.png";
import { useEffect, useState } from "react";

const useScrollSticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the threshold value (e.g., 100) to change when the class is added
      setIsSticky(scrollY > 89);
    };

    // Check if window is defined before adding the scroll event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return isSticky;
};

export default function Header({ route }) {

  const [opened, setOpened] = useState(false);

  const [menuServices, setMenuServices] = useState({
    opened: false,
    checked: false,
  });
  const [menuProjects, setMenuProjects] = useState(false);

  const toContacts = () => {
    const navbar = document.getElementsByClassName("navbar-area")[0];
    const contacts = document.getElementsByClassName("contact-section")[0];
    const rect =
      contacts.getBoundingClientRect().top +
      window.pageYOffset -
      navbar.clientHeight;
    window.scrollTo({ top: rect, behavior: "smooth" });
  };

  const isSticky = useScrollSticky();
  const [menuCompany, setMenuCompany] = useState({ opened: false });

  const toggleDropdown = () => {
    setMenuCompany((prevState) => ({
      opened: !prevState.opened,
    }));
  };

  return (
    <div id="navbar" className={`navbar-area ${isSticky ? "is-sticky" : ""}`}>
      <div className="techvio-responsive-nav">
        <div className="container">
          <div className="techvio-responsive-menu mean-container">
            <div className="logo">
              <a href="/">
                <Image
                  src={Logo}
                  className="white-logo"
                  alt="logo"
                  height={40}
                />
                <Image
                  src={LogoBlack}
                  className="black-logo"
                  alt="logo"
                  height={40}
                />
              </a>
            </div>
            <div
              style={{
                left: 0,
                top: 0,
                color: "white",
              }}
              className="mean-bar"
            >
              <a
                href="#nav"
                className={`meanmenu-reveal ${opened ? "meanclose" : ""}`}
                onClick={() => setOpened((prev) => !prev)}
              >
                <span
                  style={{
                    background: isSticky ? "black" : "white",
                    transformOrigin: opened ? "0% 0%" : null,
                    transition: opened ? "transform 0.4s ease-in-out" : null,
                    transform: opened ? "rotate(45deg)" : null,
                  }}
                  className="meanclose__firstLine"
                ></span>
                <span
                  style={{
                    background: isSticky ? "black" : "white",
                    transition: opened ? "transform 0.2s ease-in-out" : null,
                    transform: opened ? "scaleY(0)" : null,
                  }}
                  className="meanclose__secondLIne"
                ></span>
                <span
                  style={{
                    background: isSticky ? "black" : "white",
                    transformOrigin: opened ? "0% 100%" : null,
                    transition: opened ? "transform 0.4s ease-in-out" : null,
                    transform: opened ? "rotate(-45deg)" : null,
                  }}
                  className="meanclose__thirthLine"
                ></span>
              </a>
              <nav className="mean-nav">
                <ul
                  className="navbar-nav"
                  style={opened ? { display: "flex" } : { display: "none" }}
                >
                  <li className="nav-item ">
                    <Link href="#" className="nav-link">
                      Home <i className="fas fa-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={toggleDropdown}>
                      Company
                      <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        menuCompany.opened
                          ? "opened-dropdown"
                          : "closed-dropdown"
                      } `}
                    >
                      <li className="nav-item">
                        <Link href="/company/#aboutus" className="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/company/#team" className="nav-link">
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/company/#careers" className="nav-link">
                          Careers
                        </Link>
                      </li>
                    </ul>
                    <a
                      className="mean-expand"
                      href="#"
                      style={{ fontSize: 18 }}
                      onClick={toggleDropdown}
                    >
                      {menuCompany.opened ? "-" : "+"}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() =>
                      setMenuServices({
                        opened: !menuServices.opened,
                        checked: true,
                      })
                    }
                  >
                    <a href="#" className="nav-link">
                      Services
                      <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul
                      className={`dropdown-menu ${
                        menuServices.opened
                          ? "opened-dropdown"
                          : !menuServices.opened
                          ? "closed-dropdown"
                          : ""
                      }`}
                      // style={
                      //   menuServices
                      //     ? { display: 'block' }
                      //     : { display: 'none' }
                      // }
                    >
                      <li className="nav-item">
                        <Link
                          href="/services/#webdevelopment"
                          className="nav-link"
                        >
                          Web Development
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/#mobileapp" className="nav-link">
                          Mobile App
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/#aimodels" className="nav-link">
                          AI Models
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/#devops" className="nav-link">
                          Devops
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/#consulting" className="nav-link">
                          Consulting
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/services/#uiux" className="nav-link">
                          UI/UX
                        </Link>
                      </li>
                    </ul>
                    <a
                      className="mean-expand"
                      href="#"
                      style={{ fontSize: 18 }}
                    >
                      {menuServices.opened ? "-" : "+"}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setMenuProjects((prev) => !prev)}
                  >
                    <a href="/ourstartups" className="nav-link">
                      Startups
                      <i className="fas fa-chevron-down"></i>
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setMenuProjects((prev) => !prev)}
                  >
                    <a href="/ourprojects" className="nav-link">
                      Portfolio
                      <i className="fas fa-chevron-down"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link href="/itschool" className="nav-link">
                      IT School
                      <i className="fas fa-chevron-down"></i>
                    </Link>
                  </li>
                </ul>
                <div className="other-option">
                  <a className="default-btn" href="mailto:demo@example.com">
                    Get It Support
                    <span></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="techvio-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              <Image src={Logo} className="white-logo" alt="logo" height={40} />
              <Image
                src={LogoBlack}
                className="black-logo"
                alt="logo"
                height={40}
              />
            </Link>
            <div
              className={`collapse navbar-collapse mean-menu ${
                opened ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className="nav-link nav-linkk"
                    style={route === "/" ? { color: "#048dff" } : {}}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/company"
                    style={route === "/company" ? { color: "#048dff" } : {}}
                    className="nav-link nav-linkk"
                  >
                    Company <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/company/#aboutus"
                        className="nav-link nav-linkk"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/company/#team"
                        className="nav-link nav-linkk"
                      >
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/company/#careers"
                        className="nav-link nav-linkk"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    href="/services"
                    id="services"
                    style={route === "/services" ? { color: "#048dff" } : {}}
                    className={"nav-link nav-linkk"}
                  >
                    Services <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/services/#webdevelopment"
                        className="nav-link nav-linkk"
                      >
                        Web Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/services/#mobileapp"
                        className="nav-link nav-linkk"
                      >
                        Mobile App
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/services/#aimodels"
                        className="nav-link nav-linkk"
                      >
                        AI Models
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/services/#devops"
                        className="nav-link nav-linkk"
                      >
                        DevOps
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/services/#consulting"
                        className="nav-link nav-linkk"
                      >
                        Consulting
                      </Link>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <Link
                        href="/services/#uiux"
                        className="nav-link nav-linkk"
                      >
                        UI/UX
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="/ourstartups" className="nav-link nav-linkk">
                    Startups
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link href="/ourprojects" className="nav-link nav-linkk">
                    Portfolio
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link href="/itschool" className="nav-link nav-linkk">
                    IT School
                  </Link>
                </li>
              </ul>
              <div className="other-option">
                {" "}
                <button className="default-btn" onClick={toContacts}>
                  Contact Us
                  <span></span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
