
import React from 'react'
 import Hero from  '../components/Hero'
 import About from '../components/About'
  import Projects from '../components/Projects'
    import Skills from '../components/Skills'
   import Contacts from '../components/Contacts'
 



const Home = () => {
  return (
    <div>
        <Hero/>  
        <About/>
         <Skills/> 
        <Projects/>
        
         <Contacts/> 
        
      
    </div>
  )
}

export default Home
