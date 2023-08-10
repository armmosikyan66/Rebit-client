import { useState } from 'react'
import axios from 'axios'

function ContactUs() {
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorName, setErrorName] = useState('')

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }

  const validatePhone = (phone) => {
    const phonePattern = /^\+\d{11}$/
    return phonePattern.test(phone)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorName('')
    setErrorEmail('')
    setErrorPhone('')

    if (!name) {
      setErrorName('Please fill in all required fields')
      return
    }
    if (!email) {
      setErrorEmail('Please fill in all required fields')
      return
    }
    if (!validateEmail(email)) {
      setErrorEmail('Invalid email format')
      return
    }
    if (!message) {
      setErrorMessage('Please fill in all required fields')
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

    const res = await axios.post('https://rebit-server.onrender.com/api/contactUs', {
      firstName: name,
      lastName: lastname,
      email: email,
      message: message
    })

    console.log('resssssss', res)
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
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-form">
                <p className="form-message"></p>
                <br />
                <div id="contact-form" className="contact-form form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="First Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                        {errorName ? (
                          <p className="error-text">{errorName}</p>
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
                          className="form-control"
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
                          className="form-control"
                          id="message"
                          cols="30"
                          rows="6"
                          required
                          placeholder="Your Message"
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                        ></textarea>
                        {errorMessage ? (
                          <p className="error-text">{errorMessage}</p>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
