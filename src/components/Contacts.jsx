import React from 'react'
import { motion } from 'framer-motion'

const Contacts = () => {
  return (
   <motion.div
   initial={{opacity:0, y:50}}
   whileInView={{opacity:1, y:0}}
   transition={{duration: 0.9, ease:'easeout'}}
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

            <form action="https://formspree.io/f/mayvlgqj" method="POST" className='flex flex-col gap-4'>
              <input type="text" name='name' placeholder='Your Name' className='w-full px-4 py-2 rounded-lg bg-dark-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500' required />
              <input type="email" name='email' placeholder='Your Email' className='w-full px-4 py-2 rounded-lg bg-dark-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500' required />
              <input type="number" name='number' placeholder='Your Number' className='w-full px-4 py-2 rounded-lg bg-dark-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500' required />  
              <textarea name='message' placeholder='Your Message' rows="5" className='w-full px-4 py-2 rounded-lg bg-dark-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-500' required></textarea>
              <button type='submit' className='px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition duration-300'>Send Message</button>

            </form>
             <div className='space-y-8'>
            <h3 className='text-xl font-semibold text-white'>Email</h3>
            <p className='text-gray-400'>smd882781@gmail.com</p>
            <h3 className='text-xl font-semibold text-white'>Phone</h3>
            <p className='text-gray-400'>+91 9142869435</p>
            <h3 className='text-xl font-semibold text-white'>Address</h3>
            <p className='text-gray-400'>patna, India</p>
          
            </div>

          </div>
          
    
        </div>
   </motion.div>
  )
}

export default Contacts
