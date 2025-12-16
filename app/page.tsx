"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [snowflakes, setSnowflakes] = useState<
    Array<{
      left: number;
      animationDelay: number;
      animationDuration: number;
      fontSize: number;
      opacity: number;
    }>
  >([]);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Generate snowflake properties on client side only
    setSnowflakes(
      Array.from({ length: 50 }, () => ({
        left: Math.random() * 100,
        animationDelay: Math.random() * 10,
        animationDuration: 10 + Math.random() * 10,
        fontSize: 10 + Math.random() * 10,
        opacity: Math.random() * 0.8 + 0.2,
      }))
    );
  }, []);

  useEffect(() => {
    // Christmas countdown timer
    const calculateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const christmas = new Date(currentYear, 11, 25); // December 25

      // If Christmas has passed this year, count to next year
      if (now > christmas) {
        christmas.setFullYear(currentYear + 1);
      }

      const difference = christmas.getTime() - now.getTime();

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

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
              <span className="bg-gradient-to-r from-red-500 via-white via-green-500 to-red-500 text-transparent bg-clip-text">
                Rebirth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-4 uppercase tracking-widest relative z-10 mystery-subtitle">
              🎄 A Christmas Miracle... ❄️
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
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="text-lg sm:text-xl md:text-2xl font-black historic-title-nav cursor-pointer hover:opacity-80 transition-opacity duration-300"
              >
                REBIRTH
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a
                href="https://x.com/RebirthNewHope"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-x-link"
                title="Follow us on X"
              >
                𝕏
              </a>
              <Link
                href="/"
                className="historic-nav-link text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                Home
              </Link>
              <Link
                href="/global"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                🌍 Global
              </Link>
              <Link
                href="/thesis"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                ⚜ Thesis
              </Link>
              <Link
                href="/whales"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                🐋 Whales
              </Link>
              <Link
                href="/memes"
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                😂 Memes
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

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-3">
              <a
                href="https://x.com/RebirthNewHope"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-x-link text-xl"
                title="Follow us on X"
              >
                𝕏
              </a>
              <button
                onClick={(e) => {
                  const button = e.currentTarget;
                  const menu = document.getElementById("mobile-menu");
                  if (menu) {
                    button.classList.toggle("hamburger-open");
                    if (
                      menu.classList.contains("mobile-menu-hidden") ||
                      menu.classList.contains("hidden")
                    ) {
                      menu.classList.remove("hidden");
                      menu.classList.remove("mobile-menu-hidden");
                      menu.classList.remove("mobile-menu-exit");
                      menu.classList.add("mobile-menu-enter");
                    } else {
                      menu.classList.remove("mobile-menu-enter");
                      menu.classList.add("mobile-menu-exit");
                      setTimeout(() => {
                        menu.classList.add("mobile-menu-hidden");
                        menu.classList.remove("mobile-menu-exit");
                      }, 300);
                    }
                  }
                  button.blur();
                }}
                className="text-white p-2 hover:bg-white/10 active:bg-white/10 rounded transition-all duration-300"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="hamburger-line"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16"
                  />
                  <path
                    className="hamburger-line"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16"
                  />
                  <path
                    className="hamburger-line"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            id="mobile-menu"
            className="mobile-menu-hidden md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 overflow-hidden relative z-50"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
              <Link
                href="/"
                className="historic-nav-link text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
              >
                Home
              </Link>
              <Link
                href="/global"
                className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
              >
                🌍 Global
              </Link>
              <Link
                href="/thesis"
                className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
              >
                ⚜ Thesis
              </Link>
              <Link
                href="/whales"
                className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
              >
                🐋 Whales
              </Link>
              <Link
                href="/memes"
                className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
              >
                😂 Memes
              </Link>
              <a
                href="#about"
                className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
              >
                Chronicle
              </a>
              <a
                href="#acquire"
                className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
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

        {/* Christmas Snowfall Effect */}
        <div className="snowfall">
          {snowflakes.map((flake, i) => (
            <div
              key={i}
              className="snowflake"
              style={{
                left: `${flake.left}%`,
                animationDelay: `${flake.animationDelay}s`,
                animationDuration: `${flake.animationDuration}s`,
                fontSize: `${flake.fontSize}px`,
                opacity: flake.opacity,
              }}
            >
              ❄
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="max-w-7xl w-full space-y-16">
            {/* Main Title - Christmas Rebirth Aesthetic */}
            <div className="text-center space-y-6 animate-slideDown">
              <div className="inline-block relative">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-red-500/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter historic-title-hero christmas-text">
                  REBIRTH
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-500 via-white via-green-500 to-transparent mt-4 animate-expandWidth christmas-glow"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-gray-300 uppercase">
                🎄 A Christmas Miracle 🎄
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto italic">
                This holiday season, witness the greatest comeback story. A gift
                of new beginnings. 🎁
              </p>
            </div>

            {/* Christmas Countdown Timer */}
            <div className="christmas-countdown-container scroll-animate opacity-0">
              <div className="countdown-header">
                <span className="countdown-star">⭐</span>
                <h3 className="countdown-title">Time Until Christmas</h3>
                <span className="countdown-star">⭐</span>
              </div>
              <div className="countdown-grid">
                <div className="countdown-box">
                  <div className="countdown-number">{countdown.days}</div>
                  <div className="countdown-label">Days</div>
                  <div className="countdown-ornament">🎄</div>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-box">
                  <div className="countdown-number">{countdown.hours}</div>
                  <div className="countdown-label">Hours</div>
                  <div className="countdown-ornament">❄️</div>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-box">
                  <div className="countdown-number">{countdown.minutes}</div>
                  <div className="countdown-label">Minutes</div>
                  <div className="countdown-ornament">🎁</div>
                </div>
                <div className="countdown-separator">:</div>
                <div className="countdown-box">
                  <div className="countdown-number">{countdown.seconds}</div>
                  <div className="countdown-label">Seconds</div>
                  <div className="countdown-ornament">✨</div>
                </div>
              </div>
              <div className="countdown-message">
                The season of miracles approaches... 🌟
              </div>
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

            {/* Core Values - Modern Christmas Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto scroll-animate opacity-0 px-4">
              {/* Rise Again Card */}
              <div className="modern-christmas-card group">
                <div className="card-floating-ornaments">
                  <div className="floating-ornament ornament-1">❄️</div>
                  <div className="floating-ornament ornament-2">❄️</div>
                </div>
                <div className="card-icon-wrapper">
                  <div className="card-icon">🎅</div>
                </div>
                <h3 className="card-title">RISE AGAIN</h3>
                <div className="card-divider"></div>
                <p className="card-description">
                  Like the North Star guiding the wise men, we rise stronger.
                  Every winter brings the promise of spring.
                </p>
                <div className="card-glow"></div>
              </div>

              {/* Clean Slate Card */}
              <div className="modern-christmas-card group">
                <div className="card-floating-ornaments">
                  <div className="floating-ornament ornament-3">⭐</div>
                  <div className="floating-ornament ornament-4">❄️</div>
                </div>
                <div className="card-icon-wrapper">
                  <div className="card-icon">🎁</div>
                </div>
                <h3 className="card-title">CLEAN SLATE</h3>
                <div className="card-divider"></div>
                <p className="card-description">
                  A fresh start this holiday season. The gift of redemption.
                  Pure potential wrapped in Christmas magic.
                </p>
                <div className="card-glow"></div>
              </div>

              {/* New Hope Card */}
              <div className="modern-christmas-card group">
                <div className="card-floating-ornaments">
                  <div className="floating-ornament ornament-5">🎄</div>
                  <div className="floating-ornament ornament-6">✨</div>
                </div>
                <div className="card-icon-wrapper">
                  <div className="card-icon">✨</div>
                </div>
                <h3 className="card-title">NEW HOPE</h3>
                <div className="card-divider"></div>
                <p className="card-description">
                  Join our Christmas miracle. Build with believers. Transform
                  together this season of giving.
                </p>
                <div className="card-glow"></div>
              </div>
            </div>

            {/* Developer Token Locks - Transparency Section */}
            <div className="max-w-6xl mx-auto scroll-animate opacity-0 px-4">
              <div className="token-lock-container">
                <div className="token-lock-header">
                  <div className="lock-icon">🔒</div>
                  <h2 className="token-lock-title">Developer Tokens Locked</h2>
                  <div className="lock-icon">🔒</div>
                </div>
                <p className="token-lock-description">
                  Full transparency and commitment. Our development team has
                  locked their tokens to ensure long-term alignment with the
                  community. Verified on-chain via Streamflow.
                </p>
                <div className="token-lock-grid">
                  <a
                    href="https://app.streamflow.finance/contract/solana/mainnet/5UEZ9gpTd3uHiQpJTkmVdhabcuxBEgJccCsnNKsTqLEL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="token-lock-card group"
                  >
                    <div className="lock-card-badge">Contract 1</div>
                    <div className="lock-card-icon">🎄</div>
                    <div className="lock-card-label">Locked via Streamflow</div>
                    <div className="lock-card-address">5UEZ9gp...qLEL</div>
                    <div className="lock-card-action">View Contract →</div>
                    <div className="lock-card-glow"></div>
                  </a>
                  <a
                    href="https://app.streamflow.finance/contract/solana/mainnet/9FKoVX1DEzQeUp7xNisA6kCansdpBZgG2rUuVCKrhs7N"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="token-lock-card group"
                  >
                    <div className="lock-card-badge">Contract 2</div>
                    <div className="lock-card-icon">❄️</div>
                    <div className="lock-card-label">Locked via Streamflow</div>
                    <div className="lock-card-address">9FKoVX1...hs7N</div>
                    <div className="lock-card-action">View Contract →</div>
                    <div className="lock-card-glow"></div>
                  </a>
                  <a
                    href="https://app.streamflow.finance/contract/solana/mainnet/96aAaFk9xtY7P5XNC1vpWwAMrrMRjRHDtbCdyG5jREjJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="token-lock-card group"
                  >
                    <div className="lock-card-badge">Contract 3</div>
                    <div className="lock-card-icon">🎁</div>
                    <div className="lock-card-label">Locked via Streamflow</div>
                    <div className="lock-card-address">96aAaFk...jREjJ</div>
                    <div className="lock-card-action">View Contract →</div>
                    <div className="lock-card-glow"></div>
                  </a>
                </div>
                <div className="token-lock-footer">
                  <span className="footer-badge">✓</span>
                  <span className="footer-text">
                    Verified On-Chain • Solana Mainnet
                  </span>
                  <span className="footer-badge">✓</span>
                </div>
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

            {/* Listings Section - Where to Buy */}
            <div className="max-w-5xl mx-auto scroll-animate opacity-0">
              <div className="historic-listings-section">
                <div className="listings-header">
                  <span className="listings-ornament-top">⚜</span>
                  <h2 className="listings-title">Where to Buy</h2>
                  <span className="listings-ornament-top">⚜</span>
                  <p className="listings-subtitle">
                    Acquire Your $REBIRTH Tokens
                  </p>
                </div>

                <div className="listings-grid">
                  <a
                    href="https://www.coingecko.com/en/coins/rebirth-and-new-hope"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listing-card"
                  >
                    <div className="listing-icon">🦎</div>
                    <h3 className="listing-name">CoinGecko</h3>
                    <p className="listing-description">
                      Buy & track your investment
                    </p>
                    <div className="listing-badge">Listed ✓</div>
                  </a>

                  <a
                    href="https://phantom.com/tokens/solana/8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listing-card"
                  >
                    <div className="listing-icon">👻</div>
                    <h3 className="listing-name">Phantom Wallet</h3>
                    <p className="listing-description">
                      Trade directly in your wallet
                    </p>
                    <div className="listing-badge">Listed ✓</div>
                  </a>
                </div>

                <div className="listings-footer">
                  <p className="listings-coming-soon">
                    ⚡ More listings coming soon ⚡
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section - Historic Council */}
            <div className="max-w-5xl mx-auto scroll-animate opacity-0">
              <div className="historic-team-section">
                <div className="team-header">
                  <span className="team-ornament-top">⚜</span>
                  <h2 className="team-title">The Council of Rebirth</h2>
                  <span className="team-ornament-top">⚜</span>
                  <p className="team-subtitle">Guardians of the New Dawn</p>
                </div>

                <div className="team-members">
                  <div className="team-member">
                    <div className="member-icon">⚔</div>
                    <h3 className="member-name">MARV • REBIRTH ARK</h3>
                    <p className="member-role">Lead Developer</p>
                    <a
                      href="https://x.com/marvCalledIt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-social"
                    >
                      <span className="social-icon">𝕏</span>
                      <span>@marvCalledIt</span>
                    </a>
                    <div className="member-wallet">
                      <p className="wallet-label">Dev Wallet:</p>
                      <code className="wallet-address">
                        8cxFnVqa7sUSEXxeRzqDSbXYfEZSGFeWnfAjAzkaRcQE
                      </code>
                    </div>
                    <div className="member-divider">✦</div>
                  </div>

                  <div className="team-member">
                    <div className="member-icon">🏛</div>
                    <h3 className="member-name">JinxSorrel • Rebirth Ark</h3>
                    <p className="member-role">Web Developer</p>
                    <a
                      href="https://x.com/SweetArcaneJinx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-social"
                    >
                      <span className="social-icon">𝕏</span>
                      <span>@SweetArcaneJinx</span>
                    </a>
                    <div className="member-wallet">
                      <p className="wallet-label">Website Dev Wallet:</p>
                      <code className="wallet-address">
                        4byGAQrAJiHGjPAeu83HPG9Sg26bUx7hvg1mhxwDcByk
                      </code>
                    </div>
                    <div className="member-divider">✦</div>
                  </div>

                  <div className="team-member">
                    <div className="member-icon">🗺️</div>
                    <h3 className="member-name">TropicViper • REBIRTH ARK</h3>
                    <p className="member-role">Road Map Captain</p>
                    <div className="member-wallet">
                      <p className="wallet-label">Road Map Captain Wallet:</p>
                      <code className="wallet-address">
                        GKQYuVicuXMVBR6omcDYF1FFGbctzLg26i1GnpSMMaDq
                      </code>
                    </div>
                    <div className="member-divider">✦</div>
                  </div>

                  <div className="team-member team-member-locked">
                    <div className="member-icon">🔒</div>
                    <h3 className="member-name">WaiterG Locked Wallet</h3>
                    <p className="member-role">50M Tokens Locked</p>
                    <a
                      href="https://x.com/WaiterG"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="member-social"
                    >
                      <span className="social-icon">𝕏</span>
                      <span>@WaiterG</span>
                    </a>
                    <div className="member-wallet">
                      <p className="wallet-label">Locked Wallet:</p>
                      <code className="wallet-address">
                        9hpzqLMk3y4yPj3tVf9q7CCaz6QbVMUHF8LGUghE41NG
                      </code>
                    </div>
                    <div className="member-divider">✦</div>
                  </div>
                </div>
              </div>
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
