'use client';

import SearchBar from './searchBar';

const Hero = () => {

  return (
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2000"
              alt="Interior"
              className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Znajdź swoje wymarzone miejsce do życia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Tysiące zweryfikowanych ofert mieszkań i domów w całej Polsce. Prosty proces wynajmu, bez ukrytych kosztów.
          </p>

          {/* Search Bar */}
          <SearchBar />
        </div>
      </header>
  );
}

export default Hero;