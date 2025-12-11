"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MemesPage() {
  const [selectedMeme, setSelectedMeme] = useState<number | null>(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const memes = [
    { id: 1, src: "/meme1.jpg", name: "Meme 1" },
    { id: 2, src: "/meme2.jpg", name: "Meme 2" },
    { id: 3, src: "/meme3.jpg", name: "Meme 3" },
    { id: 4, src: "/meme4.jpg", name: "Meme 4" },
    { id: 5, src: "/meme5.jpg", name: "Meme 5" },
    { id: 6, src: "/meme6.jpg", name: "Meme 6" },
    { id: 7, src: "/meme7.jpg", name: "Meme 7" },
  ];

  const suggestions = [
    { top: "WHEN DEV ACTUALLY", bottom: "STAYS IN THE PROJECT" },
    { top: "NO RUGS HERE", bottom: "JUST REBIRTH ENERGY" },
    { top: "TRANSPARENCY?", bottom: "WE INVENTED IT" },
    { top: "GHOST DEV?", bottom: "NOT IN THIS TIMELINE" },
    { top: "OTHER COINS:", bottom: "REBIRTH: STILL HERE" },
    { top: "RUG PULLERS SHAKING", bottom: "WHEN THEY SEE REBIRTH" },
    { top: "THEY SAID BUY THE DIP", bottom: "I BOUGHT THE REBIRTH" },
    { top: "CHECKING WALLET", bottom: "REBIRTH STILL THERE" },
  ];

  const downloadMeme = () => {
    if (selectedMeme === null) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    const meme = memes.find((m) => m.id === selectedMeme);
    if (!meme) return;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image
      ctx.drawImage(img, 0, 0);

      // Set text properties
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 3;
      ctx.textAlign = "center";
      ctx.font = "bold 48px Impact, sans-serif";

      // Draw top text
      if (topText) {
        const topY = 60;
        ctx.strokeText(topText.toUpperCase(), canvas.width / 2, topY);
        ctx.fillText(topText.toUpperCase(), canvas.width / 2, topY);
      }

      // Draw bottom text
      if (bottomText) {
        const bottomY = canvas.height - 30;
        ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, bottomY);
        ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, bottomY);
      }

      // Download
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `rebirth-meme-${Date.now()}.jpg`;
        a.click();
        URL.revokeObjectURL(url);
      });
    };

    img.src = meme.src;
  };

  const applyTemplate = (template: { top: string; bottom: string }) => {
    setTopText(template.top);
    setBottomText(template.bottom);
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
              className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
            >
              🐋 Whales
            </Link>
            <Link
              href="/memes"
              className="historic-nav-link text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
            >
              😂 Memes
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 hamburger-btn"
            onClick={(e) => {
              const button = e.currentTarget;
              const menu = document.getElementById("mobile-menu-memes");
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
          id="mobile-menu-memes"
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
              className="block text-gray-300 hover:text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
            >
              🐋 Whales
            </Link>
            <Link
              href="/memes"
              className="block text-white transition-colors font-semibold tracking-wider uppercase text-center py-2"
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
                😂 Meme Generator
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 uppercase tracking-widest max-w-3xl mx-auto px-4">
              No Rugs • No Ghost Devs • Pure Transparency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Meme Selection & Preview */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
                  Choose Your Template
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {memes.map((meme) => (
                    <button
                      key={meme.id}
                      onClick={() => setSelectedMeme(meme.id)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedMeme === meme.id
                          ? "border-white scale-105"
                          : "border-gray-700 hover:border-gray-500"
                      }`}
                    >
                      <Image
                        src={meme.src}
                        alt={meme.name}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview */}
              {selectedMeme && (
                <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
                    Preview
                  </h2>
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={memes.find((m) => m.id === selectedMeme)?.src || ""}
                      alt="Selected meme"
                      fill
                      className="object-cover"
                    />
                    {topText && (
                      <div className="absolute top-4 left-0 right-0 text-center">
                        <span
                          className="text-white font-black text-2xl sm:text-3xl md:text-4xl uppercase"
                          style={{
                            textShadow:
                              "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                            fontFamily: "Impact, sans-serif",
                          }}
                        >
                          {topText}
                        </span>
                      </div>
                    )}
                    {bottomText && (
                      <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span
                          className="text-white font-black text-2xl sm:text-3xl md:text-4xl uppercase"
                          style={{
                            textShadow:
                              "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                            fontFamily: "Impact, sans-serif",
                          }}
                        >
                          {bottomText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Text Inputs & Suggestions */}
            <div className="space-y-6">
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
                  Add Your Text
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">
                      Top Text
                    </label>
                    <input
                      type="text"
                      value={topText}
                      onChange={(e) => setTopText(e.target.value)}
                      placeholder="WHEN DEV ACTUALLY..."
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-gray-400">
                      Bottom Text
                    </label>
                    <input
                      type="text"
                      value={bottomText}
                      onChange={(e) => setBottomText(e.target.value)}
                      placeholder="STAYS IN THE PROJECT"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                  <button
                    onClick={downloadMeme}
                    disabled={!selectedMeme || (!topText && !bottomText)}
                    className="w-full px-6 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Download Meme
                  </button>
                </div>
              </div>

              {/* Suggestions */}
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider">
                  Quick Templates
                </h2>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => applyTemplate(suggestion)}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 hover:border-white rounded-lg text-left transition-colors group"
                    >
                      <div className="text-sm text-gray-400 group-hover:text-white">
                        {suggestion.top}
                      </div>
                      <div className="text-sm text-gray-400 group-hover:text-white">
                        {suggestion.bottom}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-600 uppercase tracking-wider">
              Share your memes with #RebirthMemes on X
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
