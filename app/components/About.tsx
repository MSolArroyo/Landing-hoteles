import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/bg.jpg"
              alt="Sobre Hotel Paraíso"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-[#333] ">Sobre Hotel Paraíso</h2>
            <p className="text-gray-600 mb-4">
              Hotel Paraíso es un oasis de lujo y confort en el corazón de la ciudad. Con una historia de más de 50 años, 
              nos enorgullecemos de ofrecer a nuestros huéspedes una experiencia inolvidable.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestras instalaciones de primera clase, servicio personalizado y ubicación privilegiada nos convierten 
              en la elección perfecta para viajeros de negocios y turistas por igual.
            </p>
            <button className="bg-blue-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 transition duration-300">
              Conoce Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

