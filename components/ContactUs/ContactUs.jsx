import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Contactus from '@/assets/img/contactus.png'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    general: '',
  })

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const { name, email, message } = formData
    if (name && email && message) {
      setChecked(true)
    }
  }, [formData])

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const validatePhone = (phone) => {
    const phonePattern = /^\+\d{11}$/
    return phonePattern.test(phone)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }))
  }

  const newErrors = {
    name: !formData.name ? 'Please enter your first name' : '',
    email: !formData.email ? 'Please enter your email' : '',
    message: !formData.message ? 'Please enter your message' : '',
    phone: '',
    general: '',
  }
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()

      if (formData.email && !validateEmail(formData.email)) {
        newErrors.email = 'Invalid email format'
      }

      if (formData.phone && !validatePhone(formData.phone)) {
        newErrors.phone = 'Invalid phone format.'
      }

      if (!newErrors.name && !newErrors.email && !newErrors.message) {
        console.log('====================================')
        console.log(newErrors)
        console.log('====================================')
        setErrors({ ...newErrors })
        setChecked(true)

        console.log('Form submitted with:', formData)

        const res = await axios.post(
          'https://rebit-server.onrender.com/api/contactUs',
          {
            firstName: formData.name,
            lastName: formData.lastname,
            email: formData.email,
            message: formData.message,
          },
        )

        setFormData({
          name: '',
          lastname: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        newErrors.general = 'Please fill in all required fields'
        setErrors({ ...newErrors })
        setChecked(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className="contact-section bg-grey section-padding">
        <div className="container">
          <div className="section-title">
            {/* <h6>Contact Us</h6> */}
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
                      <div
                        className="form-group "
                        style={{ marginBottom: errors.name ? 20 : 0 }}
                      >
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className={`form-control ${
                            !checked && errors.name ? 'error-req' : ''
                          }`}
                          placeholder="First Name"
                          onChange={(e) => handleInputChange(e)}
                          value={formData.name}
                        />
                        {errors.name ? (
                          <p className="error-text">{errors.name}</p>
                        ) : null}
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
                          onChange={(e) => handleInputChange(e)}
                          value={formData.lastname}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="form-group"
                        style={{ marginBottom: errors.email ? 20 : 0 }}
                      >
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className={`form-control ${
                            !checked && errors.email ? 'error-req' : ''
                          }`}
                          required
                          placeholder="Email"
                          onChange={(e) => handleInputChange(e)}
                          value={formData.email}
                        />
                        {errors.email ? (
                          <p className="error-text">{errors.email}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div
                        className="form-group"
                        style={{ marginBottom: errors.phone ? 20 : 50 }}
                      >
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          required=""
                          className={`form-control ${
                            !checked && errors.phone ? 'error-req' : ''
                          }`}
                          placeholder="Phone"
                          onChange={(e) => handleInputChange(e)}
                          value={formData.phone}
                        />
                        {errors.phone ? (
                          <p className="error-text">{errors.phone}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div
                        className="form-group"
                        style={{ marginBottom: errors.message ? 20 : 20 }}
                      >
                        <textarea
                          name="message"
                          className={`form-control ${
                            !checked && errors.message ? 'error-req' : ''
                          }`}
                          id="message"
                          cols="30"
                          rows="6"
                          required
                          placeholder="Your Message"
                          onChange={(e) => handleInputChange(e)}
                          value={formData.message}
                        ></textarea>
                        {errors.message ? (
                          <p className="error-text">{errors.message}</p>
                        ) : null}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex flex-column align-items-center">
              <div>
                <Image src={Contactus} height={200} />
              </div>
              <div className="d-flex flex-column  mt-3">
                <div className="services-icon d-flex align-items-center">
                  <i
                    className="flaticon-phone-call"
                    style={{ fontSize: 24 }}
                  ></i>
                  <a
                    href="tel:0802235678"
                    className="ml-2"
                    style={{ fontSize: 16 }}
                  >
                    {' '}
                    +374 77 701 105{' '}
                  </a>
                </div>
                <div className="services-icon mt-2 d-flex align-items-center">
                  <i className="flaticon-envelope" style={{ fontSize: 24 }}></i>
                  <a
                    href="mailto:demo@example.com"
                    className="ml-2"
                    style={{ fontSize: 16 }}
                  >
                    hello@rebit.ai
                  </a>
                </div>
                <div className="services-icon mt-2 d-flex align-items-center">
                  <i
                    className="flaticon-location"
                    style={{ fontSize: 24 }}
                  ></i>
                  <a
                    href="mailto:demo@example.com"
                    className="ml-2"
                    style={{ fontSize: 16 }}
                  >
                    Tumanyan 6, Yerevan, Armenia
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
