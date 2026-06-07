const storyActs = [
  {
    label: 'The need',
    text: 'In our community, too many children grow up without the basics — a safe home, a warm meal, and someone who believes in their future.',
    image: '/images/about-photo.jpeg',
    alt: 'Children gathering at Christ The Hope',
  },
  {
    label: 'Our answer',
    text: 'Christ The Hope was born from one conviction: love in action changes lives. We opened our doors to be that love — steady, present, and real.',
    image: '/images/hero_1.jpeg',
    alt: 'A child at Christ The Hope',
  },
  {
    label: 'Our promise',
    text: 'Today we shelter, educate, feed, and walk alongside every child who walks through our gates — nurturing dreams and celebrating potential.',
    image: '/images/hero_2.jpeg',
    alt: 'Community at Christ The Hope',
  },
];

const values = [
  { title: 'Love & Care', description: 'Unconditional love and support', border: 'border-cth-pink', titleColor: 'text-cth-pink' },
  { title: 'Education', description: 'Quality learning opportunities', border: 'border-cth-blue', titleColor: 'text-cth-blue' },
  { title: 'Community', description: 'Built by caring hearts', border: 'border-cth-green', titleColor: 'text-cth-green' },
  { title: 'Empowerment', description: 'Building confidence for life', border: 'border-cth-orange', titleColor: 'text-cth-orange' },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-cth-cream">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">
            Our Story
          </p>
          <h2 className="text-4xl lg:text-5xl font-display text-balance leading-tight mb-6">
            Building futures, <span className="text-cth-purple">one child</span> at a time
          </h2>
          <p className="text-lg text-cth-warm leading-relaxed">
            Christ The Hope Children's Center is a community-driven movement dedicated to
            transforming the lives of disadvantaged children — with compassion, dignity, and hope.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {storyActs.map((act, index) => (
            <div
              key={act.label}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="space-y-4">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cth-purple bg-cth-purple-tint px-4 py-1.5 rounded-full">
                  {act.label}
                </span>
                <p className="text-xl lg:text-2xl text-cth-charcoal leading-relaxed font-display">
                  {act.text}
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={act.image}
                  alt={act.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 lg:mt-28">
          <h3 className="text-2xl font-display mb-8 text-center">What guides us</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible">
            {values.map((value) => (
              <div
                key={value.title}
                className={`flex-shrink-0 w-64 lg:w-auto snap-start bg-white rounded-xl p-6 border-l-4 ${value.border} shadow-sm`}
              >
                <h4 className={`font-semibold mb-2 ${value.titleColor}`}>
                  {value.title}
                </h4>
                <p className="text-sm text-cth-warm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
