import React from 'react'
import { motion } from 'framer-motion'
import { MoveUp } from 'lucide-react';


function Footer() {
  return (
    
          <motion.div
          initial={{opacity:0, y:60}}
          whileInView={{opacity:1, y:0}}
          transition={{duration: 0.6, ease:'ease-out'}}
          viewport={{once: false, amount:0.2}}
          id = 'Footer'
    className='bg-transparent'
          >
      <header className='bg-transparent py-4 '>
        <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 sm:text-base'>

          
          <p className='text-gray-400 text-center flex-1'>© 2023 My Portfolio <span className='font-bold text-amber-50'>Md Sahil</span>. All rights reserved.</p>

        
            <a href='#Home' aria-label='Back to top' className='rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105'>
              <MoveUp aria-hidden='true' />
            </a>
          
          
        </div>
      </header>
    </motion.div>
  )
}


export default Footer
