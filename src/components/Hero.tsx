import { siteConfig } from '../config/site';

const heroStats = [
  { value: siteConfig.impact.children, label: 'children cared for' },
  { value: siteConfig.impact.programs, label: 'core programs' },
  { value: siteConfig.impact.community, label: 'community led' },
];

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-black">
      <img
        src="/images/group-photo.png"
        alt="Children and staff at Christ The Hope Children's Center"
        className="absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-95 hero-photo-motion sm:object-[center_35%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.68)_44%,rgba(0,0,0,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_28%,rgba(255,255,255,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />

      <div className="relative z-10 container-site flex min-h-[100dvh] flex-col justify-end pt-28 pb-8 sm:pt-32 sm:pb-10 lg:pt-36">
        <div className="max-w-3xl pb-8 sm:pb-10 lg:pb-12 animate-fade-up">
          <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            Nairobi, Kenya
          </p>
          <h1 className="mb-5 max-w-4xl text-[clamp(2.9rem,7.5vw,6.4rem)] font-display font-bold leading-[0.94] text-white text-balance drop-shadow-2xl">
            Hope made practical, every single day.
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow sm:text-lg lg:text-xl">
            Christ The Hope Children's Center gives disadvantaged children a safe place to
            belong, learn, heal, and grow with dignity.
          </p>

          <div className="flex flex-col gap-3 xs:flex-row sm:gap-4">
            <a
              href="#donate"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-cth-charcoal shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 xs:w-auto"
            >
              Give via M-Pesa
            </a>
            <a
              href="#about"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/18 xs:w-auto"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="mb-4 grid max-w-3xl grid-cols-3 divide-x divide-white/12 border-y border-white/15 bg-black/22 text-white backdrop-blur-sm animate-fade-up sm:rounded-2xl sm:border sm:bg-white/10 sm:shadow-2xl lg:max-w-4xl">
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-2 py-4 text-left sm:px-5 sm:py-5">
              <div className="font-display text-2xl font-bold leading-none sm:text-3xl">{stat.value}</div>
              <div className="mt-2 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-white/65 sm:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
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
