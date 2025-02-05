import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Rooms from './components/Rooms'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaWhatsapp } from "react-icons/fa";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <Hero />
      <Services />
      <About />
      <Rooms />
      <Contact />
      <Footer />
      <div className=' bottom-12 right-10 text-4xl text-white fixed animate-bounce bg-green-500 rounded-full p-2'>
      <FaWhatsapp />
      </div>
    </div>
  )
}

