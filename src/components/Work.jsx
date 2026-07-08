import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles,GraduationCap,Rocket,CodeXml  } from 'lucide-react';


function Work() {
  return (
    



<motion.section
  id="experience"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.2 }}
  className="py-20 bg-dark-200"
>
  <div className="container mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-white mb-4">
    Development
      <span className="ml-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Journey
      </span>
    </h2>

    <p className="text-center text-gray-400 mb-14">
      From writing my first line of HTML to building Full-Stack applications, my journey in web development has been a thrilling adventure. I've had the privilege of working on diverse projects, each contributing to my growth as a developer. From crafting responsive websites to implementing complex functionalities, I've honed my skills and embraced challenges along the way. 
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Card 1 */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.05, y: -8 }}
        
      >
      
        <span className=" text-md flex justify-center mb-5">
        <GraduationCap className='w-15 h-15 p-2 flex flex-col justify-center items-center align-center bg-gradient-to-r from-green-400 to-blue-500 border rounded-md'/>

        </span>

        
        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-md flex justify-center">2023 - 2024</span>
        <h3 className="text-2xl font-semibold ">
          The Beginning of My Journey
        </h3>

        <p className="text-gray-400 mt-2">
         <Sparkles className="inline-block  text-blue-500 mr-2" /> Started BCA Program.
        </p>
         <p className="text-gray-400 mt-2">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Learned C Language fundamentals.
        </p>
         <p className="text-gray-400 mt-2">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Learned HTML, CSS, and fundamentals.
        </p>
         <p className="text-gray-400 mt-2">
           <Sparkles className="inline-block  text-blue-500 mr-2" /> Built first landing page.
        </p>
         <p className="text-gray-400 mt-2 flex items-center">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Discovered passion for web development.
        </p>

      
      </motion.div>

      {/* Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.05, y: -8 }}
      
      >
             <span className=" text-md flex justify-center mb-5">
        <CodeXml   className='w-15 h-15 p-2 flex flex-col justify-center items-center align-center bg-gradient-to-r from-cyan-500 to-indigo-600 border rounded-md'/>

        </span>
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent text-md flex justify-center">2024 - 2025</span>
        <h3 className="text-2xl font-semibold ">
          The Beginning of My Journey
        </h3>

        <p className="text-gray-400 mt-2">
         <Sparkles className="inline-block  text-blue-500 mr-2" /> Started BCA Program.
        </p>
         <p className="text-gray-400 mt-2">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Learned C Language fundamentals.
        </p>
         <p className="text-gray-400 mt-2">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Learned HTML, CSS, and fundamentals.
        </p>
         <p className="text-gray-400 mt-2">
           <Sparkles className="inline-block  text-blue-500 mr-2" /> Built first landing page.
        </p>
         <p className="text-gray-400 mt-2 flex items-center">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Discovered passion for web development.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        whileHover={{ scale: 1.05, y: -8 }}
        // className="bg-gray-800 rounded-2xl p-6 shadow-lg"
      >
             <span className=" text-md flex justify-center mb-5">
        <Rocket className='w-15 h-15 p-2 flex flex-col justify-center items-center align-center bg-gradient-to-r from-gray-500 via-blue-500 to-purple-500  border rounded-md'/>

        </span>
          <span className="bg-gradient-to-r from-blue-500  to-pink-500  bg-clip-text text-transparent text-md flex justify-center">2025 - 2026</span>
        <h3 className="text-2xl font-semibold ">
          The Beginning of My Journey
        </h3>

        <p className="text-gray-400 mt-2">
         <Sparkles className="inline-block  text-blue-500 mr-2" /> Started BCA Program.
        </p>
         <p className="text-gray-400 mt-2">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Learned C Language fundamentals.
        </p>
         <p className="text-gray-400 mt-2">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Learned HTML, CSS, and fundamentals.
        </p>
         <p className="text-gray-400 mt-2">
           <Sparkles className="inline-block  text-blue-500 mr-2" /> Built first landing page.
        </p>
         <p className="text-gray-400 mt-2 flex items-center">
          <Sparkles className="inline-block  text-blue-500 mr-2" />  Discovered passion for web development.
        </p>
      </motion.div>

    </div>
  </div>
</motion.section>


      
    
  )
}

export default Work








// import React from "react";  

// import { motion } from "framer-motion";

// const Work = () => {
//   return (
//     <section className="py-20 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto px-6">

//         <motion.h2
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Education
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-gray-800 rounded-xl p-6 shadow-xl"
//         >
//           <h3 className="text-2xl font-semibold">
//             Bachelor of Computer Applications
//           </h3>

//           <p className="text-gray-400 mt-2">
//             XYZ University
//           </p>

//           <p className="text-blue-400 mt-2">
//             2022 - 2025
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Work;
