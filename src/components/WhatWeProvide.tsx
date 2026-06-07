const services = [
  {
    title: 'Safe Shelter',
    description: 'A warm, secure home where children feel protected, loved, and part of a family.',
    impact: 'Your gift keeps a child safe tonight',
    color: 'purple',
  },
  {
    title: 'Quality Education',
    description: 'Access to excellent schooling, tutoring support, and resources to excel academically.',
    impact: 'Your gift puts books in their hands',
    color: 'blue',
  },
  {
    title: 'Healthcare',
    description: 'Regular medical check-ups, treatment when needed, and health education for wellbeing.',
    impact: 'Your gift covers a health check-up',
    color: 'pink',
  },
  {
    title: 'Nutrition',
    description: 'Three nutritious meals daily, ensuring every child grows healthy and strong.',
    impact: 'Your gift feeds a child for a day',
    color: 'green',
  },
  {
    title: 'Emotional Support',
    description: 'Counseling, mentorship, and a nurturing environment for emotional growth.',
    impact: 'Your gift funds a counseling session',
    color: 'orange',
  },
  {
    title: 'Life Skills',
    description: 'Training in essential skills to prepare children for independent, successful lives.',
    impact: 'Your gift builds skills for their future',
    color: 'blue',
  },
];

const colorMap: Record<string, { icon: string; border: string }> = {
  purple: { icon: 'bg-cth-purple-tint text-cth-purple', border: 'border-cth-purple/20' },
  blue: { icon: 'bg-cth-blue/10 text-cth-blue', border: 'border-cth-blue/20' },
  pink: { icon: 'bg-cth-pink-tint text-cth-pink', border: 'border-cth-pink/20' },
  green: { icon: 'bg-cth-green/10 text-cth-green', border: 'border-cth-green/20' },
  orange: { icon: 'bg-cth-orange/10 text-cth-orange', border: 'border-cth-orange/20' },
};

const WhatWeProvide = () => {
  return (
    <section id="what-we-do" className="section-padding bg-white">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">
            What We Provide
          </p>
          <h2 className="section-heading mb-4 sm:mb-6">
            Meeting every need with love
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-cth-warm leading-relaxed">
            From shelter to education, healthcare to hope — we ensure every child has
            what they need to thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.title}
                className={`bg-cth-cream rounded-xl sm:rounded-2xl p-5 sm:p-8 border ${colors.border} hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 sm:mb-5 ${colors.icon}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-display mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-cth-warm leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                <p className="text-sm font-medium text-cth-purple">{service.impact}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <a
            href="#donate"
            className="inline-flex items-center justify-center w-full xs:w-auto px-8 py-3.5 sm:py-4 bg-cth-pink hover:bg-cth-pink/90 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg min-h-[48px]"
          >
            Support Our Programs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
