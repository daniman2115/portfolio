import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MobileShowcase from './components/MobileShowcase'
import Projects from './components/Projects'
import ArchitectureSkills from './components/ArchitectureSkills'
import ExperienceSection from './components/ExperienceSection'
import ProcessWorkflow from './components/ProcessWorkflow'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#06060c] text-gray-100 min-h-screen font-sans selection:bg-violet-500/30 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        {/* <MobileShowcase /> */}
        <Projects />
        <ArchitectureSkills />
        <ExperienceSection />
        <ProcessWorkflow />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
