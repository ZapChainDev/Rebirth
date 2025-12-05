import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="max-w-4xl w-full text-center space-y-12 relative z-10 animate-fadeIn">
        {/* Main Title */}
        <div className="space-y-4 animate-slideDown">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight transform hover:scale-105 transition-transform duration-500" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
            REBIRTH
          </h1>
          <h2 className="text-4xl md:text-6xl font-light tracking-widest">AND NEW HOPE</h2>
        </div>

        {/* Banner Image */}
        <div className="w-full flex justify-center py-8 animate-fadeIn">
          <div className="relative group">
            <div className="absolute -inset-1 bg-black blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <Image
              src="/Rebirth.png"
              alt="Rebirth and New Hope"
              width={600}
              height={300}
              className="relative w-full max-w-md h-auto border-4 border-black transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto animate-expandWidth"></div>

        {/* Message */}
        <div className="space-y-6 animate-fadeIn">
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 hover:opacity-100 transition-opacity">
            Stop constantly complaining about the market.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed opacity-80 hover:opacity-100 transition-opacity">
            Stop guessing about inevitable failures.
          </p>
          <p className="text-2xl md:text-3xl font-semibold mt-8 bg-black text-white px-6 py-4 inline-block transform hover:scale-105 transition-transform duration-300">
            Start embracing the current opportunities.
          </p>
        </div>

        {/* Bottom Text */}
        <div className="pt-12">
          <p className="text-lg md:text-xl tracking-widest uppercase border-b-4 border-black inline-block pb-2 font-bold">
            This is the time
          </p>
        </div>

        {/* YouTube Video */}
        <div className="pt-8 animate-fadeIn">
          <div className="aspect-video w-full max-w-2xl mx-auto border-4 border-black shadow-2xl hover:shadow-3xl transition-shadow duration-300">
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

        {/* Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn">
          <a
            href="https://x.com/rebirthonsolana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg md:text-xl font-bold border-4 border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 min-w-[220px] transform hover:scale-110 hover:shadow-lg"
          >
            FOLLOW ON X
          </a>
          <a
            href="https://x.com/i/communities/1996862512046719448"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg md:text-xl font-bold border-4 border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 min-w-[220px] transform hover:scale-110 hover:shadow-lg"
          >
            JOIN COMMUNITY
          </a>
        </div>

        {/* Contract Address */}
        <div className="pt-8 border-t-4 border-black mt-12 animate-fadeIn">
          <p className="text-sm md:text-base text-black uppercase tracking-widest mb-4 font-bold">
            Contract Address
          </p>
          <code className="text-xs md:text-sm font-mono bg-black text-white px-6 py-3 inline-block break-all border-2 border-white hover:bg-white hover:text-black hover:border-black transition-colors duration-300 cursor-pointer">
            8mgM8w9BDeZvL1pm86xPDvPw9XHL3vwXkFBqU693pump
          </code>
        </div>
      </div>
    </main>
  );
}
