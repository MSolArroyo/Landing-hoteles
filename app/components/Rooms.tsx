import Image from 'next/image'

const rooms = [
  { name: 'Habitación Estándar', price: '100', image: '/rooms/standar.jpeg' },
  { name: 'Suite Junior', price: '150', image: '/rooms/suitejunior.jpg' },
  { name: 'Suite Ejecutiva', price: '200', image: '/rooms/suiteejecutiva.jpg' },
]

export default function Rooms() {
  return (
    <section id="rooms" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#333]">Nuestras Habitaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={room.image}
                alt={room.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">Desde ${room.price} por noche</p>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-900 transition duration-300">
                  Reservar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

