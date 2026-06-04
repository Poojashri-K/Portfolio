import React from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.target,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(() => {
      alert('Message Sent Successfully!');
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
      alert('Failed to send message');
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-dark-100'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get In <span className='text-purple'>Touch</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Let’s connect and discuss opportunities, ideas, or collaborations
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

          {/* Contact Form */}
          <div>
            <form onSubmit={sendEmail} className='space-y-6'>

              <div>
                <label htmlFor="name" className='block text-gray-300 mb-2'>
                  Your Name
                </label>
                <input
                  name="user_name"
                  className='w-full bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none'
                  type="text"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-gray-300 mb-2'>
                  Email Address
                </label>
                <input
                  name="user_email"
                  className='w-full bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none'
                  type="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2'>
                  Your Message
                </label>
                <textarea
                  name="message"
                  className='w-full h-40 bg-dark-300 border-dark-400 rounded-lg px-4 py-3 outline-none'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'
              >
                Send
              </button>

            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400'>Chennai, India</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400'>poojashri.k2006@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='text-purple text-2xl mr-4'>
                <FaPhone />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400'>+91 9345986697</p>
              </div>
            </div>

            <div className='pt-4'>
              <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>

              <div className='flex space-x-4'>
                <a href="#https://github.com/Poojashri-K" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                  <FaGithub />
                </a>

                <a href="#https://www.linkedin.com/in/pooja-shri-k/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                  <FaLinkedin />
                </a>

                <a href="#https://leetcode.com/u/Pooja_shri_K/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                  <SiLeetcode />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact