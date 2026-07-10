
import {memo} from 'react'
 import Hero from  '../components/Hero'
 import About from '../components/About'
  import Projects from '../components/Projects'
    import Skills from '../components/Skills'
    import Work from '../components/Work'
   import Contacts from '../components/Contacts'
import Footer from '../components/Footer'

 export const metadata = {
  title:"my portfolio md sahil ",
  description:"creata a website and using react.js and tailwind.css",
 }


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

export default memo(Home)
