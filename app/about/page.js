export const metadata = {
    title: 'About - Compact URL',
    description: 'Learn more about Compact URL',
  };
  
  export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-purple-200 rounded-full opacity-30 blur-3xl z-0" />
        <div className="absolute bottom-[-8rem] right-[-8rem] w-[24rem] h-[24rem] bg-pink-200 rounded-full opacity-30 blur-3xl z-0" />
  
        {/* Main Content */}
        <section className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-16 py-20 gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-purple-700">Who We Are</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Compact URL is a powerful link shortening platform with a focus on simplicity,
              speed, and security. No ads. No tracking. Just clean and compact links that work.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Built for developers, marketers, and everyday users who want to keep their digital
              communication professional and fast.
            </p>
  
            <div className="p-5 border border-purple-300 bg-white/60 backdrop-blur-md rounded-lg shadow-lg">
              <p className="italic text-purple-800 text-center">
                “Simplicity is the ultimate sophistication.” <br />
                <span className="text-sm font-semibold">– Leonardo da Vinci</span>
              </p>
            </div>
          </div>
  
          {/* Illustration */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in-up delay-150">
            <img
              src="/about.svg"
              alt="Team working illustration"
              className="w-full max-w-md rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="relative z-10 bg-purple-700 text-white py-12 px-6 text-center shadow-inner">
          <h3 className="text-3xl font-bold mb-4">Ready to make your links compact?</h3>
          <p className="text-lg mb-6">Start shortening your links in seconds — it's fast, simple, and free.</p>
          <a
            href="/shorten"
            className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Get Started
          </a>
        </section>
  
        {/* Footer */}
        <footer className="bg-purple-900 text-white text-center py-6 mt-10 relative z-10">
          &copy; {new Date().getFullYear()} Compact URL. All rights reserved.
        </footer>
      </div>
    );
  }
  