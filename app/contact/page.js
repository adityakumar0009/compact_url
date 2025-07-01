export const metadata = {
    title: 'Contact - Compact URL',
    description: 'Get in touch with the Compact URL team',
  };
  
  export default function ContactPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800">
        {/* Header */}
        <section className="text-center py-16 px-4">
          <h1 className="text-5xl font-extrabold text-purple-700 mb-4">Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto text-gray-600">
            We'd love to hear from you! Whether you have feedback, a question, or just want to say hi — fill out the form below.
          </p>
        </section>
  
        {/* Contact Form */}
        <section className="max-w-3xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Your full name"
              />
            </div>
  
            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
  
            <div>
              <label className="block text-sm font-semibold text-gray-700">Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Tell us what’s on your mind..."
              ></textarea>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-pink-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
  
        {/* Footer */}
        <footer className="bg-purple-700 text-white text-center py-6 mt-16">
          &copy; {new Date().getFullYear()} Compact URL. All rights reserved.
        </footer>
      </main>
    );
  }
  