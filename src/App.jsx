import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import WhySnakeByte from './components/WhySnakeByte'
import Pricing      from './components/Pricing'
import Process      from './components/Process'
import References   from './components/References'
import FAQ          from './components/FAQ'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhySnakeByte />
        <References />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
