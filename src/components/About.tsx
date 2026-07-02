const storyActs = [
  {
    label: 'The need',
    text: 'In our community, too many children grow up without the basics: a safe home, a warm meal, and someone who believes in their future.',
  },
  {
    label: 'Our answer',
    text: 'Christ The Hope was born from one conviction: love in action changes lives. We opened our doors to be that love: steady, present, and real.',
  },
  {
    label: 'Our promise',
    text: 'Today we shelter, educate, feed, and walk alongside every child who walks through our gates: nurturing dreams and celebrating potential.',
  },
];

const values = [
  { title: 'Love & Care', description: 'Unconditional love and support', accent: 'bg-cth-pink' },
  { title: 'Education', description: 'Quality learning opportunities', accent: 'bg-cth-blue' },
  { title: 'Community', description: 'Built by caring hearts', accent: 'bg-cth-green' },
  { title: 'Empowerment', description: 'Building confidence for life', accent: 'bg-cth-orange' },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="container-site">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <div className="max-w-xl animate-fade-up">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cth-purple">
                Our Story
              </p>
              <h2 className="mb-4 text-3xl font-display font-bold leading-[1.05] text-cth-charcoal sm:text-4xl lg:text-5xl">
                Building futures with care that children can feel.
              </h2>
              <p className="text-base leading-relaxed text-cth-warm sm:text-lg">
                Christ The Hope Children's Center is a community-driven movement dedicated to
                transforming the lives of disadvantaged children with compassion, dignity, and hope.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-black/5 bg-cth-cream p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className={`mb-4 block h-1.5 w-10 rounded-full ${value.accent}`} />
                  <h4 className="font-semibold text-cth-charcoal">{value.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-cth-warm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-4">
              <div className="overflow-hidden rounded-2xl shadow-xl animate-fade-up">
                <img
                  src="/images/about-photo.jpeg"
                  alt="Children gathered outside Christ The Hope"
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg animate-fade-up">
                  <img
                    src="/images/group-photo.png"
                    alt="Christ The Hope community together"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg animate-fade-up">
                  <img
                    src="/images/about.jpeg"
                    alt="Children and caregivers gathered together outdoors"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-cth-cream p-4 shadow-sm sm:p-5">
              {storyActs.map((act, index) => (
                <div
                  key={act.label}
                  className="grid gap-3 border-b border-black/[0.08] py-4 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[9rem_1fr]"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cth-purple">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-cth-charcoal">{act.label}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-cth-warm sm:text-base">
                    {act.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
