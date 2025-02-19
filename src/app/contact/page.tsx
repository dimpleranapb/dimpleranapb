
export default function ConnectMe() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">

      {/* Contact Form */}
      <form className="w-full max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 bg-gray-800 rounded-md mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md">
          Send Message
        </button>
      </form>
    </div>
  );
}
