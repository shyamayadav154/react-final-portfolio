import './App.scss'
import About from './components/about/about.compoent.jsx'
import Footer from './components/footer/footer.component.jsx'
import Hero from './components/hero/hero.component.jsx'
import Navbar from './components/navbar/navbar.component.jsx'
import Projects from './components/projects/project.component.jsx'
import { useRef,useEffect } from 'react'

import LocomotiveScroll from 'locomotive-scroll'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'


function App() {
  const ref = useRef(null)

useEffect(() => {
  if(ref){
    new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      multiplier: 1,

     smoothClass:"has-scroll-smooth",
     scrollingClass:"has-scroll-scrolling"
     
    })
  }


}, [])


  return (
    <>
      <div data-scroll-container ref={ref} >
      <Navbar />
        <Hero/>
        <About  />
        <Projects  />
      <Footer />
      </div>
    </>
  )
}

export default App
