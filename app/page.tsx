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
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Dark Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50"></div>

      {/* Rising Smoke - Rebirth From Ashes */}
      <div className="smoke-container">
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
        <div className="smoke smoke-4"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full space-y-16">
          {/* Main Title - Dark Rebirth Aesthetic */}
          <div className="text-center space-y-6 animate-slideDown">
            <div className="inline-block relative">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
              <h1
                className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 80px rgba(255,255,255,0.3)" }}
              >
                REBIRTH
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent mt-4 animate-expandWidth"></div>
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-gray-300 uppercase">
              And New Hope
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto italic">
              Rising from the ashes. A second chance. A new beginning.
            </p>
          </div>

          {/* Hero Banner with Dark Design */}
          <div className="w-full flex justify-center scroll-animate opacity-0">
            <div className="relative group max-w-5xl w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-300 to-white rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
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

          {/* Core Values - Dark Aesthetic */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto scroll-animate opacity-0">
            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-6 opacity-60">🦅</div>
              <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-wide">
                Rise Again
              </h3>
              <p className="text-gray-400 leading-relaxed">
                From the ashes, we emerge stronger. Every setback is a setup for
                a comeback.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-6 opacity-60">🔥</div>
              <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-wide">
                Clean Slate
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A fresh start. No baggage. Just pure potential and unlimited
                opportunity.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-6 opacity-60">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-wide">
                New Hope
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Join a movement. Build with believers. Transform together.
              </p>
            </div>
          </div>

          {/* About Rebirth - Emotional Section */}
          <div className="max-w-4xl mx-auto scroll-animate opacity-0">
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-12 md:p-16 shadow-2xl border-4 border-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
              <div className="relative z-10 space-y-6 text-white">
                <h2 className="text-4xl md:text-5xl font-black uppercase text-center mb-8 tracking-tight">
                  About Rebirth
                </h2>

                <p className="text-xl md:text-2xl leading-relaxed text-center font-bold">
                  REBIRTH isn't just a meme coin — it's a{" "}
                  <span className="text-yellow-300">comeback story</span>.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-gray-200 text-center">
                  From the trenches to the moon, this project represents a fresh
                  start. A clean slate. A second chance to enter early, to build
                  something wild, and to ride with a community that actually
                  moves.
                </p>

                <div className="pt-8 space-y-3 text-center">
                  <p className="text-2xl md:text-3xl font-black">We rise.</p>
                  <p className="text-2xl md:text-3xl font-black">We rebuild.</p>
                  <p className="text-3xl md:text-4xl font-black text-yellow-300">
                    We rebirth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Statement - Clean & Powerful */}
          <div className="text-center scroll-animate opacity-0">
            <div className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-2xl md:text-3xl font-bold shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-500">
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
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl p-6 border border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 uppercase text-white tracking-wide">
                Live Trading Chart
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
