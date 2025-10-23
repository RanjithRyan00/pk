import './App.css'
import { Contact } from './Components/Contact'
import { Footer } from './Components/Footer'
import { Gallery } from './Components/Gallery'
import { Hero } from './components/Hero'
import { Navbar } from './Components/Navbar'
import { Services } from './Components/Services'
import { Testimonials } from './Components/Testimonials'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
