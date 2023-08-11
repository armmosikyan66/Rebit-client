import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Contactus from '@/assets/img/contactus.png'

import Cntct from '../../assets/img/about.jpg'

function ContactUs() {
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState('')
  const [checked, setCheked] = useState(false)

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const validatePhone = (phone) => {
    const phonePattern = /^\+\d{11}$/
    return phonePattern.test(phone)
  }
  useEffect(() => {
    if (name && email && message) {
      setCheked(true)
    }
  }, [name, email, message])
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      setError('')
      setErrorEmail('')
      setErrorPhone('')
      setCheked(false)

      if (!name && !email && !message) {
        setError('Please fill in all required fields')
        setCheked(true)
        return
      } else {
        setError('')
        setCheked(false)
      }

      if (!validateEmail(email)) {
        setErrorEmail('Invalid email format')
        return
      }

      if (phone && !validatePhone(phone)) {
        setErrorPhone('Invalid phone format. Use format: +374********')
        return
      }
      console.log('Form submitted with:', {
        name,
        lastname,
        email,
        phone,
        message,
      })

      setName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setMessage('')

      const res = await axios.post(
        'https://rebit-server.onrender.com/api/contactUs',
        {
          firstName: name,
          lastName: lastname,
          email: email,
          message: message,
        },
      )

      console.log('resssssss', res)
    } catch (error) {
      console.log('====================================')
      console.log(error)
      console.log('====================================')
    }
  }

  return (
    <section>
      <div className="contact-section bg-grey section-padding">
        <div className="container">
          <div className="section-title">
            <h6>Contact Us</h6>
            <h2>Let's Talk</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-1">
              <div className="contact-form">
                <p className="form-message"></p>
                <br />
                <div id="contact-form" className="contact-form form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group ">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className={`form-control ${
                            checked && !name ? 'error-req' : ''
                          }`}
                          placeholder="First Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastname}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            checked && !email ? 'error-req' : ''
                          }`}
                          required
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                        {errorEmail ? (
                          <p className="error-text">{errorEmail}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          required=""
                          className="form-control"
                          placeholder="Phone"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                        />
                        {errorPhone ? (
                          <p className="error-text">{errorPhone}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className={`form-control ${
                            checked && !message ? 'error-req' : ''
                          }`}
                          id="message"
                          cols="30"
                          rows="6"
                          required
                          placeholder="Your Message"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button
                        type="submit"
                        className="default-btn submit-btn"
                        onClick={handleSubmit}
                      >
                        Send Message <span></span>
                      </button>
                      {error ? (
                        <div>
                          <p className="error-text">{error}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <div>
                <Image src={Contactus} height={200}/>
              </div>
              <div className="d-flex flex-column  mt-3">
                <div className="services-icon d-flex align-items-center" >
                  <i className="flaticon-phone-call" style={{ fontSize: 24 }}></i>
                  <a href="tel:0802235678" className="ml-2" style={{ fontSize: 16 }}> +374 77 701 105 </a>
                </div>
                <div className="services-icon mt-2 d-flex align-items-center">
                  <i className="flaticon-envelope" style={{ fontSize: 24 }}></i>
                  <a href="mailto:demo@example.com" className="ml-2" style={{ fontSize: 16 }}>
                    hello@rebit.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
