
import React from 'react'
 import Hero from  '../components/Hero'
 import About from '../components/About'
  import Projects from '../components/Projects'
    import Skills from '../components/Skills'
    import Work from '../components/Work'
   import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

 



const Home = () => {
  return (
    <div>
        <Hero/>  
        <About/>
         <Skills/> 
        <Projects/>
        <Work/>
         <Contacts/> 
         <Footer/>
        
      
    </div>
  )
}

export default Home
