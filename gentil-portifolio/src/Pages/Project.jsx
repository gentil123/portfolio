export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Student Management System",
            "Stock Management System",
            "Online Quiz System",
            "Food delivery system",
            "Library management system",
            "E-books system",
            "Employee management system"
          ].map((project) => (
            <div
              key={project}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="font-semibold mb-2">{project}</h3>
              <p className="text-sm text-gray-400">
                Built with modern technologies and clean UI design.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
