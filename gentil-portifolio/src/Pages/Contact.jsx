export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-md mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">
          Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
          ></textarea>
          <button className="w-full bg-blue-500 py-3 rounded font-medium hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
