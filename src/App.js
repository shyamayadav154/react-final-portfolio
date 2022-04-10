import './App.scss'
import About from './components/about/about.compoent.jsx'
import Footer from './components/footer/footer.component.jsx'
import Hero from './components/hero/hero.component.jsx'
import Navbar from './components/navbar/navbar.component.jsx'
import Projects from './components/projects/project.component.jsx'
import Contacts from './components/Contacts/contact.component.jsx'

import { Helmet } from 'react-helmet'



function App() {
  



  return (
    <>
    <Helmet>
      <link rel="icon" href="../public/favicon.ico" type="image/x-icon" />
    </Helmet>
      <div className='app' >
   
        <Navbar />

        <Hero />
        <About />
        <Projects />
        <Contacts />

        <Footer />
      </div>
    </>
  )
}

export default App
