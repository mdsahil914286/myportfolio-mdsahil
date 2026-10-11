import React from 'react'
import { motion } from 'framer-motion'
import { Send,MapPin,Phone,Mail,Globe } from 'lucide-react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import GlassNav from './GlassNav'

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
   className='py-20 bg-transparent'
   >
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='text-3xl font-bold text-white mb-10 text-center '>Get In   
            <span className='text-purple-500'> Touch</span></h2>
            <p className='text-gray-400 text-center mb-10 max-w-2xl mx-auto '>Have a question or want to work together? Feel free to reach out!</p>
            {/* contact form */}


              
           <div className='mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-20'>
            <GlassNav radius={24} className='h-full w-full p-6 sm:p-8'>
              <form
                ref={form}
                onSubmit={sendEmail}
                action='https://formspree.io/f/mayvlgqj'
                method='POST'
                className='flex h-full flex-col gap-4'
              >
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  aria-label='Your name'
                  autoComplete='name'
                  className='h-12 w-full rounded-lg border border-white/10 bg-dark-300/70 px-4 text-white placeholder:text-gray-400 outline-none transition-colors hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40'
                  required
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  aria-label='Your email'
                  autoComplete='email'
                  className='h-12 w-full rounded-lg border border-white/10 bg-dark-300/70 px-4 text-white placeholder:text-gray-400 outline-none transition-colors hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40'
                  required
                />
                <input
                  type='tel'
                  name='number'
                  placeholder='Your Number'
                  aria-label='Your phone number'
                  autoComplete='tel'
                  className='h-12 w-full rounded-lg border border-white/10 bg-dark-300/70 px-4 text-white placeholder:text-gray-400 outline-none transition-colors hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40'
                  required
                />
                <textarea
                  name='message'
                  placeholder='Your Message'
                  aria-label='Your message'
                  rows={5}
                  className='min-h-32 w-full resize-y rounded-lg border border-white/10 bg-dark-300/70 px-4 py-3 text-white placeholder:text-gray-400 outline-none transition-colors hover:border-cyan-400/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40'
                  required
                />
                <button
                  type='submit'
                  className='mt-auto flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white transition duration-300 hover:shadow-xl hover:shadow-cyan-500/30 active:scale-[0.98]'
                >
                  <Send className='mr-2' aria-hidden='true' />
                  Send Message
                </button>
              </form>
            </GlassNav>

                    <GlassNav radius={24} className='h-full w-full p-6  sm:p-8'>
             <div className='space-y-8'>
                   {/* <GlassNav radius={24} className='h-full w-full p-6  sm:p-8'> */}
            <h3 className='text-xl font-semibold text-white flex items-center'>
              <Mail className="mr-2 text-cyan-500 " />Email
            </h3>
            <p className='break-all text-gray-400'>smd882781@gmail.com</p>
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
          </GlassNav>
          
            

          </div> 
          
    
        </div>
    </motion.div>
  
  )
}

export default Contacts
