"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      {/* Flying Birds Animation */}
      <div className="bird-container">
        <div className="bird bird-1">
          <svg viewBox="0 0 100 50" className="bird-svg">
            <path
              d="M 50 25 Q 35 15, 20 25 Q 35 20, 50 25 Q 65 20, 80 25 Q 65 15, 50 25"
              fill="black"
            />
          </svg>
        </div>
        <div className="bird bird-2">
          <svg viewBox="0 0 100 50" className="bird-svg">
            <path
              d="M 50 25 Q 35 15, 20 25 Q 35 20, 50 25 Q 65 20, 80 25 Q 65 15, 50 25"
              fill="black"
            />
          </svg>
        </div>
        <div className="bird bird-3">
          <svg viewBox="0 0 100 50" className="bird-svg">
            <path
              d="M 50 25 Q 35 15, 20 25 Q 35 20, 50 25 Q 65 20, 80 25 Q 65 15, 50 25"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full space-y-16">
          {/* Main Title - Memecoin Style */}
          <div className="text-center space-y-6 animate-slideDown">
            <div className="inline-block relative">
              <div className="absolute -top-8 -left-8 text-6xl animate-bounce">
                🚀
              </div>
              <div
                className="absolute -top-8 -right-8 text-6xl animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                💎
              </div>
              <h1
                className="text-7xl md:text-9xl font-black tracking-tighter hover:rotate-2 transition-transform duration-300"
                style={{ textShadow: "8px 8px 0px rgba(0,0,0,0.1)" }}
              >
                REBIRTH
              </h1>
              <div className="h-3 w-full bg-black mt-2 animate-expandWidth transform -skew-x-12"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-wider text-black animate-pulse">
              AND NEW HOPE 🔥
            </h2>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
              <span className="bg-black text-white px-6 py-3 rounded-full transform -rotate-3 hover:rotate-0 transition-transform">
                TO THE MOON!
              </span>
              <span className="text-4xl animate-spin-slow">🌙</span>
            </div>
            <p className="text-lg md:text-xl text-black font-bold uppercase max-w-2xl mx-auto bg-yellow-300 px-6 py-3 rounded-lg transform rotate-1 hover:rotate-0 transition-transform">
              ⚡ The ULTIMATE Opportunity Token ⚡
            </p>
          </div>

          {/* Hero Banner with Modern Card Design */}
          <div className="w-full flex justify-center scroll-animate opacity-0">
            <div className="relative group max-w-5xl w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-800 to-black rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Banner Rebirth.jpg"
                  alt="Rebirth and New Hope"
                  width={1200}
                  height={400}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Memecoin Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto scroll-animate opacity-0">
            <div className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-black hover:-rotate-2 transform">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">
                🚫
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">
                NO MORE FUD!
              </h3>
              <p className="text-gray-800 leading-relaxed font-bold">
                Stop the negativity! WAGMI! 💪
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-black hover:rotate-2 transform">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">
                📈
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">ONLY UP!</h3>
              <p className="text-gray-800 leading-relaxed font-bold">
                Forget the bears! Bulls run this town! 🐂
              </p>
            </div>

            <div className="group bg-black rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-white hover:scale-110 transform">
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">
                💰
              </div>
              <h3 className="text-2xl font-black mb-3 text-white uppercase">
                GET GAINS!
              </h3>
              <p className="text-gray-200 leading-relaxed font-bold">
                Time to MOON! Join the rebirth! 🌕
              </p>
            </div>
          </div>

          {/* CTA Statement - Memecoin Style */}
          <div className="text-center scroll-animate opacity-0">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-black via-gray-900 to-black text-white px-12 py-6 rounded-full text-2xl md:text-4xl font-black shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 border-4 border-white">
              <span className="text-4xl animate-bounce">⚡</span>
              <span>LFG! BUY NOW!</span>
              <span
                className="text-4xl animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                ⚡
              </span>
            </div>
            <p className="mt-6 text-xl md:text-2xl font-black uppercase tracking-wider animate-pulse">
              🔥 Don't Miss The Rocket! 🔥
            </p>
          </div>

          {/* DexScreener Embed */}
          <div className="max-w-6xl mx-auto scroll-animate opacity-0">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl p-6 border-4 border-black">
              <h3 className="text-3xl md:text-4xl font-black text-center mb-6 uppercase flex items-center justify-center gap-3">
                <span className="text-4xl">📊</span>
                <span>LIVE CHART - WATCH US MOON!</span>
                <span className="text-4xl">🚀</span>
              </h3>
              <div className="w-full" style={{ minHeight: "500px" }}>
                <iframe
                  src="https://dexscreener.com/solana/8ekkqrmcxvdqo9r5nggsf6nqgaeama4lbaaeos9ufcpf?embed=1&theme=light&trades=0&info=0"
                  style={{ width: "100%", height: "500px", border: "none" }}
                  title="DexScreener Trading Chart"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://dexscreener.com/solana/8ekkqrmcxvdqo9r5nggsf6nqgaeama4lbaaeos9ufcpf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  View Full Chart on DexScreener
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto scroll-animate opacity-0">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/UvZZS610bIU?start=29"
                  title="Rebirth and New Hope"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Social Links - Modern Button Design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate opacity-0 flex-wrap">
            <a
              href="https://dexscreener.com/solana/8ekkqrmcxvdqo9r5nggsf6nqgaeama4lbaaeos9ufcpf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-green-600 to-green-700 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 min-w-[240px]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 to-green-800"></span>
              <span className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 transition-all duration-700 ease-out bg-white rounded-full opacity-0 group-hover:opacity-20"></span>
              <span className="relative flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                VIEW ON DEX
              </span>
            </a>

            <a
              href="https://x.com/RebirthNewHope"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-black rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 min-w-[240px]"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-black"></span>
              <span className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 transition-all duration-700 ease-out bg-white rounded-full opacity-0 group-hover:opacity-10"></span>
              <span className="relative flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                FOLLOW ON X
              </span>
            </a>

            <a
              href="https://x.com/i/communities/1997363513140953390"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-black min-w-[240px]"
            >
              <span className="absolute inset-0 w-full h-full bg-white"></span>
              <span className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 transition-all duration-700 ease-out bg-black rounded-full opacity-0 group-hover:opacity-100"></span>
              <span className="relative group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                JOIN COMMUNITY
              </span>
            </a>
          </div>

          {/* Contract Address - Modern Design */}
          <div className="max-w-3xl mx-auto scroll-animate opacity-0">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl">
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-4 text-center">
                Contract Address
              </p>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                <code className="text-xs md:text-sm font-mono text-white break-all block text-center hover:text-gray-300 transition-colors cursor-pointer">
                  8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
