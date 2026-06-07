const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src="/images/about_1.jpeg"
        alt="Children at Christ The Hope Children's Center"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cth-purple-deep/90 via-cth-purple-deep/75 to-cth-purple-deep/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          <p className="font-accent text-2xl sm:text-3xl text-cth-pink mb-4">
            christ the hope
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight text-balance mb-6">
            Every child deserves a chance to thrive
          </h1>
          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
            A community-driven children's center in Nairobi, Kenya — providing shelter,
            education, and unwavering love to disadvantaged children.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#donate"
              className="px-8 py-4 bg-cth-pink hover:bg-cth-pink/90 text-white rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl text-center"
            >
              Give via M-Pesa
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold text-base transition-all duration-300 text-center backdrop-blur-sm"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
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
