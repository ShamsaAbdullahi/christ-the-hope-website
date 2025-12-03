const WhatWeProvide = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Safe Shelter',
      description: 'A warm, secure home where children feel protected, loved, and part of a family.',
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Quality Education',
      description: 'Access to excellent schooling, tutoring support, and resources to excel academically.',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      title: 'Healthcare',
      description: 'Regular medical check-ups, treatment when needed, and health education for wellbeing.',
      color: 'pink'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: 'Nutrition',
      description: 'Three nutritious meals daily, ensuring every child grows healthy and strong.',
      color: 'green'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Emotional Support',
      description: 'Counseling, mentorship, and a nurturing environment for emotional growth.',
      color: 'orange'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
      ),
      title: 'Life Skills',
      description: 'Training in essential skills to prepare children for independent, successful lives.',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'bg-cth-purple/10 text-cth-purple group-hover:bg-cth-purple/20',
      blue: 'bg-cth-blue/10 text-cth-blue group-hover:bg-cth-blue/20',
      pink: 'bg-cth-pink/10 text-cth-pink group-hover:bg-cth-pink/20',
      green: 'bg-cth-green/10 text-cth-green group-hover:bg-cth-green/20',
      orange: 'bg-cth-orange/10 text-cth-orange group-hover:bg-cth-orange/20'
    };
    return colors[color];
  };

  return (
    <section id="what-we-do" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">What We Provide</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Meeting Every Need with Love
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From shelter to education, healthcare to hope—we ensure every child has what they need to thrive
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 transition-colors ${getColorClasses(service.color)}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Your support helps us provide all these essential services
          </p>
          
          <a
            href="#get-involved"
            className="inline-flex items-center px-8 py-4 bg-cth-purple hover:bg-cth-magenta text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Make a Difference Today
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