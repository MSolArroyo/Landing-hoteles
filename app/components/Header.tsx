import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">Hotel Paraíso</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-gray-600 hover:text-gray-800">Servicios</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-800">Sobre Nosotros</Link>
          <Link href="#rooms" className="text-gray-600 hover:text-gray-800">Habitaciones</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contacto</Link>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  )
}

