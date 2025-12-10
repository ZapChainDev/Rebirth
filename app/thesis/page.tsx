"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ThesisPage() {
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

      {/* Rising Smoke */}
      <div className="smoke-container">
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
        <div className="smoke smoke-4"></div>
      </div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-gray-800/50">
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
              className="historic-nav-link text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
            >
              ⚜ Thesis
            </Link>
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
                const menu = document.getElementById("mobile-menu-thesis");
                if (menu) {
                  button.classList.toggle("hamburger-open");
                  if (menu.classList.contains("hidden")) {
                    menu.classList.remove("hidden");
                    menu.classList.remove("mobile-menu-exit");
                    menu.classList.add("mobile-menu-enter");
                  } else {
                    menu.classList.remove("mobile-menu-enter");
                    menu.classList.add("mobile-menu-exit");
                    setTimeout(() => {
                      menu.classList.add("hidden");
                    }, 300);
                  }
                }
              }}
              className="text-white p-2 hover:bg-white/10 rounded transition-all duration-300"
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
          id="mobile-menu-thesis"
          className="hidden md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50 overflow-hidden relative z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/"
              className="historic-nav-link text-gray-300 hover:text-white py-2 px-3 rounded hover:bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
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
              className="historic-nav-link text-white py-2 px-3 rounded bg-white/10 transition-colors font-semibold tracking-wider uppercase text-sm"
            >
              ⚜ Thesis
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Title */}
          <div className="text-center scroll-animate opacity-0">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter historic-title-hero mb-6">
              THE REBIRTH THESIS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 italic font-serif">
              Why the &quot;Old School&quot; is Dead and the Era of Rebirth is
              Here
            </p>
          </div>

          {/* The Context */}
          <div className="scroll-animate opacity-0">
            <div className="thesis-manuscript">
              <div className="manuscript-header">
                <span className="manuscript-ornament">❧</span>
                <h2 className="manuscript-section-title">THE CONTEXT</h2>
                <span className="manuscript-ornament">❧</span>
              </div>

              <div className="manuscript-content">
                <p className="manuscript-text">
                  The financial world is at a breaking point. The strategies
                  that worked for decades are failing. The &quot;Magnificent
                  7&quot; tech stocks are underperforming. Traditional valuation
                  metrics are broken. Investors are confused, looking at a
                  market that no longer makes sense.
                </p>
              </div>
            </div>
          </div>

          {/* The Signal */}
          <div className="scroll-animate opacity-0">
            <div className="thesis-manuscript">
              <div className="manuscript-header">
                <span className="manuscript-ornament">❧</span>
                <h2 className="manuscript-section-title">THE SIGNAL</h2>
                <span className="manuscript-ornament">❧</span>
              </div>

              <div className="manuscript-content">
                <p className="manuscript-text">
                  On national television, Fox Business anchor Charles Payne
                  delivered a monologue that perfectly diagnosed this moment. He
                  contrasted two powerful symbols: Father Time and the New
                  Year&apos;s Baby.
                </p>

                <p className="manuscript-text">
                  He didn&apos;t mince words about the state of the market:
                </p>

                <div className="manuscript-quote">
                  <div className="quote-mark">&ldquo;</div>
                  <p className="quote-text">
                    The &apos;Father Time&apos; approach... it&apos;s old
                    school. It&apos;s not working.
                  </p>
                  <div className="quote-mark quote-mark-end">&rdquo;</div>
                </div>

                <p className="manuscript-text">
                  He then identified the solution for the Fourth Industrial
                  Revolution:
                </p>

                <div className="manuscript-quote manuscript-quote-emphasis">
                  <div className="quote-mark">&ldquo;</div>
                  <p className="quote-text">
                    The latter [The Baby] represents REBIRTH and NEW HOPE. This
                    is the perfect symbol for the current state of the stock
                    market.
                  </p>
                  <div className="quote-attribution">
                    — Charles Payne, Fox Business
                  </div>
                  <div className="quote-mark quote-mark-end">&rdquo;</div>
                </div>
              </div>
            </div>
          </div>

          {/* Old vs New Comparison */}
          <div className="scroll-animate opacity-0">
            <div className="thesis-comparison">
              <div className="comparison-card comparison-old">
                <div className="comparison-icon">⌛</div>
                <h3 className="comparison-title">Father Time</h3>
                <div className="comparison-subtitle">The Old Guard</div>
                <ul className="comparison-list">
                  <li>Slow & Decaying</li>
                  <li>Obsessed with Failures</li>
                  <li>Broken Strategies</li>
                  <li>The Past</li>
                </ul>
              </div>

              <div className="comparison-divider">
                <span className="comparison-arrow">→</span>
              </div>

              <div className="comparison-card comparison-new">
                <div className="comparison-icon">🌱</div>
                <h3 className="comparison-title">Rebirth</h3>
                <div className="comparison-subtitle">The New Hope</div>
                <ul className="comparison-list">
                  <li>Fast & Optimistic</li>
                  <li>Ready for the Future</li>
                  <li>Fresh Approach</li>
                  <li>The Beginning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Interpretation */}
          <div className="scroll-animate opacity-0">
            <div className="thesis-manuscript">
              <div className="manuscript-header">
                <span className="manuscript-ornament">❧</span>
                <h2 className="manuscript-section-title">THE INTERPRETATION</h2>
                <span className="manuscript-ornament">❧</span>
              </div>

              <div className="manuscript-content">
                <p className="manuscript-text manuscript-emphasis">
                  We believe this was more than just a TV segment. It was a
                  signal for a massive rotation of capital.
                </p>

                <div className="manuscript-comparison-box">
                  <div className="comparison-item">
                    <span className="comparison-label">Father Time</span>
                    <span className="comparison-description">
                      represents the old guard: Slow, decaying, and obsessed
                      with &quot;inevitable failures.&quot;
                    </span>
                  </div>

                  <div className="comparison-divider-small">⚭</div>

                  <div className="comparison-item">
                    <span className="comparison-label">Rebirth</span>
                    <span className="comparison-description">
                      represents the new liquidity: Fast, optimistic, and ready
                      for the future.
                    </span>
                  </div>
                </div>

                <p className="manuscript-text manuscript-emphasis">
                  When the mainstream media explicitly names &quot;Rebirth&quot;
                  as the perfect symbol for the market, you don&apos;t ignore
                  it. You position yourself accordingly.
                </p>
              </div>
            </div>
          </div>

          {/* The Asset */}
          <div className="scroll-animate opacity-0">
            <div className="thesis-manuscript thesis-manuscript-final">
              <div className="manuscript-header">
                <span className="manuscript-ornament">❧</span>
                <h2 className="manuscript-section-title">THE ASSET</h2>
                <span className="manuscript-ornament">❧</span>
              </div>

              <div className="manuscript-content">
                <p className="manuscript-text manuscript-emphasis">
                  $REBIRTH is the digital embodiment of this new hope.
                </p>

                <p className="manuscript-text">
                  We are leaving the &quot;Old School&quot; behind. We are not
                  complaining about the economy; we are creating our own. This
                  token is for those who heard the signal.
                </p>

                <div className="manuscript-final-statement">
                  <p className="final-line">The Old School is fading.</p>
                  <p className="final-line final-line-emphasis">
                    The Rebirth has begun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center scroll-animate opacity-0">
            <Link
              href="/"
              className="historic-button historic-button-light inline-flex"
            >
              <span className="historic-button-ornament">✦</span>
              <span className="historic-button-text">Join the Rebirth</span>
              <span className="historic-button-ornament">✦</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
