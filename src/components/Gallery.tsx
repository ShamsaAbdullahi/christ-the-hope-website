import { useEffect, useState } from 'react';

const photos = [
  { src: '/images/group-photo.png', alt: 'Christ The Hope community in branded shirts' },
  { src: '/images/about-photo.jpeg', alt: 'Children gathered outside Christ The Hope' },
  { src: '/images/about.jpeg', alt: 'Children and caregivers gathered outdoors' },
  { src: '/images/about_1.jpeg', alt: 'Children and caregivers together at Christ The Hope' },
  { src: '/images/hero-photo-2.jpeg', alt: 'Christ The Hope children standing together outdoors' },
  { src: '/images/hero_2.jpeg', alt: 'Community support at Christ The Hope' },
  { src: '/images/graduation-cbc-centre.png', alt: 'Graduates and caregivers at CBC Centre graduation ceremony' },
  { src: '/images/graduation-junior-secondary.png', alt: 'Young graduates celebrating in front of Junior Secondary school' },
  { src: '/images/WhatsApp Image 2026-04-16 at 15.12.23.jpeg', alt: 'Children gathered together at a Christ The Hope event' },
  { src: '/images/WhatsApp Image 2026-04-16 at 15.12.26 (1).jpeg', alt: 'Children seated together during a Christ The Hope activity' },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];
  const previousPhoto = photos[(activeIndex - 1 + photos.length) % photos.length];
  const nextPhoto = photos[(activeIndex + 1) % photos.length];

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current === photos.length - 1 ? 0 : current + 1));
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="overflow-hidden bg-[#141114] py-14 text-white sm:py-20 lg:py-28">
      <div className="container-site">
        <div className="mb-9 grid gap-4 lg:mb-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(18rem,0.44fr)] lg:items-end">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cth-pink">
              Their Faces, Their Future
            </p>
            <h2 className="text-3xl font-display font-bold leading-[1.05] text-white sm:text-4xl lg:text-6xl">
              A moving portrait of the community your generosity supports.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/62 lg:justify-self-end">
            Each frame carries a small piece of the daily work: safety, school, meals,
            mentorship, celebration, and belonging.
          </p>
        </div>

        <div className="relative isolate">
          <div className="absolute -left-16 top-10 hidden h-64 w-64 rounded-full bg-cth-pink/20 blur-3xl lg:block" />
          <div className="absolute -right-16 bottom-10 hidden h-72 w-72 rounded-full bg-cth-blue/15 blur-3xl lg:block" />

          <div className="relative grid gap-5 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-stretch">
            <div className="relative min-h-[25rem] sm:min-h-[34rem] lg:min-h-[39rem]">
              <div className="absolute left-0 top-8 hidden w-[34%] overflow-hidden rounded-2xl opacity-45 shadow-2xl lg:block">
                <img
                  src={previousPhoto.src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale-[20%]"
                />
              </div>
              <div className="absolute right-0 top-20 hidden w-[34%] overflow-hidden rounded-2xl opacity-45 shadow-2xl lg:block">
                <img
                  src={nextPhoto.src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale-[20%]"
                />
              </div>

              <div className="relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] bg-black shadow-2xl ring-1 ring-white/10">
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
                  <img
                    key={activePhoto.src}
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    className="h-full w-full object-cover animate-carousel-photo"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="max-w-2xl text-sm font-medium text-white/92 sm:text-base">
                    {activePhoto.alt}
                  </p>
                </div>
              </div>
            </div>

            <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Now showing</p>
                <p className="mt-4 font-display text-5xl leading-none text-white">
                  {String(activeIndex + 1).padStart(2, '0')}
                  <span className="text-2xl text-white/28">/{String(photos.length).padStart(2, '0')}</span>
                </p>
                <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/15">
                  <span key={activePhoto.src} className="block h-full rounded-full bg-cth-pink carousel-progress" />
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.08] p-3 shadow-2xl backdrop-blur-md">
                <div className="relative overflow-hidden rounded-[1rem]">
                  <img
                    src={nextPhoto.src}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                    Up next
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/62">
                  The carousel advances automatically so the gallery feels alive without asking visitors to work for it.
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-7 grid grid-cols-5 gap-2 sm:grid-cols-10" aria-label="Gallery progress">
            {photos.map((photo, index) => (
              <span
                key={photo.src}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeIndex === index ? 'bg-cth-pink' : 'bg-white/16'
                }`}
                aria-label={`Gallery photo ${index + 1}${activeIndex === index ? ' active' : ''}`}
              />
            ))}
          </div>

          <div className="mt-8 flex w-max gap-3 gallery-marquee" aria-hidden="true">
            {[...photos, ...photos].map((photo, index) => (
              <div key={`${photo.src}-${index}`} className="w-36 flex-none overflow-hidden rounded-xl opacity-55 transition-opacity duration-300 hover:opacity-90 sm:w-52">
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
