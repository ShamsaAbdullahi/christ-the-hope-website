import { siteConfig } from '../config/site';

const Impact = () => {
  const stats = [
    { value: siteConfig.impact.children, label: 'Children cared for' },
    { value: siteConfig.impact.programs, label: 'Core programs' },
    { value: siteConfig.impact.community, label: 'Community-driven' },
  ];

  return (
    <section className="bg-cth-purple-deep py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-3 gap-6 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-white/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
