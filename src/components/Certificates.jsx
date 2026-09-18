// import React from 'react'
// import { motion } from 'framer-motion'
//    import TiltedCard from './TiltedCard';
//    import certificates from '../components/images/certificates.png'
//   import Particles from './Particles';


// function Certificates() {
//   return (
//      <div>
      
//      </div>

//       <motion.div
//    initial={{opacity:0, y:50}}
//    whileInView={{opacity:1, y:0}}
//    transition={{duration: 0.9, ease:'ease-out'}}
//    viewport={{once: false, amount:0.2}}
//    id='Contacts'
//    className='py-20 bg-dark-200'
//    >
//  <div className='container mx-auto px-6'>
//           <h2 className='text-3xl font-bold text-white mb-10 text-center '>my 
//             <span className='text-purple-500'> Certificates</span></h2>
//             <p className='text-gray-400 text-center mb-10 max-w-2xl mx-auto '>Continuous learning validated through certificates from industry-recognized 
//                 platforms and competitions
//             </p>
//             {/* import TiltedCard from './TiltedCard'; */}

// <TiltedCard
// //   imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
//   imageSrc={certificates}
//   altText="Kendrick Lamar - GNX Album Cover"
//   captionText="physics wallah"
//   containerHeight="300px"
//   containerWidth="300px"
//   imageHeight="300px"
//   imageWidth="300px"
//   rotateAmplitude={12}
//   scaleOnHover={1.05}
//   showMobileWarning={false}
//   showTooltip
//   displayOverlayContent
//   overlayContent={
//     <p className="tilted-card-demo-text">
//       physics wallah 
//     </p>
//   }
// />
//             </div>
 

// <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//   <Particles
//     particleColors={["#ffffff"]}
//     particleCount={200}
//     particleSpread={10}
//     speed={0.1}
//     particleBaseSize={100}
//     moveParticlesOnHover
//     alphaParticles={false}
//     disableRotation={false}
//     pixelRatio={1}
// />
// </div>
//   )
// }

// export default Certificates



import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "./TiltedCard";
import Particles from "./Particles";
import certificates from "../components/images/certificates.png";

function Certificates() {
  return (
    <motion.section
      id="Certificates"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "ease-out" }}
      viewport={{ once: false, amount: 0.2 }}
      className="relative min-h-screen overflow-hidden bg-dark-200 py-20"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-6">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          My{" "}
          <span className="text-purple-500">
            Certificates
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">
          Continuous learning validated through certificates from
          industry-recognized platforms and competitions.
        </p>

        {/* Certificate Card */}

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

 <TiltedCard
            imageSrc={certificates}
            altText="Physics Wallah Certificate"
            captionText="Physics Wallah"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                Physics Wallah
              </p>
            }
          />
           <TiltedCard
            imageSrc={certificates}
            altText="Physics Wallah Certificate"
            captionText="Physics Wallah"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                Physics Wallah
              </p>
            }
          />
           <TiltedCard
            imageSrc={certificates}
            altText="Physics Wallah Certificate"
            captionText="Physics Wallah"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                Physics Wallah
              </p>
            }
          />

        </div>
        {/* <div className="flex flex-col justify-center">
          <TiltedCard
            imageSrc={certificates}
            altText="Physics Wallah Certificate"
            captionText="Physics Wallah"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                Physics Wallah
              </p>
            }
          />
        </div> */}
         {/* <div className="flex justify-center">
          <TiltedCard
            imageSrc={certificates}
            altText="Physics Wallah Certificate"
            captionText="Physics Wallah"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                Physics Wallah
              </p>
            }
          />
        </div> */}
         {/* <div className="flex justify-center">
          <TiltedCard
            imageSrc={certificates}
            altText="Physics Wallah Certificate"
            captionText="Physics Wallah"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
            overlayContent={
              <p className="tilted-card-demo-text">
                Physics Wallah
              </p>
            }
          />
        </div> */}
      </div>
    </motion.section>
  );
}

export default Certificates;
