import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[80vh]">
      <Image
        // src="/placeholder.svg?height=800&width=1200"
        src="/bg.jpg"
        alt="Hotel Paraíso"
        fill
        // objectFit="cover"
        style={{ objectFit: "cover" }}
        className="brightness-50"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a Hotel Paraíso</h1>
        <p className="text-xl md:text-2xl mb-8">Tu escape perfecto te espera</p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Reserva Ahora
        </button>
      </div>
    </section>
  )
}

