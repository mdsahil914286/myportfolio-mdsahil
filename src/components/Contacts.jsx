import React from 'react'
import { motion } from 'framer-motion'
import { Send,MapPin,Phone,Mail,Globe } from 'lucide-react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

import { FaLinkedinIn,FaGithub } from "react-icons/fa6";
// import { MapPin } from 'lucide-react';
// import { Phone } from 'lucide-react';





const Contacts = () => {
  const form = useRef();


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_wxdackp', 'template_harczsv', form.current, 'user_fX8UZpVOm-EMmSJt2')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wxdackp",
        "template_harczsv",
        form.current,
        "fX8UZpVOm-EMmSJt2"
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message.");
        console.log(error);
      });
  };


  return (
    <motion.div
   initial={{opacity:0, y:50}}
   whileInView={{opacity:1, y:0}}
   transition={{duration: 0.9, ease:'ease-out'}}
   viewport={{once: false, amount:0.2}}
   id='Contacts'
   className='py-20 bg-dark-200'
   >
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-white mb-10 text-center '>Get In   
            <span className='text-purple-500'> Touch</span></h2>
            <p className='text-gray-400 text-center mb-10 max-w-2xl mx-auto '>Have a question or want to work together? Feel free to reach out!</p>
            {/* contact form */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto'>

            <form ref={form} onSubmit={sendEmail}  action="https://formspree.io/f/mayvlgqj" method="POST" className='flex flex-col gap-4'>
              <input type="text" name='name' placeholder='Your Name' className='w-full px-4 py-2 rounded-lg bg-dark-300 
               
               border-2
                border-transparent
                 outline-none 
                 transition-all
    duration-300
    hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer ' required />
              <input type="email" name='email' placeholder='Your Email' className='w-full px-4 py-2 rounded-lg bg-dark-300     
               border-2
                border-transparent
                 outline-none 
                 transition-all
    duration-300
    hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer ' required />
              <input type="number" name='number' placeholder='Your Number' className='w-full px-4 py-2 rounded-lg bg-dark-300      
               border-2
                border-transparent
                 outline-none 
                 transition-all
    duration-300
    hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer' required />  
              <textarea name='message' placeholder='Your Message' rows="5" className='w-full px-4 py-2 rounded-lg bg-dark-300    
               border-2
                border-transparent
                 outline-none 
                 transition-all
    duration-300
    hover:border-cyan-400
    focus:border-transparent
    focus:ring-2
    focus:ring-cyan-400
    focus:ring-offset-2
    focus:ring-offset-gray-900
    caret-cyan-400 cursor-pointer' required></textarea>
              <button type='submit' className='
              relative flex items-center justify-center overflow-hidden px-6 py-3 m-4  rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 font-semibold transition duration-300 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 active:scale-95'><Send className="mr-2" />      Send Message</button>

            </form>
             <div className='space-y-8'>
            <h3 className='text-xl font-semibold text-white flex items-center'>
              <Mail className="mr-2 text-cyan-500 " />Email
            </h3>
            <p className='text-gray-400'>smd882781@gmail.com</p>
            <h3 className='text-xl font-semibold text-white flex items-center'>
              <Phone className="mr-2 text-cyan-500 " />Phone
            </h3>
            <p className='text-gray-400'>+91 9142869435</p>
            <h3 className='text-xl font-semibold text-white flex items-center'>
              <MapPin className="mr-2 text-cyan-500" />Address
              </h3>
            <p className='text-gray-400'>patna, India</p>
            <h3 className='text-xl font-semibold  flex items-center '>
              <Globe className="mr-2 text-cyan-500" />Social Links
            </h3>
            <div className='flex items-center gap-4'>
  <button onClick={() => window.open("https://www.linkedin.com/feed/","_blank")} className='text-gray-400 hover:text-cyan-500 transition duration-300 cursor-pointer '> <FaLinkedinIn   className='w-6 h-6'/></button>
 <button onClick={() => window.open("https://github.com/mdsahil914286","_blank")} className='text-gray-400 hover:text-cyan-500 transition duration-300 cursor-pointer' > <FaGithub   className='w-6 h-6'/></button>
 {/* <button onClick={() => window.open(" http://mailto:smd882781@gmail.com","_blank")} className='text-gray-400 hover:text-cyan-500 transition duration-300 cursor-pointer' > <Mail   className='w-6 h-6'/></button> */}

            </div>
      
              
          
          
          </div>
          
            

          </div>
          
    
        </div>
    </motion.div>
  
  )
}

export default Contacts
