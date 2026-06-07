const photos = [
  { src: '/images/group-photo.png', alt: 'Christ The Hope community in branded shirts' },
  { src: '/images/welcome-boys.png', alt: 'Two children welcomed at Christ The Hope' },
  { src: '/images/welcome-boy.png', alt: 'A smiling child at Christ The Hope' },
  { src: '/images/about_1.jpeg', alt: 'Children gathering in a circle' },
  { src: '/images/hero_1.jpeg', alt: 'Child at Christ The Hope' },
  { src: '/images/hero_2.jpeg', alt: 'Community support at Christ The Hope' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-cth-cream overflow-hidden">
      <div className="container-site mb-8 sm:mb-12">
        <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">
          Their Faces, Their Future
        </p>
        <h2 className="section-heading max-w-2xl">
          The children your generosity supports
        </h2>
        <p className="text-sm text-cth-warm mt-3 lg:hidden">Swipe to see more →</p>
      </div>

      {/* Mobile & tablet: horizontal scroll */}
      <div className="lg:hidden flex gap-3 sm:gap-4 overflow-x-auto pb-4 px-4 sm:px-6 md:px-8 snap-x snap-mandatory scrollbar-hide scroll-pl-4">
        {photos.map((photo) => (
          <div key={photo.src} className="flex-shrink-0 w-[75vw] xs:w-64 sm:w-72 snap-start">
            <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden lg:grid container-site grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.src} className="group">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
