'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/img/Logo/Logo_mono_white.png'
import LogoBlack from '@/assets/img/Logo/Logo_mono_dark.png'
import { useEffect, useState } from 'react'

const useScrollSticky = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const scrollY = window.scrollY
      // You can adjust the threshold value (e.g., 100) to change when the class is added
      setIsSticky(scrollY > 89)
    }

    // Check if window is defined before adding the scroll event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)

      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return isSticky
}

export default function Header({ route }) {

  console.log('route in header', route)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toContacts = () => {
    const navbar = document.getElementsByClassName("navbar-area")[0];
    const contacts = document.getElementsByClassName('contact-section')[0]
    const rect = contacts.getBoundingClientRect().top + window.pageYOffset - navbar.clientHeight;
    window.scrollTo({ top: rect, behavior: "smooth" });
  }


  const isSticky = useScrollSticky()
  return (
    <div id='navbar' className={`navbar-area ${isSticky ? 'is-sticky' : ''}`}>
      <div className="techvio-responsive-nav">
        <div className="container">
          <div className="techvio-responsive-menu">
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
                isMenuOpen ? 'show' : ''
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link nav-linkk" style={route === '/' ? {color: '#048dff'} : {}}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" style={route === '/aboutus' || route === '/team' || route === '/careers' ? {color: '#048dff'} : {}} className="nav-link nav-linkk">
                    Company <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}
                      <Link href="/aboutus" className="nav-link nav-linkk">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/team" className="nav-link nav-linkk">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/careers" className="nav-link nav-linkk">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="/services" id='services' style={route === '/services' ? {color: '#048dff'} : {}} className={"nav-link nav-linkk"}>
                    Services <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}

                      <Link href='/services/#webdevelopment' className="nav-link nav-linkk">
                        Web Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/services/#mobileapp" className="nav-link nav-linkk">
                        Mobile App
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/services/#aimodels" className="nav-link nav-linkk">
                        AI Models
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/services/#devops" className="nav-link nav-linkk">
                        DevOps
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/services/#consulting" className="nav-link nav-linkk">
                        Consulting
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/services/#uiux" className="nav-link nav-linkk">
                        UI/UX
                      </Link>

                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="#" style={route === '/ourstartups' || route === '/ourprojects' ? {color: '#048dff'} : {}} className="nav-link nav-linkk">
                    Projects <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}
                      <Link href="/ourprojects" className="nav-link nav-linkk">
                        Our Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/ourstartups" className="nav-link nav-linkk">
                        Our Startups
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="/itschool" style={route === '/itschool' ? {color: '#048dff'} : {}} className="nav-link nav-linkk">
                    IT School
                  </Link>
                </li>
              </ul>
              <div className="other-option">
                {' '}
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
  )
}
