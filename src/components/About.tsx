const storyActs = [
  {
    label: 'The need',
    text: 'In our community, too many children grow up without the basics — a safe home, a warm meal, and someone who believes in their future.',
    image: '/images/welcome-boy.png',
    alt: 'A child welcomed at Christ The Hope',
    portrait: true,
  },
  {
    label: 'Our answer',
    text: 'Christ The Hope was born from one conviction: love in action changes lives. We opened our doors to be that love — steady, present, and real.',
    image: '/images/welcome-boys.png',
    alt: 'Children welcomed at Christ The Hope',
    portrait: true,
  },
  {
    label: 'Our promise',
    text: 'Today we shelter, educate, feed, and walk alongside every child who walks through our gates — nurturing dreams and celebrating potential.',
    image: '/images/group-photo.png',
    alt: 'Christ The Hope community together',
    portrait: false,
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
    <section id="about" className="section-padding bg-cth-cream">
      <div className="container-site">
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">
            Our Story
          </p>
          <h2 className="section-heading leading-tight mb-4 sm:mb-6">
            Building futures, <span className="text-cth-purple">one child</span> at a time
          </h2>
          <p className="text-base sm:text-lg text-cth-warm leading-relaxed">
            Christ The Hope Children's Center is a community-driven movement dedicated to
            transforming the lives of disadvantaged children — with compassion, dignity, and hope.
          </p>
        </div>

        <div className="space-y-14 sm:space-y-20 lg:space-y-28">
          {storyActs.map((act, index) => (
            <div
              key={act.label}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="space-y-3 sm:space-y-4 order-2 lg:order-none">
                <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-wider text-cth-purple bg-cth-purple-tint px-3 sm:px-4 py-1.5 rounded-full">
                  {act.label}
                </span>
                <p className="text-lg sm:text-xl lg:text-2xl text-cth-charcoal leading-relaxed font-display">
                  {act.text}
                </p>
              </div>
              <div className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl order-1 lg:order-none ${
                act.portrait ? 'aspect-[3/4] max-w-sm mx-auto lg:max-w-none lg:mx-0' : 'aspect-[4/3]'
              }`}>
                <img
                  src={act.image}
                  alt={act.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-20 lg:mt-28">
          <h3 className="text-xl sm:text-2xl font-display mb-6 sm:mb-8 text-center">What guides us</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className={`bg-white rounded-xl p-5 sm:p-6 border-l-4 ${value.border} shadow-sm`}
              >
                <h4 className={`font-semibold mb-1 sm:mb-2 ${value.titleColor}`}>
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
