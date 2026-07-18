import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VineRail from './components/VineRail'
import About from './components/About'
import SectionDivider from './components/SectionDivider'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper">
      <VineRail />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Services />
        <Gallery />
        <SectionDivider flip />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
