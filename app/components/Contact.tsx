import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#333]">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#333]">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center text-blue-950">
                <Phone className="h-6 w-6 text-blue-900 mr-2" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center text-blue-950">
                <Mail className="h-6 w-6 text-blue-900 mr-2" />
                <span>info@hotel.com</span>
              </div>
              <div className="flex items-center text-blue-950">
                <MapPin className="h-6 w-6 text-blue-900 mr-2" />
                <span>123 Calle Principal, Ciudad, País</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

