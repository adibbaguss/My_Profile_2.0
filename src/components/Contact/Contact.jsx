import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import DescriptionAlerts from '../Alert/DescriptionAlerts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  const form = useRef(null);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ status: '', message: '' });

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    const newErrors = {};

    // Validate Name
    if (!name || name.trim() === '') {
      newErrors.name = 'Name is required';
    } else if (name.length > 50) {
      newErrors.name = 'Name must be 50 characters or less';
    }

    // Validate Email
    if (!email || email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    // Validate Message
    if (!message || message.trim() === '') {
      newErrors.message = 'Message is required';
    } else if (message.length > 1000) {
      newErrors.message = 'Message must be 1000 characters or less';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (form.current) {
        emailjs.sendForm('service_chl4o4h', 'template_9jwfhz2', form.current, 'kzYq9VmLtCrDA1r_3').then(
          () => {
            setAlert({ status: 'success', message: 'Your email has been sent successfully. Please check your inbox for my response' });
            form.current.reset();
            setTimeout(() => {
              setAlert({ status: '', message: '' });
            }, 10000);
          },
          (error) => {
            setAlert({ status: 'error', message: 'Failed to send email. Please try again later.' });
            setTimeout(() => {
              setAlert({ status: '', message: '' });
            }, 3000);
          }
        );
      } else {
        console.error('Form reference is null');
      }
    }
  };

  return (
    <section className="bg-primary-color text-secondary-color p-6 overflow-hidden relative">
      <h1 className="font-bold text-1xl sm:text-2xl md:text-3xl lg:text-3xl mb-10 text-secondary-color text-center">Contact Me</h1>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className=" flex flex-col items-center md:items-start px-10 text-white">
          <p className="mb-6 text-sm md:text-base">Contact me if you have questions, feedback, or collaboration opportunities. I'd love to hear your thoughts!</p>
          <div className="hidden md:block">
            <div className="mt-4 flex items-center">
              <i className="fas fa-envelope mr-2"></i>
              <span>
                Email: <a href="mailto:adibbagus42@gmail.com">adibbagus42@gmail.com</a>
              </span>
            </div>
            <div className="mt-2 flex items-center">
              <i className="fas fa-user mr-2"></i>
              <span>Name: Adib Bagus Sudiyono</span>
            </div>
            <div className="mt-2 flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>Location: Batang, Central Java, Indonesia</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md md:w-1/2 mx-auto mt-8 md:mt-0 relative z-10">
          <motion.form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow-lg p-8" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4">
              <label className="block text-primary-color mb-2">
                Name<span className="text-red">*</span>
              </label>
              <input autocomplete="given-name" type="text" name="user_name" className="text-primary-color w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green" />
              {errors.name && <p className="text-red text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-primary-color mb-2">
                Email<span className="text-red">*</span>
              </label>
              <input autocomplete="email" type="email" name="user_email" className="text-primary-color w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green" />
              {errors.email && <p className="text-red text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-primary-color mb-2">
                Message<span className="text-red">*</span>
              </label>
              <textarea name="message" className="text-primary-color w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green h-32" />
              {errors.message && <p className="text-red text-xs mt-1">{errors.message}</p>}
            </div>
            <motion.button
              type="submit"
              className="w-full border border-2 border-solid border-green text-green py-2 rounded-md cursor-pointer transition-colors hover:bg-green hover:text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
            >
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </motion.button>
          </motion.form>
          <DescriptionAlerts className="my-4 mx-0" status={alert.status} message={alert.message} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
