export default function SliderHeader() {
  return (
    <header class="slider slider-prlx">
        <div class="swiper-container parallax-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="bg-img valign"
                data-background="assets/img/slider-2.jpg"
                data-overlay-dark="5"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 col-md-12">
                      <div class="caption">
                        <h1>We Provide Many Kind of Technology Solutions</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua, magna aliqua. ipsum is simply
                          dummy text of the printing.
                        </p>
                        <div class="banner-btn home-slider-btn">
                          <a href="about.html" class="default-btn-one">
                            IT Solution
                            <span></span>
                          </a>
                          <a class="default-btn" href="contact.html">
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
            <div class="swiper-slide">
              <div
                class="bg-img valign"
                data-background="assets/img/slider-2.jpg"
                data-overlay-dark="5"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8 col-md-12">
                      <div class="caption">
                        <h1>IT Solutions & Business Services Company</h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua, magna aliqua. ipsum is simply
                          dummy text of the printing.
                        </p>
                        <div class="banner-btn home-slider-btn">
                          <a href="about.html" class="default-btn-one">
                            Discover More
                            <span></span>
                          </a>
                          <a class="default-btn" href="contact.html">
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
          <div class="control-text">
            <div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer">
              <span class="arrow prv"></span>
            </div>
            <div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer">
              <span class="arrow nxt"></span>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </header>
  )
}
