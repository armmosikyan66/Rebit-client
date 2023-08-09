'use client'
import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import '@/public/css/swiper.min.css'
import bg1 from '@/assets/img/slider-1.jpg'
import bg2 from '@/assets/img/slider-2.jpg'

export default function SliderHeader() {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      swiperRef.current = new Swiper('.swiper-container', {
        loop: true,
        speed: 900,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
      const autoplayInterval = setInterval(() => {
        if (swiperRef.current) {
          swiperRef.current.slideNext() // Go to the next slide
        }
      }, 5000) // 4 seconds

      return () => {
        clearInterval(autoplayInterval) // Clear interval on component unmount
      }
    }
  }, [])
  const handleNextButtonClick = (e) => {
    if (swiperRef.current) {
      swiperRef.current.slideNext() // Go to the next slide
    }
  }

  const handlePrevButtonClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev() // Go to the previous slide
    }
  }

  return (
    <header className="slider slider-prlx">
      <div className="swiper-container parallax-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="bg-img valign"
              style={{ backgroundImage: `url(${bg1.src})` }}
              data-overlay-dark="5"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="caption">
                      <h1>We Provide Many Kind of Technology Solutions</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua, magna aliqua. ipsum is simply dummy text
                        of the printing.
                      </p>
                      <div className="banner-btn home-slider-btn">
                        <a href="about.html" className="default-btn-one">
                          IT Solution
                          <span></span>
                        </a>
                        <a className="default-btn" href="contact.html">
                          Contact Us
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="bg-img valign"
              style={{ backgroundImage: `url(${bg2.src})` }}
              data-overlay-dark="5"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-12">
                    <div className="caption">
                      <h1>IT Solutions & Business Services Company</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua, magna aliqua. ipsum is simply dummy text
                        of the printing.
                      </p>
                      <div className="banner-btn home-slider-btn">
                        <a href="about.html" className="default-btn-one">
                          Discover More
                          <span></span>
                        </a>
                        <a className="default-btn" href="contact.html">
                          Contact Us
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="control-text">
          <div
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
            onClick={handlePrevButtonClick}
          >
            <span className="arrow prv"></span>
          </div>
          <div
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
            onClick={handleNextButtonClick}
          >
            <span className="arrow nxt"></span>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </header>
  )
}
