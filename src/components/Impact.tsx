import { siteConfig } from '../config/site';

const Impact = () => {
  const stats = [
    { value: siteConfig.impact.children, label: 'Children cared for' },
    { value: siteConfig.impact.programs, label: 'Core programs' },
    { value: siteConfig.impact.community, label: 'Community-driven' },
  ];

  return (
    <section className="bg-cth-purple-deep py-10 sm:py-12 lg:py-16">
      <div className="container-site">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-0 xs:gap-6 lg:gap-12 divide-y xs:divide-y-0 divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-6 xs:py-0 first:pt-0 last:pb-0">
              <div className="text-4xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-sm lg:text-base text-white/70 font-medium px-2">
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
