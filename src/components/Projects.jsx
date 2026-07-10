// import React from 'react'
// import { motion } from 'framer-motion'
// import project1 from '../components/images/project1.png'
// import project2 from '../components/images/project2.png'
// import project3 from '../components/images/project3.png'
// import { FaLinkedinIn,FaGithub } from "react-icons/fa6";



// function Project() {
//   return (
//     <motion.div
//     initial={{opacity:0, y:50}}
//     whileInView={{opacity:1, y:0}}
//     transition={{duration: 0.9, ease:'ease-out'}}
//     viewport={{once: false, amount:0.2}}
//     id='Projects'
//     className='py-20 bg-dark-200'
//     >
//        <div className='container mx-auto px-6'>
//         <h2 className='text-3xl  font-bold flex justify-center mb-12 gap-3'>My
//            <span className='font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'> Projects</span>
//         </h2>
//         <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//               <motion.div
//                   initial={{ opacity: 0, x: 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: false, amount: 0.2 }}
//                   transition={{ duration: 0.7, delay: 0.4 }}
//                   whileHover={{ scale: 1.05, y: -8 }}
//                    className="bg-gray-800 rounded-2xl p-6 shadow-lg"
//                 >   <div className='bg-dark-300 p-6 rounded-lg  shadow-lg bg-card border border-white/6 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2'>
//             <img src={project1} alt='Project 1' className='mb-4 rounded-lg' />
//             <h3 className='text-xl font-semibold text-white mb-4 hover:text-blue-400'>React Memory Quiz</h3>
//             <p className='text-gray-400'>A fun and interactive memory game built with React interaction memory quiz game with satisfying gameplay.</p>
//             <div className=' flex '>
//       <button className=' bg-dark-300 flex  gap-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
//              <FaLinkedinIn   className='w-5 h-5'/> live demo
//             </button>
//             <button className=' bg-dark-300 flex  gap-1 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 '>
//               <FaGithub   className='w-5 h-5'/> source code
//             </button>
//             </div>
          
//           </div>

//                 </motion.div>
        

//              <motion.div
//                   initial={{ opacity: 0, y: -100 }}
//                   whileInView={{ opacity: 1, y:0}}
//                   viewport={{ once: false, amount: 0.2 }}
//                   transition={{ duration: 0.7, delay: 0.2 }}
//                   whileHover={{ scale: 1.05, y: -8 }}
//                  className="bg-gray-800 rounded-2xl p-6 shadow-lg"
//                 >
//     <div className='bg-dark-300 p-6 rounded-lg shadow-lg   bg-card border border-white/6 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 '>
//              <img src={project3} alt='Project 3' className='mb-4 rounded-lg' /> 
//             <h3 className='text-xl font-semibold text-white mb-4 hover:text-blue-400 '>Face Detective</h3>
//             <p className='text-gray-400 pb-4'>Real-time face detection and recognition application using webcam streaming Accurately identifies 
// and tracks faces in live video feeds, providing instant feedback and analysis.
//             </p>
//                 <div className=' flex '>
//       <button className=' bg-dark-300 flex  gap-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
//              <FaLinkedinIn   className='w-5 h-5'/> live demo
//             </button>
//             <button className=' bg-dark-300 flex  gap-1 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 '>
//               <FaGithub   className='w-5 h-5'/> source code
//             </button>
//             </div>
         

//           </div>

//                 </motion.div>


//             <motion.div
//                   initial={{ opacity: 0, x: -100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: false, amount: 0.2 }}
//                   transition={{ duration: 0.7 }}
//                   whileHover={{ scale: 1.05, y: -8 }}
//                   className="bg-gray-800 rounded-2xl p-6 shadow-lg"
//                 >



//       <div className='bg-dark-300 p-6 rounded-lg shadow-lg bg-card border border-white/6 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2'>
//              <img src={project2} alt='Project 2' className='mb-4 rounded-lg' /> 
//             <h3 className='text-xl font-semibold text-white mb-4 hover:text-blue-400 '>Face Detective</h3>
//             <p className='text-gray-400 pb-4'>Real-time face detection and recognition application using webcam streaming Accurately identifies 
// and tracks faces in live video feeds, providing instant feedback and analysis.
//             </p>
//                 <div className=' flex '>
//       <button className=' bg-dark-300 flex  gap-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
//              <FaLinkedinIn   className='w-5 h-5'/> live demo
//             </button>
//             <button className=' bg-dark-300 flex  gap-1 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2 '>
//               <FaGithub   className='w-5 h-5'/> source code
//             </button>
//             </div>
          

//           </div>
//                 </motion.div>
       

        

//         </div>

//        </div>

        
            

              

//     </motion.div>
//   )
// }

// export default Project



import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

import project1 from "../components/images/project1.png";
import project2 from "../components/images/project2.png";
import project3 from "../components/images/project3.png";

const projects = [
  {
    id: 1,
    title: "React Memory Quiz",
    image: project1,
    description:
      "A fun and interactive memory game built with React featuring responsive gameplay and smooth animations.",
    live: "https://choosecardgame.netlify.app/",
    github: "https://github.com/mdsahil914286/react-memory-Quiz",
  },
  {
    id: 2,
    title: "Face Detective",
    image: project2,
    description:
      "Real-time face detection and recognition application using webcam streaming with instant feedback.",
    live: "http://localhost:5174/",
    github: "https://github.com/mdsahil914286/face-dectative_object.app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: project3,
    description:
      "Modern responsive portfolio built with React, Tailwind CSS and Framer Motion animations.",
    live: "https://myportfolio-mdshahil.netlify.app/",
    github: "https://github.com/mdsahil914286/myportfolio-mdsahil",
  },
 
];

function Project() {
  return (
    <motion.section
      id="Projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-16 lg:py-20 bg-dark-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-500 flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 sm:h-56 lg:h-60 object-cover"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold  mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-400 flex-1">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full"
                  >
                    <FaLinkedinIn />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition w-full"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Project;
