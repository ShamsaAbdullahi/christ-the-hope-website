const GetInvolved = () => {
  const ways = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'One-Time Donation',
      description: 'Every contribution, big or small, makes an immediate impact on a child\'s life.',
      action: 'Donate Now',
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Sponsor a Child',
      description: 'Build a lasting connection by supporting a child\'s education and wellbeing monthly.',
      action: 'Start Sponsoring',
      color: 'pink'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Volunteer',
      description: 'Share your time, skills, and love with children who need positive role models.',
      action: 'Join Us',
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'Donate Items',
      description: 'Contribute clothing, books, toys, or other essentials to support daily operations.',
      action: 'See Needs',
      color: 'green'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Corporate Partnership',
      description: 'Partner with us through CSR initiatives, team volunteering, or sustained support.',
      action: 'Partner With Us',
      color: 'orange'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Spread the Word',
      description: 'Share our mission on social media and help us reach more supporters.',
      action: 'Share Now',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; button: string; border: string }> = {
      purple: {
        bg: 'bg-cth-purple/10',
        text: 'text-cth-purple',
        button: 'bg-cth-purple hover:bg-cth-magenta',
        border: 'border-cth-purple/20 hover:border-cth-purple/40'
      },
      pink: {
        bg: 'bg-cth-pink/10',
        text: 'text-cth-pink',
        button: 'bg-cth-pink hover:bg-cth-magenta',
        border: 'border-cth-pink/20 hover:border-cth-pink/40'
      },
      blue: {
        bg: 'bg-cth-blue/10',
        text: 'text-cth-blue',
        button: 'bg-cth-blue hover:bg-cth-blue/90',
        border: 'border-cth-blue/20 hover:border-cth-blue/40'
      },
      green: {
        bg: 'bg-cth-green/10',
        text: 'text-cth-green',
        button: 'bg-cth-green hover:bg-cth-green/90',
        border: 'border-cth-green/20 hover:border-cth-green/40'
      },
      orange: {
        bg: 'bg-cth-orange/10',
        text: 'text-cth-orange',
        button: 'bg-cth-orange hover:bg-cth-orange/90',
        border: 'border-cth-orange/20 hover:border-cth-orange/40'
      }
    };
    return colors[color];
  };

  return (
    <section id="get-involved" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">Get Involved</p>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Be Part of Something Beautiful
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            There are many ways to support our mission and transform children's lives
          </p>
        </div>

        {/* Ways to help */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => {
            const colors = getColorClasses(way.color);
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 border-2 ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${colors.bg} ${colors.text}`}>
                  {way.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {way.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {way.description}
                </p>
                <button className={`w-full px-6 py-3 ${colors.button} text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}>
                  {way.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Featured CTA Box */}
        <div className="bg-gradient-to-br from-cth-purple to-cth-magenta rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Every Act of Kindness Counts
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Whether it's a donation, your time, or simply sharing our story—you're helping build brighter futures
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a
              href="https://www.instagram.com/christthehopecc/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-cth-purple rounded-full font-semibold text-lg transition-all duration-300 hover:bg-gray-50 shadow-lg hover:scale-105"
            >
              Follow Our Journey
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 shadow-lg"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;