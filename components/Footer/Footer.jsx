import Link from 'next/link'

export default function Footer() {

  return (
    <section className="footer-subscribe-wrapper">
		<div className="footer-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>About Us</h3>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris.</p>
							<ul className="footer-social">
								<li>
									<a href="#"> <i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="#"> <i className="fab fa-twitter"></i>
									</a>
								</li>
								<li>
									<a href="#"> <i className="fab fa-pinterest"></i>
									</a>
								</li>
								<li>
									<a href="#"> <i className="fab fa-linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>Our Services</h3>
							</div>
							<ul className="footer-quick-links">
								<li> <a href="#">IT Solution</a></li>
								<li> <a href="projects.html">Web Development</a></li>
								<li> <a href="services.html">Networking Services</a></li>
								<li> <a href="team.html">SEO Optimization</a></li>
								<li> <a href="contact.html">App Optimization</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>Useful Links</h3>
							</div>
							<ul className="footer-quick-links">
								<li><Link href="aboutus">About Us</Link></li>
								<li><a href="projects.html">Case Study</a></li>
								<li><a href="contact.html">Contact Us</a></li>
								<li><a href="privacy-policy.html">Privacy Policy</a></li>
								<li><a href="terms-condition.html">Terms & Conditions</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<div className="footer-heading">
								<h3>Contact Info</h3>
							</div>
							<div className="footer-info-contact"> <i className="flaticon-phone-call"></i>
								<h3>Phone</h3>
								<span><a href="tel:0802235678">080 707 555-321</a></span>
							</div>
							<div className="footer-info-contact"> <i className="flaticon-envelope"></i>
								<h3>Email</h3>
								<span><a href="mailto:demo@example.com">demo@example.com</a></span>
							</div>
							<div className="footer-info-contact"> <i className="flaticon-placeholder"></i>
								<h3>Address</h3>
								<span>526  Melrose Street, Water Mill, 11976  New York</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}
