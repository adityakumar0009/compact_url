import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-100 via-white to-purple-200 min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] px-6 md:px-16 py-12 items-center">
        <div className="flex flex-col gap-6 items-center md:items-start justify-center z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight text-center md:text-left">
            The Best URL Shortener in the Market
          </h1>
          <p className="text-gray-700 text-lg max-w-lg text-center md:text-left">
            At <span className="font-semibold text-purple-600">Compact URL</span>, simplicity
            isn’t just a feature — it’s our philosophy. Shortening a link should be fast,
            distraction-free, and elegant.
          </p>
          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-2 rounded-lg shadow font-semibold">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-2 rounded-lg shadow font-semibold">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] mt-10 md:mt-0">
          <Image
            src="/vector.jpg"
            alt="Hero illustration"
            className="mix-blend-darken object-contain"
            fill
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-2 px-6 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">Why Choose Compact URL?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "No Ads",
              desc: "Enjoy a clean and distraction-free experience — always.",
              emoji: "🚫",
            },
            {
              title: "Fast & Secure",
              desc: "Lightning-fast redirects with secure link handling.",
              emoji: "⚡",
            },
            {
              title: "Simple UI",
              desc: "Minimal design focused on usability and speed.",
              emoji: "🎯",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-purple-50 text-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              step: "1. Paste your long URL",
              icon: "📋",
            },
            {
              step: "2. Hit 'Shorten'",
              icon: "✂️",
            },
            {
              step: "3. Share the short link",
              icon: "🔗",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <p className="text-lg text-gray-700 font-medium">{item.step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white text-center py-6 mt-10">
        &copy; {new Date().getFullYear()} Compact URL. All rights reserved.
      </footer>
    </main>
  );
}
