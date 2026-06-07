import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Impact from './components/Impact'
import About from './components/About'
import WhatWeProvide from './components/WhatWeProvide'
import Gallery from './components/Gallery'
import Donate from './components/Donate'
import GetInvolved from './components/GetInvolved'
import Contact from './components/Contact'
import DonateFab from './components/DonateFab'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Impact />
      <About />
      <WhatWeProvide />
      <Gallery />
      <Donate />
      <GetInvolved />
      <Contact />
      <DonateFab />
    </div>
  )
}

export default App
