"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  size: number;
}

interface FlagData {
  lat: number;
  lng: number;
  flag: string;
  country: string;
}

export default function RebirthGlobal() {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState({ features: [] });
  const [markers, setMarkers] = useState<any[]>([]);
  const [flagMarkers, setFlagMarkers] = useState<FlagData[]>([]);
  const [globeSize, setGlobeSize] = useState(700);

  useEffect(() => {
    // Handle responsive globe size
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setGlobeSize(300);
      } else if (width < 768) {
        setGlobeSize(400);
      } else if (width < 1024) {
        setGlobeSize(550);
      } else {
        setGlobeSize(700);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Load country data
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then(setCountries);

    // Create hex markers for major countries showing Rebirth global presence
    const countryMarkers = [
      // Americas
      { lat: 37.09, lng: -95.71, name: "🇺🇸 United States", size: 0.8 },
      { lat: 56.13, lng: -106.35, name: "🇨🇦 Canada", size: 0.6 },
      { lat: 23.63, lng: -102.55, name: "🇲🇽 Mexico", size: 0.5 },
      { lat: -14.24, lng: -51.93, name: "🇧🇷 Brazil", size: 0.7 },
      { lat: -38.42, lng: -63.62, name: "🇦🇷 Argentina", size: 0.5 },
      { lat: -35.68, lng: -71.54, name: "🇨🇱 Chile", size: 0.4 },
      { lat: 4.57, lng: -74.3, name: "🇨🇴 Colombia", size: 0.4 },
      // Europe
      { lat: 55.38, lng: -3.44, name: "🇬🇧 United Kingdom", size: 0.6 },
      { lat: 51.17, lng: 10.45, name: "🇩🇪 Germany", size: 0.6 },
      { lat: 46.23, lng: 2.21, name: "🇫🇷 France", size: 0.6 },
      { lat: 41.87, lng: 12.57, name: "🇮🇹 Italy", size: 0.5 },
      { lat: 40.46, lng: -3.75, name: "🇪🇸 Spain", size: 0.5 },
      { lat: 52.13, lng: 5.29, name: "🇳🇱 Netherlands", size: 0.4 },
      { lat: 60.13, lng: 18.64, name: "🇸🇪 Sweden", size: 0.4 },
      { lat: 52.23, lng: 21.01, name: "🇵🇱 Poland", size: 0.4 },
      { lat: 61.52, lng: 105.32, name: "🇷🇺 Russia", size: 0.8 },
      { lat: 39.93, lng: 32.85, name: "🇹🇷 Turkey", size: 0.5 },
      // Asia
      { lat: 35.86, lng: 104.2, name: "🇨🇳 China", size: 0.8 },
      { lat: 20.59, lng: 78.96, name: "🇮🇳 India", size: 0.8 },
      { lat: 36.2, lng: 138.25, name: "🇯🇵 Japan", size: 0.6 },
      { lat: 35.91, lng: 127.77, name: "🇰🇷 South Korea", size: 0.5 },
      { lat: -0.79, lng: 113.92, name: "🇮🇩 Indonesia", size: 0.6 },
      { lat: 15.87, lng: 100.99, name: "🇹🇭 Thailand", size: 0.5 },
      { lat: 12.88, lng: 121.77, name: "🇵🇭 Philippines", size: 0.5 },
      { lat: 14.06, lng: 108.28, name: "🇻🇳 Vietnam", size: 0.5 },
      { lat: 4.21, lng: 101.98, name: "🇲🇾 Malaysia", size: 0.4 },
      { lat: 1.35, lng: 103.82, name: "🇸🇬 Singapore", size: 0.3 },
      { lat: 23.42, lng: 53.85, name: "🇦🇪 UAE", size: 0.4 },
      { lat: 23.89, lng: 45.08, name: "🇸🇦 Saudi Arabia", size: 0.5 },
      { lat: 31.05, lng: 34.85, name: "🇮🇱 Israel", size: 0.3 },
      { lat: 30.38, lng: 69.35, name: "🇵🇰 Pakistan", size: 0.5 },
      { lat: 23.81, lng: 90.41, name: "🇧🇩 Bangladesh", size: 0.4 },
      // Africa
      { lat: 26.82, lng: 30.8, name: "🇪🇬 Egypt", size: 0.5 },
      { lat: 9.08, lng: 8.68, name: "🇳🇬 Nigeria", size: 0.6 },
      { lat: -30.56, lng: 22.94, name: "🇿🇦 South Africa", size: 0.5 },
      { lat: -1.29, lng: 36.82, name: "🇰🇪 Kenya", size: 0.4 },
      { lat: 31.79, lng: -7.09, name: "🇲🇦 Morocco", size: 0.4 },
      { lat: 9.15, lng: 40.49, name: "🇪🇹 Ethiopia", size: 0.4 },
      { lat: 7.95, lng: -1.03, name: "🇬🇭 Ghana", size: 0.3 },
      // Oceania
      { lat: -25.27, lng: 133.78, name: "🇦🇺 Australia", size: 0.7 },
      { lat: -40.9, lng: 174.89, name: "🇳🇿 New Zealand", size: 0.4 },
      { lat: -17.68, lng: 168.42, name: "🇫🇯 Fiji", size: 0.2 },
    ];

    setMarkers(countryMarkers);

    // Flag markers for major countries with ISO country codes for flag images
    const flags: FlagData[] = [
      { lat: 37.09, lng: -95.71, flag: "us", country: "USA" },
      { lat: 56.13, lng: -106.35, flag: "ca", country: "Canada" },
      { lat: -14.24, lng: -51.93, flag: "br", country: "Brazil" },
      { lat: 55.38, lng: -3.44, flag: "gb", country: "UK" },
      { lat: 51.17, lng: 10.45, flag: "de", country: "Germany" },
      { lat: 46.23, lng: 2.21, flag: "fr", country: "France" },
      { lat: 61.52, lng: 105.32, flag: "ru", country: "Russia" },
      { lat: 35.86, lng: 104.2, flag: "cn", country: "China" },
      { lat: 20.59, lng: 78.96, flag: "in", country: "India" },
      { lat: 36.2, lng: 138.25, flag: "jp", country: "Japan" },
      { lat: -25.27, lng: 133.78, flag: "au", country: "Australia" },
      { lat: -30.56, lng: 22.94, flag: "za", country: "South Africa" },
      { lat: 9.08, lng: 8.68, flag: "ng", country: "Nigeria" },
      { lat: 23.63, lng: -102.55, flag: "mx", country: "Mexico" },
      { lat: -38.42, lng: -63.62, flag: "ar", country: "Argentina" },
      { lat: 35.91, lng: 127.77, flag: "kr", country: "South Korea" },
      { lat: -0.79, lng: 113.92, flag: "id", country: "Indonesia" },
      { lat: 23.89, lng: 45.08, flag: "sa", country: "Saudi Arabia" },
      { lat: 12.88, lng: 121.77, flag: "ph", country: "Philippines" },
    ];
    setFlagMarkers(flags);

    // Auto-rotate the globe
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }

    // Scroll animation for sections
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
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Stars Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://unpkg.com/three-globe/example/img/night-sky.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 z-0"></div>

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
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link
              href="/"
              className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-xs sm:text-sm"
            >
              Home
            </Link>
            <Link
              href="/global"
              className="historic-nav-link text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-xs sm:text-sm"
            >
              Global
            </Link>
            <Link
              href="/thesis"
              className="historic-nav-link text-gray-300 hover:text-white transition-colors duration-300 font-semibold tracking-wider uppercase text-xs sm:text-sm"
            >
              Thesis
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Hero Title */}
          <div className="text-center space-y-6 scroll-animate opacity-0">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter historic-title-hero fire-text">
              REBIRTH GLOBAL
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300 uppercase">
              A Worldwide Movement
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto italic">
              From every corner of the earth, we rise together
            </p>
          </div>

          {/* 3D Globe Container */}
          <div className="max-w-6xl mx-auto scroll-animate opacity-0">
            <div className="globe-container-3d">
              <div className="globe-header">
                <span className="globe-ornament">🌍</span>
                <h2 className="globe-title">The Global Rebirth</h2>
                <span className="globe-ornament">🌎</span>
              </div>

              <div className="globe-wrapper-3d">
                <Globe
                  ref={globeRef}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  backgroundColor="rgba(0,0,0,0)"
                  hexBinPointsData={markers}
                  hexBinPointLat={(d: object) => (d as MarkerData).lat}
                  hexBinPointLng={(d: object) => (d as MarkerData).lng}
                  hexBinPointWeight={(d: object) => (d as MarkerData).size}
                  hexAltitude={(d: object) =>
                    (d as { sumWeight: number }).sumWeight * 0.015
                  }
                  hexBinResolution={4}
                  hexTopColor={() => "#ffaa00"}
                  hexSideColor={() => "#ff8800"}
                  hexLabel={(d) => {
                    const points = d.points as any[];
                    return points.map((p) => p.name).join("<br/>");
                  }}
                  polygonsData={countries.features}
                  polygonCapColor={() => "rgba(200, 200, 200, 0.2)"}
                  polygonSideColor={() => "rgba(100, 100, 100, 0.05)"}
                  polygonStrokeColor={() => "#444"}
                  polygonAltitude={0.001}
                  atmosphereColor="rgba(100, 180, 255, 0.7)"
                  atmosphereAltitude={0.15}
                  htmlElementsData={flagMarkers}
                  htmlLat={(d: object) => (d as FlagData).lat}
                  htmlLng={(d: object) => (d as FlagData).lng}
                  htmlAltitude={0.05}
                  htmlElement={(d: object) => {
                    const flag = d as FlagData;
                    const el = document.createElement("div");
                    el.innerHTML = `
                      <div style="display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center;">
                        <img src="https://flagcdn.com/w40/${flag.flag}.png" alt="${flag.country}" style="width: 28px; height: auto; border-radius: 3px; box-shadow: 0 2px 8px rgba(0,0,0,0.6);" />
                        <span style="font-size: 8px; font-weight: bold; color: #ff8c00; text-shadow: 0 0 6px #ff6600, 0 0 12px #ff4500, 0 0 18px #ff4500; font-family: sans-serif; letter-spacing: 0.5px;">REBIRTH</span>
                        <span style="font-size: 7px; font-weight: 600; color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.8); font-family: sans-serif; white-space: nowrap;">${flag.country}</span>
                      </div>
                    `;
                    el.style.pointerEvents = "none";
                    return el;
                  }}
                  onGlobeReady={() => {
                    if (globeRef.current) {
                      globeRef.current.controls().autoRotate = true;
                      globeRef.current.controls().autoRotateSpeed = 0.5;
                    }
                  }}
                  width={globeSize}
                  height={globeSize}
                  enablePointerInteraction={true}
                />
              </div>

              <div className="globe-footer">
                <p className="globe-caption">
                  🌐 Join the Global Movement • Rebirth is Worldwide 🌐
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto scroll-animate opacity-0">
            <div className="global-stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">195+</div>
              <div className="stat-label">Represent Your Country</div>
            </div>

            <div className="global-stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">Global</div>
              <div className="stat-label">Community United</div>
            </div>

            <div className="global-stat-card">
              <div className="stat-icon">🚀</div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Worldwide Trading</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center scroll-animate opacity-0">
            <a
              href="https://x.com/RebirthNewHope"
              target="_blank"
              rel="noopener noreferrer"
              className="historic-button historic-button-green"
            >
              <span className="historic-button-ornament">✦</span>
              <span className="historic-button-text">JOIN THE MOVEMENT</span>
              <span className="historic-button-ornament">✦</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
