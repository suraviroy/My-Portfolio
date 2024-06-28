import React, { useState } from 'react';
import './ContactForm.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log('Form submitted successfully:', formData);
      // Add your form submission logic here
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  React.useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className="contact-container">
      <div className="contact-circle" ></div>
      <div className="form-container" data-aos="fade-left" data-aos-delay= '200'>
        <h2>GET IN TOUCH</h2>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`input-field ${errors.name ? 'error' : ''}`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">This field is required</span>}
          <input
            type="email"
            name="email"
            placeholder="Your Email Id"
            className={`input-field ${errors.email ? 'error' : ''}`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">This field is required</span>}
          <textarea
            name="message"
            placeholder="Your Message ..."
            className={`message-field ${errors.message ? 'error' : ''}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error-message">This field is required</span>}
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
     
    </div>
  );
}

export default ContactForm;
