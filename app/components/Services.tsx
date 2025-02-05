import { Wifi, Coffee, Utensils, Car } from 'lucide-react'

const services = [
  { icon: Wifi, title: 'Wi-Fi Gratis', description: 'Conexión de alta velocidad en todas las áreas' },
  { icon: Coffee, title: 'Desayuno Incluido', description: 'Buffet completo todas las mañanas' },
  { icon: Utensils, title: 'Restaurante', description: 'Cocina local e internacional' },
  { icon: Car, title: 'Estacionamiento', description: 'Estacionamiento gratuito para huéspedes' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#333] mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <service.icon className="h-12 w-12 text-blue-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#333]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

