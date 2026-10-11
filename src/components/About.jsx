import React from 'react'
import { motion } from 'framer-motion'
import bigimage2 from '../components/images/bigimage2.png'

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'ease-out' }}
      viewport={{ once: false, amount: 0.2 }}
      id='About'
      className='relative overflow-hidden bg-transparent py-20 text-white'
    >
      <div className='container relative z-10 mx-auto px-6'>
        <h2 className='mb-4 text-center text-3xl font-bold md:text-5xl'>
          About
          <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Me
          </span>
        </h2>
        <p className='mx-auto mb-16 max-w-2xl text-center text-gray-400'>
          Get to know me better! I'm a passionate web developer with a knack for creating stunning and functional
          websites.
        </p>

        <div className='flex flex-col items-center gap-10 md:flex-row md:gap-16'>
          <div className='w-full overflow-hidden rounded-2xl md:w-1/2'>
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: 'ease-out' }}
              viewport={{ once: false, amount: 0.2 }}
              className='mx-auto aspect-square w-full max-w-[500px] rounded-2xl object-cover shadow-lg'
              src={bigimage2}
              alt='About me'
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'ease-out' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'
          >
            <div className='rounded-2xl p-8'>
              <h3>My Journey</h3>
              <p className='text-gray-400'>
                I've been passionate about web development for several years now. My journey began with learning the
                fundamentals of HTML and CSS, and I've since expanded my skills to include JavaScript and modern
                frameworks like React.
              </p>
              <p className='mt-4 text-gray-400'>
                Along the way, I've worked on various projects, from simple landing pages to complex web applications.
                Each project has been a learning experience, allowing me to grow as a developer and refine my skills.
              </p>
              <p className='mt-4 text-gray-400'>
                I'm excited to continue this journey, exploring new technologies and taking on new challenges in the
                world of web development. Let's connect and see how we can collaborate on future projects!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
