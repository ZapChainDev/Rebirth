"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Roadmap() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

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
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black loading-screen mysterious-entrance">
          <div className="fog-container">
            <div className="fog fog-1"></div>
            <div className="fog fog-2"></div>
            <div className="fog fog-3"></div>
            <div className="fog fog-4"></div>
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider relative z-10 mystery-text-reveal historic-title">
              <span className="bg-gradient-to-r from-amber-700 via-white via-amber-700 to-amber-700 text-transparent bg-clip-text">
                The Path
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mt-4 uppercase tracking-widest relative z-10 mystery-subtitle">
              📜 Our Sacred Journey... ⚔️
            </p>
          </div>
        </div>
      )}

      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
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
                className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
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
                href="/roadmap"
                className="historic-nav-link text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
              >
                🗺️ Roadmap
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
            </div>

            {/* Mobile Navigation Button */}
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
            </div>
          </div>
        </nav>

        {/* Rising Smoke Effect */}
        <div className="smoke-container">
          <div className="smoke smoke-1"></div>
          <div className="smoke smoke-2"></div>
          <div className="smoke smoke-3"></div>
          <div className="smoke smoke-4"></div>
        </div>

        {/* Main Content */}
        <section className="relative z-10 min-h-screen px-4 py-32">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Hero Title */}
            <div className="text-center space-y-6 animate-slideDown">
              <div className="inline-block relative">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter historic-title-hero">
                  THE ROADMAP
                </h1>
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-amber-700 via-white via-amber-700 to-transparent mt-4 animate-expandWidth historic-glow"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-gray-300 uppercase">
                🗺️ Our Sacred Journey Forward 🗺️
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto italic">
                A chronicle of our mission to bring new hope and rebuild trust in
                the meme coin realm. Together, we write history.
              </p>
            </div>

            {/* Mission Statement - Ancient Scroll */}
            <div className="max-w-5xl mx-auto scroll-animate opacity-0">
              <div className="ancient-book">
                <div className="book-header">
                  <div className="book-ornament-top">✦</div>
                  <h2 className="book-title">The Sacred Mission</h2>
                  <div className="book-ornament-bottom">✦</div>
                  <div className="book-subtitle">
                    Building a Community of Trust & Honor
                  </div>
                </div>

                <div className="book-pages">
                  <div className="book-page book-page-left">
                    <div className="page-number">I</div>
                    <div className="drop-cap-container">
                      <span className="drop-cap">R</span>
                      <p className="book-text">
                        EBIRTH seeks to restore{" "}
                        <span className="book-highlight">new hope</span> into
                        the Solana meme market by forging a solid community of
                        trusted individuals, both online and in the realm of
                        reality.
                      </p>
                    </div>

                    <p className="book-text mt-6">
                      We strive to make the connection among holders more real
                      and tangible. Family, friends, coworkers—all are welcomed
                      to join{" "}
                      <span className="book-highlight">the Ark</span>, where
                      bonds transcend mere digital transactions.
                    </p>
                  </div>

                  <div className="book-page book-page-right">
                    <div className="page-number">II</div>

                    <p className="book-text">
                      Our vision is to bring back the OG vibes of 2022—a time of
                      genuine community spirit that has been sorely missing in
                      meme coins. Rebirth&apos;s goal is to show holders{" "}
                      <span className="book-highlight">you are safe with us</span>.
                    </p>

                    <p className="book-text mt-6">
                      We stand against rogue devs and creator fee bandits who
                      abandon tokens. With Rebirth, trust is earned through
                      action, not empty promises.
                    </p>
                  </div>
                </div>

                <div className="book-footer">
                  <span className="book-footer-text">
                    The Foundation of Our Covenant
                  </span>
                </div>
              </div>
            </div>

            {/* Roadmap Phases - Historic Timeline */}
            <div className="max-w-6xl mx-auto scroll-animate opacity-0">
              <div className="roadmap-timeline">
                <div className="timeline-header">
                  <span className="timeline-ornament">⚜</span>
                  <h2 className="timeline-title">The Journey Ahead</h2>
                  <span className="timeline-ornament">⚜</span>
                </div>

                {/* Phase 1 - Foundation */}
                <div className="roadmap-phase roadmap-phase-active">
                  <div className="phase-marker">
                    <div className="phase-icon">🏛️</div>
                    <div className="phase-line"></div>
                  </div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">PHASE I: THE FOUNDATION</h3>
                      <span className="phase-status">Active</span>
                    </div>
                    <div className="phase-subtitle">
                      Building the Ark - Current Era
                    </div>
                    <ul className="phase-list">
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Establish a <strong>solid community</strong> with
                          trusted individuals online and IRL
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Create <strong>holders chat</strong> - a sacred forum
                          where all who join the Ark can voice their counsel
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Launch <strong>Rebirth Ark Reserved Wallet</strong>{" "}
                          for marketing—members may contribute donations for
                          future campaigns
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Foster connections that transcend the digital:
                          family, friends, coworkers united in purpose
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Demonstrate that <strong>trust and integrity</strong>{" "}
                          can prevail in the meme coin space
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 2 - The OG Revival */}
                <div className="roadmap-phase">
                  <div className="phase-marker">
                    <div className="phase-icon">🔥</div>
                    <div className="phase-line"></div>
                  </div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">PHASE II: THE OG REVIVAL</h3>
                      <span className="phase-status phase-status-upcoming">
                        Upcoming
                      </span>
                    </div>
                    <div className="phase-subtitle">
                      Restoring the Spirit of 2022
                    </div>
                    <ul className="phase-list">
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Bring back the <strong>OG vibes</strong> that made the
                          early meme coin era legendary
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Cultivate a culture where holders feel{" "}
                          <strong>safe and valued</strong>
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Organize opportunities for holders to{" "}
                          <strong>meet IRL</strong> and strengthen bonds
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Prove that you don&apos;t need to be a crook to
                          succeed—just <strong>trust</strong> and work with
                          like-minded people
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Combat the bad name meme coins have earned through{" "}
                          <strong>transparency and honesty</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Phase 3 - The Final Rebirth */}
                <div className="roadmap-phase">
                  <div className="phase-marker">
                    <div className="phase-icon">🦅</div>
                    <div className="phase-line"></div>
                  </div>
                  <div className="phase-content">
                    <div className="phase-header">
                      <h3 className="phase-title">
                        PHASE III: THE FINAL REBIRTH
                      </h3>
                      <span className="phase-status phase-status-future">
                        2026 Vision
                      </span>
                    </div>
                    <div className="phase-subtitle">
                      Rising to Help Others Rise
                    </div>
                    <ul className="phase-list">
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Achieve and maintain a{" "}
                          <strong>stable market cap</strong> that demonstrates
                          our strength
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          <strong>Help other tokens</strong> that have been
                          abandoned or scammed but still have loyal communities
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Support projects victimized by{" "}
                          <strong>creator fee bandits</strong> and sleeping devs
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Become the beacon of hope for communities that deserve
                          better
                        </span>
                      </li>
                      <li className="phase-item">
                        <span className="phase-bullet">⚔</span>
                        <span>
                          Our <strong>top goal for 2026</strong>: Lift up
                          forgotten projects and restore faith in the ecosystem
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Timeline Footer */}
                <div className="timeline-footer">
                  <div className="timeline-end-marker">
                    <div className="end-icon">⚜</div>
                  </div>
                  <p className="timeline-end-text">
                    The Journey Continues... Together We Rise
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values - What Sets Us Apart */}
            <div className="max-w-6xl mx-auto scroll-animate opacity-0">
              <div className="historic-proclamation">
                <div className="proclamation-header">
                  <span className="proclamation-ornament">⚜</span>
                  <span className="proclamation-divider">✦</span>
                  <span className="proclamation-ornament">⚜</span>
                </div>

                <div className="proclamation-content">
                  <h3 className="proclamation-title">OUR SACRED OATH</h3>
                  <p className="proclamation-text">
                    The Pillars Upon Which We Stand
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    {/* Trust */}
                    <div className="modern-historic-card group">
                      <div className="card-icon-wrapper">
                        <div className="card-icon">🤝</div>
                      </div>
                      <h3 className="card-title text-xl">TRUST</h3>
                      <div className="card-divider"></div>
                      <p className="card-description text-sm">
                        We earn trust through transparency and action. No
                        shortcuts, no deception.
                      </p>
                    </div>

                    {/* Community */}
                    <div className="modern-historic-card group">
                      <div className="card-icon-wrapper">
                        <div className="card-icon">👥</div>
                      </div>
                      <h3 className="card-title text-xl">COMMUNITY</h3>
                      <div className="card-divider"></div>
                      <p className="card-description text-sm">
                        Real connections. Real people. Family, friends, and
                        fellow believers united.
                      </p>
                    </div>

                    {/* Service */}
                    <div className="modern-historic-card group">
                      <div className="card-icon-wrapper">
                        <div className="card-icon">🛡️</div>
                      </div>
                      <h3 className="card-title text-xl">SERVICE</h3>
                      <div className="card-divider"></div>
                      <p className="card-description text-sm">
                        Once strong, we lift others. Helping abandoned projects
                        is our destiny.
                      </p>
                    </div>
                  </div>

                  <p className="proclamation-subtitle">
                    🔥 Join the Ark. Build the Future. Trust the Process. 🔥
                  </p>
                </div>

                <div className="proclamation-footer">
                  <span className="proclamation-ornament">⚜</span>
                  <span className="proclamation-divider">✦</span>
                  <span className="proclamation-ornament">⚜</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto text-center scroll-animate opacity-0">
              <div className="historic-contract-seal">
                <div className="contract-seal-header">
                  <span className="contract-seal-ornament">⚜</span>
                  <h3 className="contract-seal-title">JOIN THE ARK</h3>
                  <span className="contract-seal-ornament">⚜</span>
                </div>

                <div className="contract-seal-content">
                  <p className="contract-seal-label text-lg mb-6">
                    Be part of something greater. A community built on trust,
                    honor, and the shared mission of restoring integrity to the
                    meme coin world.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
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
                      href="https://t.me/RebirthandNewHope"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="historic-button historic-button-blue"
                    >
                      <span className="historic-button-ornament">✦</span>
                      <span className="historic-button-text">
                        JOIN TELEGRAM
                      </span>
                      <span className="historic-button-ornament">✦</span>
                    </a>
                  </div>

                  <p className="contract-seal-footer mt-8">
                    Together We Rise • MMXXV & Beyond
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
