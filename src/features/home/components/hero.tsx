"use client";
export function Hero() {
  const scrollToMakeup = () => {
    const section = document.getElementById("makeup-cosmetics");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="relative h-dvh w-full overflow-hidden">
        {/* Imagen de fondo */}

        {/* Overlay con gradiente para legibilidad */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Contenido principal */}
        <div className="absolute inset-0 z-20 flex items-end md:items-center">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-0">
            <div className="max-w-2xl space-y-6 animate-fadeSlideUp">
              {/* Etiqueta superior */}
              <div className="">
                <span
                  className="text-sm md:text-base font-light tracking-[0.3em] uppercase text-white/90 
                             border border-white/30 px-2 sm:px-6 py-2 backdrop-blur-sm
                             animate-fadeIn animation-delay-200"
                >
                  Professional Makeup
                </span>
              </div>

              {/* Nombre principal */}
              <h1 className="animate-fadeSlideUp animation-delay-300">
                <span
                  className="block text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-2
                             drop-shadow-2xl leading-none tracking-tight"
                >
                  Kristen
                </span>
                <span
                  className="block text-2xl md:text-3xl lg:text-4xl font-light text-white/80 
                             tracking-wider italic"
                >
                  Beauty & Model
                </span>
              </h1>

              {/* Descripción */}
              <p
                className="text-base md:text-lg text-white/90 font-light leading-relaxed max-w-90
                         animate-fadeSlideUp animation-delay-500"
              >
                Especialista certificada en makeup profesional, cosmética de
                lujo y creación de looks únicos para cada ocasión especial.
              </p>

              {/* CTA Button */}
              <div className="pt-4 animate-fadeSlideUp animation-delay-700">
                <button
                  onClick={scrollToMakeup}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 
                         bg-white/10 backdrop-blur-md border border-white/30
                         hover:bg-white/20 hover:border-white/50
                         transition-all duration-500 ease-out
                         overflow-hidden"
                >
                  {/* Efecto hover background */}
                  <span
                    className="absolute inset-0 bg-linear-to-r from-rose-500/20 to-pink-500/20 
                               translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  />

                  <span className="relative text-white font-light tracking-wide uppercase text-sm md:text-base">
                    Descubre mi colección
                  </span>

                  <svg
                    className="relative w-5 h-5 text-white transform group-hover:translate-x-2 
                           transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 animate-bounce animation-delay-1000">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs uppercase tracking-widest font-light">
              Scroll
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
