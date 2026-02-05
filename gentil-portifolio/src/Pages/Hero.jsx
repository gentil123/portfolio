import profile from '../assets/gentil.jpg';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-400 mb-3">Hello, I’m</p>
          <h1 className="text-5xl font-extrabold mb-4">
            Gakiza <span className="text-blue-500">Gentil</span>
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Full Stack Developer specialized in React, Tailwind CSS,
            Node.js, PHP & MySQL. I build modern and scalable web applications.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-600"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-700 px-6 py-3 rounded-lg hover:border-blue-500"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-30"></div>
            <img
              src={profile}
              alt="Gakiza Gentil"
              className="relative w-72 h-80 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
