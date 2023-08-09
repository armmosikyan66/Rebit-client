'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/img/logo.png'
import LogoBlack from '@/assets/img/logo-black.png'
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

  console.log('route in header', route);

  const isSticky = useScrollSticky()
  return (
    <div className={`navbar-area ${isSticky ? 'is-sticky' : ''}`}>
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
                      <Link href="/aboutus" className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/team" className="nav-link">
                        Team
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/careers" className="nav-link">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  {/* <Link href="#" className="nav-link">
                    Services <i className="fas fa-chevron-down"></i>
                  </Link> */}
                  <Link href="/services" className="nav-link">
                    Services <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      {' '}
                      {route === '/services' ? 
                        <a className='nav-link' onClick={(e) => e.preventDefault()} href="">Web Development</a>
                          :
                        <Link href={route === "/services" ? '' : '/services'} className="nav-link">
                          Web Development
                        </Link>}
                    </li>
                    <li className="nav-item">
                      {' '}
                      {route === '/services' ? 
                        <a className='nav-link' onClick={(e) => e.preventDefault()} href="">Mobile App</a>
                          :
                        <Link href="/services" className="nav-link">
                          Mobile App
                        </Link>}
                    </li>
                    <li className="nav-item">
                      {' '}
                      {route === '/services' ? 
                        <a className='nav-link' onClick={(e) => e.preventDefault()} href="">AI Models</a>
                          :
                        <Link href="/services" className="nav-link">
                          AI Models
                        </Link>}
                    </li>
                    <li className="nav-item">
                      {' '}
                      {route === '/services' ? 
                        <a className='nav-link' onClick={(e) => e.preventDefault()} href="">DevOps</a>
                          :
                        <Link href="/services" className="nav-link">
                          DevOps
                        </Link>}
                    </li>
                    <li className="nav-item">
                      {' '}
                      {route === '/services' ? 
                        <a className='nav-link' onClick={(e) => e.preventDefault()} href="">Consulting</a>
                          :
                        <Link href="/services" className="nav-link">
                          Consulting
                        </Link>}
                    </li>
                    <li className="nav-item">
                      {' '}
                      {route === '/services' ? 
                        <a className='nav-link' onClick={(e) => e.preventDefault()} href="">UI/UX</a>
                          :
                        <Link href="/services" className="nav-link">
                          UI/UX
                        </Link>}
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
                      <Link href="/ourprojects" className="nav-link">
                        Our Projects
                      </Link>
                    </li>
                    <li className="nav-item">
                      {' '}
                      <Link href="/ourstartups" className="nav-link">
                        Our Startups
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="/itschool" className="nav-link">
                    IT School
                  </Link>
                </li>
                <li className="nav-item">
                  {' '}
                  <Link href="/ourclients" className="nav-link">
                    Our Clients
                  </Link>
                </li>
                {/* <li className="nav-item">
                  {' '}
                  <Link href="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li> */}
              </ul>
              <div className="other-option">
                {' '}
                <Link className="default-btn" href="mailto:demo@example.com">
                  Contact Us
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
