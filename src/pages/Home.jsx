
// import react from 'react'
//  import Hero from  '../components/Hero'
//  import About from '../components/About'
//   import Projects from '../components/Projects'
//     import Skills from '../components/Skills'
//     import Work from '../components/Work'
//     import Certificates from '../components/Certificates'
//    import Contacts from '../components/Contacts'
// import Footer from '../components/Footer'
// // import Certificates from '../components/Certificates'


 


// const Home = () => {
//   return (
//     <div>
//         <Hero />  
//         <About />
//          <Skills /> 
//         <Projects />
//         <Work />
//         <Certificates />
//          <Contacts /> 
//          <Footer />
        
      
//     </div>
//   )
// }

// export default Home




import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Work from "../components/Work";
import Certificates from "../components/Certificates";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Certificates />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
