import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/img/logo.png'
import LogoBlack from '@/assets/img/logo-black.png'


export default function Header() {
  return (
    <div className="navbar-area">
      <div className="techvio-responsive-nav">
        <div className="container">
          <div className="techvio-responsive-menu">
            <div className="logo">
              <Link href="/">
                <Image src={Logo} className="white-logo" alt="logo" />
                <Image src={LogoBlack} className="black-logo" alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="techvio-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/">
              <Image src={Logo} className="white-logo" alt="logo" />
              <Image src={LogoBlack} className="black-logo" alt="logo" />
            </Link>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link">
                    Company <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}
                      <Link href="aboutus" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="team" className="nav-link">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="careers" className="nav-link">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="#" className="nav-link">
                    Services <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}
                      <Link href="webdevelopment" className="nav-link">
                        Web Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="mobile" className="nav-link">
                        Mobile App
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="aimodels" className="nav-link">
                        AI Models
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="devops" className="nav-link">
                        DevOps
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="consulting" className="nav-link">
                        Consulting
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="consulting" className="nav-link">
                        UI/UX
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="#" className="nav-link">
                    Projects <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}
                      <Link href="ourprojects" className="nav-link">
                        Our Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="ourstartups" className="nav-link">
                        Our Startups
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="itschool" className="nav-link">
                    IT School
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="ourclients" className="nav-link">
                    Our Clients
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div className="other-option">
                {' '}
                <Link className="default-btn" href="mailto:demo@example.com">
                  Get It Support
                  <span></span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
