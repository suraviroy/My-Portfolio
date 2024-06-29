import React, { useState } from 'react';
import './ContactForm.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      emailjs
        .sendForm(
          "service_ven908u",
          "template_fr114hf",
          e.target,
          "cBhrSh9yaLNee1JK-"
        )
        .then((res) => {
          console.log(res);
          toast.success("Email sent successfully!");
          setLoading(false);  // Stop loading when the email is sent successfully
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to send email.");
          setLoading(false);  // Stop loading if there is an error
        });
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
      <div className="contact-circle"></div>
      <div className="form-container" data-aos="fade-left" data-aos-delay='200'>
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
          <button type="submit" className="send-button" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Send'}
          </button>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" 
      />
    </div>
  );
}

export default ContactForm;
