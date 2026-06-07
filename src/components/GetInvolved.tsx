import { siteConfig } from '../config/site';

const ways = [
  {
    title: 'Donate via M-Pesa',
    description: 'Every contribution, big or small, makes an immediate impact on a child\'s life.',
    action: 'Give Now',
    href: '#donate',
    color: 'pink',
  },
  {
    title: 'Volunteer Your Time',
    description: 'Share your skills, time, and love with children who need positive role models.',
    action: 'Get in Touch',
    href: '#contact',
    color: 'blue',
  },
  {
    title: 'Partner With Us',
    description: 'Corporate CSR, team volunteering, or sustained support — let\'s build together.',
    action: 'Contact Us',
    href: `mailto:${siteConfig.email}`,
    color: 'purple',
  },
  {
    title: 'Spread the Word',
    description: 'Follow us on Instagram, TikTok, or join our WhatsApp channel to share our mission.',
    action: 'Follow Us',
    href: siteConfig.socials.instagram,
    external: true,
    color: 'green',
  },
];

const colorMap: Record<string, string> = {
  pink: 'border-cth-pink/20 hover:border-cth-pink/40',
  blue: 'border-cth-blue/20 hover:border-cth-blue/40',
  purple: 'border-cth-purple/20 hover:border-cth-purple/40',
  green: 'border-cth-green/20 hover:border-cth-green/40',
};

const GetInvolved = () => {
  return (
    <section id="get-involved" className="section-padding bg-white">
      <div className="container-site">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-cth-purple font-semibold uppercase tracking-wider text-sm mb-3">
            Get Involved
          </p>
          <h2 className="section-heading mb-4 sm:mb-6">
            Be part of something beautiful
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-cth-warm leading-relaxed">
            There are many ways to support our mission and transform children's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {ways.map((way) => (
            <div
              key={way.title}
              className={`bg-cth-cream rounded-xl sm:rounded-2xl p-5 sm:p-8 border-2 ${colorMap[way.color]} transition-all duration-300 hover:shadow-lg`}
            >
              <h3 className="text-xl sm:text-2xl font-display mb-2 sm:mb-3">{way.title}</h3>
              <p className="text-sm sm:text-base text-cth-warm leading-relaxed mb-4 sm:mb-6">{way.description}</p>
              <a
                href={way.href}
                {...(way.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center font-semibold text-cth-purple hover:text-cth-pink transition-colors min-h-[44px]"
              >
                {way.action}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
