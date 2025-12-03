const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-cth-pink"></div>
        ))}
      </div>
      <div className="absolute bottom-20 left-10 grid grid-cols-3 gap-3 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-cth-blue"></div>
        ))}
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-40 left-0 w-32 h-32 bg-cth-green/10 rounded-full -translate-x-16"></div>
      <div className="absolute bottom-40 right-0 w-40 h-40 bg-cth-orange/10 rounded-full translate-x-20"></div>

      {/* Fun doodles */}
      <div className="absolute top-20 right-1/4 text-4xl opacity-20 rotate-12">⭐</div>
      <div className="absolute bottom-32 left-1/4 text-5xl opacity-20 -rotate-12">❤️</div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with playful frame */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-cth-purple/30 rounded-3xl"></div>
            <div className="relative aspect-[4/3] bg-gradient-to-br from-cth-pink/20 to-cth-blue/20 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/placeholder-children.jpg" 
                alt="Children at Christ The Hope" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements around image */}
            {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cth-orange rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
              ✨
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-cth-blue rounded-full flex items-center justify-center text-white text-2xl shadow-lg animate-bounce">
              🎈
            </div> */}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-block">
                <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3 relative">
                  Our Mission
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cth-purple"></span>
                </p>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
                Building Futures, 
                <span className="text-cth-purple"> One Child </span>
                at a Time
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Christ The Hope Children's Center is more than a shelter—it's a community-driven movement dedicated to transforming the lives of disadvantaged children in our society.
              </p>
              <p>
                We believe every child deserves the opportunity to thrive. Through compassionate care, quality education, and unwavering support, we provide the essential foundation children need to build bright futures.
              </p>
              <p>
                Our approach is rooted in love, dignity, and empowerment. We don't just meet basic needs—we nurture dreams, celebrate potential, and create pathways to success.
              </p>
            </div>

            {/* Values with colorful cards */}
            <div className="pt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-cth-pink/10 to-cth-pink/5 rounded-xl p-5 border-l-4 border-cth-pink transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-cth-pink/20 rounded-lg flex items-center justify-center text-2xl">
                    ❤️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Love & Care</h3>
                    <p className="text-sm text-gray-600">Unconditional love and support</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cth-blue/10 to-cth-blue/5 rounded-xl p-5 border-l-4 border-cth-blue transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-cth-blue/20 rounded-lg flex items-center justify-center text-2xl">
                    📚
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Education</h3>
                    <p className="text-sm text-gray-600">Quality learning opportunities</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cth-green/10 to-cth-green/5 rounded-xl p-5 border-l-4 border-cth-green transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-cth-green/20 rounded-lg flex items-center justify-center text-2xl">
                    👨‍👩‍👧‍👦
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Community</h3>
                    <p className="text-sm text-gray-600">Built by caring hearts</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cth-orange/10 to-cth-orange/5 rounded-xl p-5 border-l-4 border-cth-orange transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-cth-orange/20 rounded-lg flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Empowerment</h3>
                    <p className="text-sm text-gray-600">Building confidence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 15C120 30 240 60 360 75C480 90 600 90 720 82.5C840 75 960 60 1080 52.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="white"/>
        </svg>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 15C120 30 240 60 360 75C480 90 600 90 720 82.5C840 75 960 60 1080 52.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="rgb(249, 250, 251)"/>
        </svg>
      </div>
    </section>
  );
};

export default About;