import './App.scss'
import About from './components/about/about.compoent.jsx'
import Footer from './components/footer/footer.component.jsx'
import Hero from './components/hero/hero.component.jsx'
import Navbar from './components/navbar/navbar.component.jsx'
import Projects from './components/projects/project.component.jsx'
import { useRef, useEffect } from 'react'
import locomotiveScroll from 'locomotive-scroll'
import { Routes, Route } from 'react-router-dom'

import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import Contact from './components/contact/contact.component'
import Contacts from './components/Contacts/contact.component'

function App() {
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      new locomotiveScroll({
        el: ref.current,
        smooth: true,
        multiplier: 1.2,
        initClass:'has-scroll-init'
      })
    }
  }, [])

  return (
    <>
      <div className='app' data-scroll-container ref={ref}>
      
        <Navbar />

        <Hero />
        <About />
        <Projects />
        <Contacts/>
   
        <Footer />
      </div>
    </>
  )
}

export default App
