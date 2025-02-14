import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  useEffect(()=>{
    Aos.init({
      duration:1000,
    })

  },[])


  return (
    <main className='bg-gray-950'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
