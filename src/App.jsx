import './App.css'
import { HeroSection } from './HeroSection'
import {Footer } from './Footer'
import { Nav } from './Nav'
import Skills from './Skills'
import { Contact } from './Contact'

function App() {
  return (
    <div className='bg-indigo-50'>
    <Nav />
    <HeroSection />
    <Skills />
    <Contact />
    <Footer />

    </div>
  )
}

export default App
