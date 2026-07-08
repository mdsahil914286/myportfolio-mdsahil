import React from 'react'
import { motion } from 'framer-motion'
import { MoveUp } from 'lucide-react';


function Footer() {
  return (
    
          <motion.div
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.6, ease:'ease-out'}}
          viewport={{once: true}}
          id = 'Footer'
    className='  bg-dark-200'
          >
      <header className='bg-dark-200 py-4 '>
        <div className='container mx-auto px-6 flex flex-row justify-between gap-8'>

          
          <p className='text-gray-400 text-center flex-1'>© 2023 My Portfolio. All rights reserved.</p>

        
            <button className='px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  rounded-lg text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg'>
            <a href='#Home'> <MoveUp />  </a>
          </button>
          
          
        </div>
      </header>
    </motion.div>
  )
}


export default Footer
