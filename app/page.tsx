"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mysterious loading screen with fog effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // 4.5 seconds for mysterious reveal

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

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Mysterious Loading Screen with Heavy Fog */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black loading-screen mysterious-entrance">
          {/* Fog Layers - Multiple depths for mystery */}
          <div className="fog-container">
            <div className="fog fog-1"></div>
            <div className="fog fog-2"></div>
            <div className="fog fog-3"></div>
            <div className="fog fog-4"></div>
            <div className="fog fog-5"></div>
            <div className="fog fog-6"></div>
            <div className="fog fog-7"></div>
            <div className="fog fog-8"></div>
          </div>

          {/* Dark Vignette Effect */}
          <div className="absolute inset-0 bg-radial-dark opacity-80"></div>

          <div className="text-center relative z-10">
            {/* Heavy Smoke Effect */}
            <div className="smoke-container-loading">
              <div className="smoke-loading smoke-1"></div>
              <div className="smoke-loading smoke-2"></div>
              <div className="smoke-loading smoke-3"></div>
              <div className="smoke-loading smoke-4"></div>
              <div className="smoke-loading smoke-5"></div>
              <div className="smoke-loading smoke-6"></div>
            </div>

            {/* Logo/Text with Mystery Reveal */}
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider relative z-10 mystery-text-reveal historic-title">
              <span className="bg-gradient-to-r from-gray-500 via-white to-gray-500 text-transparent bg-clip-text">
                Rebirth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-4 uppercase tracking-widest relative z-10 mystery-subtitle">
              Rising from the ashes...
            </p>

            {/* Mysterious Particles */}
            <div className="mysterious-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Dark Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50"></div>

        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-2xl font-black historic-title-nav cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                REBIRTH
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/thesis"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                ⚜ The Thesis
              </Link>
              <a
                href="#about"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                Chronicle
              </a>
              <a
                href="#acquire"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                Acquire
              </a>
            </div>
          </div>
        </nav>

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
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter historic-title-hero">
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

            {/* Hero Banner with Dark Design - Video */}
            <div className="w-full flex justify-center scroll-animate opacity-0">
              <div className="relative group max-w-5xl w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-300 to-white rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition duration-700"></div>
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src="/BACKGROUNDVIDEO.MP4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Core Values - Historic Scrolls */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto scroll-animate opacity-0">
              <div className="historic-scroll">
                <div className="scroll-ornament">❦</div>
                <div className="scroll-icon">🦅</div>
                <h3 className="scroll-title">Rise Again</h3>
                <p className="scroll-text">
                  From the ashes, we emerge stronger. Every setback is a setup
                  for a comeback.
                </p>
                <div className="scroll-ornament-bottom">❦</div>
              </div>

              <div className="historic-scroll">
                <div className="scroll-ornament">❦</div>
                <div className="scroll-icon">🔥</div>
                <h3 className="scroll-title">Clean Slate</h3>
                <p className="scroll-text">
                  A fresh start. No baggage. Just pure potential and unlimited
                  opportunity.
                </p>
                <div className="scroll-ornament-bottom">❦</div>
              </div>

              <div className="historic-scroll">
                <div className="scroll-ornament">❦</div>
                <div className="scroll-icon">⚡</div>
                <h3 className="scroll-title">New Hope</h3>
                <p className="scroll-text">
                  Join a movement. Build with believers. Transform together.
                </p>
                <div className="scroll-ornament-bottom">❦</div>
              </div>
            </div>

            {/* About Rebirth - Historic Book Style */}
            <div
              id="about"
              className="max-w-5xl mx-auto scroll-animate opacity-0"
            >
              <div className="ancient-book">
                {/* Book Cover/Header */}
                <div className="book-header">
                  <div className="book-ornament-top">✦</div>
                  <h2 className="book-title">The Chronicle of Rebirth</h2>
                  <div className="book-ornament-bottom">✦</div>
                  <div className="book-subtitle">
                    A Tale of Rising from Ashes
                  </div>
                </div>

                {/* Book Pages */}
                <div className="book-pages">
                  {/* Left Page */}
                  <div className="book-page book-page-left">
                    <div className="page-number">I</div>
                    <div className="drop-cap-container">
                      <span className="drop-cap">R</span>
                      <p className="book-text">
                        EBIRTH is not merely a token of fortune—&apos;tis a{" "}
                        <span className="book-highlight">
                          saga of redemption
                        </span>
                        , inscribed in the annals of those who dare to rise
                        anew.
                      </p>
                    </div>

                    <p className="book-text mt-6">
                      From the depths of tribulation to the heights of
                      prosperity, this endeavor represents a covenant renewed. A
                      tabula rasa. An opportunity bestowed upon the faithful to
                      join early, to forge something extraordinary, and to
                      journey with a fellowship that truly advances.
                    </p>
                  </div>

                  {/* Right Page */}
                  <div className="book-page book-page-right">
                    <div className="page-number">II</div>

                    <div className="book-verse">
                      <p className="verse-line">We ascend from the ashes,</p>
                      <p className="verse-line">
                        We reconstruct what was lost,
                      </p>
                      <p className="verse-line-emphasis">We are Reborn.</p>
                    </div>

                    <div className="book-seal">
                      <div className="seal-circle">
                        <span className="seal-text">REBIRTH</span>
                        <span className="seal-year">MMXXV</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Footer */}
                <div className="book-footer">
                  <span className="book-footer-text">
                    Est. Anno Domini 2025
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Statement - Historic Proclamation */}
            <div id="acquire" className="text-center scroll-animate opacity-0">
              <div className="historic-proclamation">
                <div className="proclamation-header">
                  <span className="proclamation-ornament">⚜</span>
                  <span className="proclamation-divider">✦</span>
                  <span className="proclamation-ornament">⚜</span>
                </div>

                <div className="proclamation-content">
                  <h3 className="proclamation-title">PROCLAMATION</h3>
                  <p className="proclamation-text">
                    By Royal Decree of the Council of Rebirth
                  </p>
                  <div className="proclamation-main">
                    <span className="proclamation-icon">⚡</span>
                    <span className="proclamation-action">
                      ACQUIRE THY TOKENS NOW!
                    </span>
                    <span className="proclamation-icon">⚡</span>
                  </div>
                  <p className="proclamation-subtitle">
                    🔥 Miss Not This Ascension! 🔥
                  </p>
                </div>

                <div className="proclamation-footer">
                  <span className="proclamation-ornament">⚜</span>
                  <span className="proclamation-divider">✦</span>
                  <span className="proclamation-ornament">⚜</span>
                </div>
              </div>
            </div>

            {/* DexScreener Embed - Historic Ledger */}
            <div className="max-w-6xl mx-auto scroll-animate opacity-0">
              <div className="historic-trading-ledger">
                <div className="ledger-header">
                  <span className="ledger-ornament">✤</span>
                  <h3 className="ledger-title">The Trading Ledger</h3>
                  <span className="ledger-ornament">✤</span>
                </div>

                <p className="ledger-subtitle">
                  A Chronicle of Market Movements
                </p>

                <div className="ledger-chart-container">
                  <div className="w-full" style={{ minHeight: "500px" }}>
                    <iframe
                      src="https://dexscreener.com/solana/8ekkqrmcxvdqo9r5nggsf6nqgaeama4lbaaeos9ufcpf?embed=1&theme=light&trades=0&info=0"
                      style={{ width: "100%", height: "500px", border: "none" }}
                      title="DexScreener Trading Chart"
                    ></iframe>
                  </div>
                </div>

                <div className="ledger-footer">
                  <a
                    href="https://dexscreener.com/solana/8ekkqrmcxvdqo9r5nggsf6nqgaeama4lbaaeos9ufcpf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ledger-link"
                  >
                    <span className="ledger-link-ornament">⟡</span>
                    <span>View Complete Ledger</span>
                    <span className="ledger-link-ornament">⟡</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Video Section - Historic Frame */}
            <div className="max-w-4xl mx-auto scroll-animate opacity-0">
              <div className="historic-video-frame">
                <div className="video-frame-header">
                  <span className="video-frame-ornament">❖</span>
                  <h3 className="video-frame-title">The Visual Chronicle</h3>
                  <span className="video-frame-ornament">❖</span>
                </div>

                <div className="video-frame-content">
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

                <div className="video-frame-footer">
                  <span className="video-frame-caption">
                    A Testament to Renewal
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links - Historic Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate opacity-0 flex-wrap">
              <a
                href="https://dexscreener.com/solana/8ekkqrmcxvdqo9r5nggsf6nqgaeama4lbaaeos9ufcpf"
                target="_blank"
                rel="noopener noreferrer"
                className="historic-button historic-button-green"
              >
                <span className="historic-button-ornament">✦</span>
                <span className="historic-button-text">VIEW ON DEX</span>
                <span className="historic-button-ornament">✦</span>
              </a>

              <a
                href="https://x.com/RebirthNewHope"
                target="_blank"
                rel="noopener noreferrer"
                className="historic-button historic-button-dark"
              >
                <span className="historic-button-ornament">✦</span>
                <span className="historic-button-text">FOLLOW ON X</span>
                <span className="historic-button-ornament">✦</span>
              </a>

              <a
                href="https://x.com/i/communities/1997363513140953390"
                target="_blank"
                rel="noopener noreferrer"
                className="historic-button historic-button-light"
              >
                <span className="historic-button-ornament">✦</span>
                <span className="historic-button-text">JOIN COMMUNITY</span>
                <span className="historic-button-ornament">✦</span>
              </a>
            </div>

            {/* Contract Address - Historic Seal */}
            <div className="max-w-3xl mx-auto scroll-animate opacity-0">
              <div className="historic-contract-seal">
                <div className="contract-seal-header">
                  <span className="contract-seal-ornament">⚜</span>
                  <h3 className="contract-seal-title">
                    OFFICIAL CONTRACT SEAL
                  </h3>
                  <span className="contract-seal-ornament">⚜</span>
                </div>

                <div className="contract-seal-content">
                  <p className="contract-seal-label">
                    Authenticated Token Address
                  </p>
                  <div className="contract-seal-address">
                    <code className="contract-address-text">
                      8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump
                    </code>
                  </div>
                  <p className="contract-seal-footer">
                    Verified & Sealed • MMXXV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
