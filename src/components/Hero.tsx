const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-end sm:items-center overflow-hidden">
      <img
        src="/images/group-photo.png"
        alt="Children and staff at Christ The Hope Children's Center"
        className="absolute inset-0 w-full h-full object-cover object-[center_40%] sm:object-[center_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cth-purple-deep/95 via-cth-purple-deep/80 to-cth-purple-deep/50 sm:bg-gradient-to-r sm:from-cth-purple-deep/90 sm:via-cth-purple-deep/75 sm:to-cth-purple-deep/40" />

      <div className="relative z-10 container-site w-full pt-28 pb-20 sm:pt-32 sm:pb-24 lg:py-40">
        <div className="max-w-2xl">
          <p className="font-accent text-xl sm:text-2xl lg:text-3xl text-cth-pink mb-3 sm:mb-4">
            christ the hope
          </p>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.15] text-balance mb-4 sm:mb-6">
            Every child deserves a chance to thrive
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed mb-8 sm:mb-10 max-w-xl">
            A community-driven children's center in Nairobi, Kenya — providing shelter,
            education, and unwavering love to disadvantaged children.
          </p>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <a
              href="#donate"
              className="w-full xs:w-auto px-8 py-3.5 sm:py-4 bg-cth-pink hover:bg-cth-pink/90 text-white rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Give via M-Pesa
            </a>
            <a
              href="#about"
              className="w-full xs:w-auto px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold text-base transition-all duration-300 text-center backdrop-blur-sm"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <a href="#about" className="text-white/50 hover:text-white transition-colors" aria-label="Scroll down">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
