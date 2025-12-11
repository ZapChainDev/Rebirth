"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface HolderData {
  address: string;
  balance: string;
  percentage: string;
  rank: number;
}

export default function WhalesPage() {
  const [holders, setHolders] = useState<HolderData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const TOKEN_ADDRESS = "8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump";

  useEffect(() => {
    async function fetchHolders() {
      try {
        setLoading(true);
        setError(null);

        // Use our internal API route to fetch holders
        const response = await fetch("/api/holders");
        const data = await response.json();

        if (!response.ok || data.error) {
          throw new Error(data.error || "Failed to fetch holder data");
        }

        setHolders(data.holders);
      } catch (err) {
        console.error("Error fetching holders:", err);
        setError("Unable to load whale data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchHolders();
  }, []);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Dark Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50"></div>

      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800/50">
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
              href="/whales"
              className="historic-nav-link text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 hamburger-btn"
            onClick={(e) => {
              const button = e.currentTarget;
              const menu = document.getElementById("mobile-menu-whales");
              if (menu) {
                if (
                  menu.classList.contains("mobile-menu-hidden") ||
                  menu.classList.contains("hidden")
                ) {
                  menu.classList.remove("mobile-menu-hidden", "hidden");
                  menu.classList.add("mobile-menu-enter");
                  button.classList.add("hamburger-open");
                  setTimeout(() => {
                    menu.classList.remove("mobile-menu-enter");
                  }, 300);
                } else {
                  menu.classList.add("mobile-menu-exit");
                  button.classList.remove("hamburger-open");
                  setTimeout(() => {
                    menu.classList.remove("mobile-menu-exit");
                    menu.classList.add("mobile-menu-hidden");
                  }, 300);
                }
              }
              button.blur();
            }}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu-whales"
          className="mobile-menu-hidden md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800/50"
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="https://x.com/RebirthNewHope"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xl text-center hover:text-gray-300 transition-colors"
              title="Follow us on X"
            >
              𝕏
            </a>
            <Link
              href="/"
              className="block text-gray-300 hover:text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
            >
              Home
            </Link>
            <Link
              href="/global"
              className="block text-gray-300 hover:text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
            >
              🌍 Global
            </Link>
            <Link
              href="/thesis"
              className="block text-gray-300 hover:text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
            >
              ⚜ Thesis
            </Link>
            <Link
              href="/whales"
              className="block text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
            >
              🐋 Whales
            </Link>
            <Link
              href="/memes"
              className="block text-gray-300 hover:text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
            >
              😂 Memes
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-wider historic-title mb-4">
              <span className="bg-gradient-to-r from-gray-500 via-white to-gray-500 text-transparent bg-clip-text">
                🐋 Whale Leaderboard
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 uppercase tracking-widest max-w-3xl mx-auto px-4">
              Top 10 holders commanding the depths
            </p>
            <div className="mt-6 text-xs sm:text-sm text-gray-500 font-mono break-all px-4">
              Token: {TOKEN_ADDRESS}
            </div>
          </div>

          {/* Leaderboard Table */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
              <p className="mt-4 text-gray-400 uppercase tracking-wider">
                Loading whale data...
              </p>
            </div>
          )}

          {error && !loading && (
            <div className="bg-red-950/20 border border-red-800/50 rounded-lg p-6 text-center">
              <p className="text-red-400 text-lg">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && holders.length > 0 && (
            <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800/50 bg-white/5">
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Wallet Address
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Balance
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">
                        % of Supply
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {holders.map((holder, index) => (
                      <tr
                        key={holder.address}
                        className={`border-b border-gray-800/30 hover:bg-white/5 transition-colors ${
                          index < 3 ? "bg-white/[0.02]" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {holder.rank === 1 && (
                              <span className="text-2xl">🥇</span>
                            )}
                            {holder.rank === 2 && (
                              <span className="text-2xl">🥈</span>
                            )}
                            {holder.rank === 3 && (
                              <span className="text-2xl">🥉</span>
                            )}
                            {holder.rank > 3 && (
                              <span className="text-lg font-bold text-gray-500">
                                #{holder.rank}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => copyToClipboard(holder.address)}
                            className="font-mono text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                            title="Click to copy"
                          >
                            <span className="hidden lg:inline">
                              {holder.address}
                            </span>
                            <span className="lg:hidden">
                              {formatAddress(holder.address)}
                            </span>
                            <svg
                              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-bold text-white">
                            {holder.balance}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold text-gray-300">
                            {holder.percentage}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-gray-800/30">
                {holders.map((holder) => (
                  <div
                    key={holder.address}
                    className="p-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {holder.rank === 1 && (
                          <span className="text-2xl">🥇</span>
                        )}
                        {holder.rank === 2 && (
                          <span className="text-2xl">🥈</span>
                        )}
                        {holder.rank === 3 && (
                          <span className="text-2xl">🥉</span>
                        )}
                        {holder.rank > 3 && (
                          <span className="text-base font-bold text-gray-500">
                            #{holder.rank}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => copyToClipboard(holder.address)}
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        📋 Copy
                      </button>
                    </div>
                    <div className="font-mono text-xs text-gray-400 mb-2 break-all">
                      {holder.address}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-gray-500 uppercase">
                          Balance
                        </div>
                        <div className="font-bold text-white">
                          {holder.balance}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 uppercase">
                          % Supply
                        </div>
                        <div className="font-semibold text-gray-300">
                          {holder.percentage}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Info */}
          <div className="mt-8 text-center space-y-4">
            <a
              href={`https://solscan.io/token/${TOKEN_ADDRESS}#holders`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors text-white uppercase tracking-wider text-sm font-semibold"
            >
              View Live Data on Solscan →
            </a>
            <p className="text-xs text-gray-600 uppercase tracking-wider">
              Click wallet addresses to copy • View full holder data on Solscan
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
