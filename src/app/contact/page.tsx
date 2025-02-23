export default function ConnectMe() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

      {/* Contact Form */}
      <form className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-700 rounded-md mb-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-700 rounded-md mb-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 bg-gray-700 rounded-md mb-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200 resize-none h-32"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-all duration-200 transform hover:scale-105 shadow-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
