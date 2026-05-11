import './App.css'
import Nav from './components/layout/Nav'
import Hero from './sections/Hero'
import WhoWeAre from './sections/WhoWeAre'
import Carousel from './components/ui/Carousel'
import WhatWeDo from './sections/WhatWeDo'
import CTA from './sections/CTA'
import Footer from './components/layout/Footer'





function App() {
  

  return (
    <>
    <div className='app-wrapper'>
      <Nav />
      <Hero />
      <WhoWeAre />
      <Carousel />
      <WhatWeDo />
      <CTA />
      <Footer />
    </div>
    
      
    </>
  )
}

export default App
