import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#05050a] text-gray-100 min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
