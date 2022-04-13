import './App.scss'
import About from './components/about/about.compoent.jsx'
import Footer from './components/footer/footer.component.jsx'
import Hero from './components/hero/hero.component.jsx'
import Navbar from './components/navbar/navbar.component.jsx'
import Projects from './components/projects/project.component.jsx'
import Contacts from './components/Contacts/contact.component.jsx'
import LocomotiveScroll from 'locomotive-scroll'
import { Helmet } from 'react-helmet'
import { useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'




function App() {
  
const containerRef = useRef(null)



// useEffect(()=>{

//   if(ref){
//  new LocomotiveScroll({
//    el: ref.current,
//    smooth: true,
//    multiplier:0.8,
//    initPosition:{x:0,y:0},
//   initClass:"has-scroll-init",
//   scrollFromAnywhere:true,
//   resetNativeScroll:true,
//   repeat:true
//  })
//   }
 
// })


  return (
    <>
      <Helmet>
        <link rel='icon' href='../public/favicon.ico' type='image/x-icon' />
      </Helmet>
      <LocomotiveScrollProvider
      options={{
        smooth:true,
        multiplier:1.2,
      

      }}
      containerRef={containerRef}
      >
        <div data-scroll-container ref={containerRef} className='app'>
          <Navbar />

          <Hero />
          <About />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}

export default App
