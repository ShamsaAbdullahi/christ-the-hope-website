const photos = [
  { src: '/images/about_1.jpeg', alt: 'Children gathering in a circle' },
  { src: '/images/hero_1.jpeg', alt: 'Child at Christ The Hope' },
  { src: '/images/hero_2.jpeg', alt: 'Community support' },
  { src: '/images/about-photo.jpeg', alt: 'Children at the center' },
  { src: '/images/about.jpeg', alt: 'Daily life at Christ The Hope' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 lg:py-32 bg-cth-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">
          Their Faces, Their Future
        </p>
        <h2 className="text-4xl lg:text-5xl font-display text-balance max-w-2xl">
          The children your generosity supports
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 sm:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="flex-shrink-0 w-72 sm:w-80 lg:w-96 snap-start"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
