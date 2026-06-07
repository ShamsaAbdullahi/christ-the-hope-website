import { siteConfig } from '../config/site';

const whatsappIcon = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;

  const socialLinks = [
    {
      href: siteConfig.socials.instagram,
      label: 'Instagram',
      hover: 'hover:bg-cth-purple',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      href: siteConfig.socials.tiktok,
      label: 'TikTok',
      hover: 'hover:bg-cth-charcoal',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.2a8.28 8.28 0 005.58 2.17V11.9a4.84 4.84 0 01-3.77-1.58V6.69h.77z" />
        </svg>
      ),
    },
    {
      href: whatsappUrl,
      label: 'WhatsApp',
      hover: 'hover:bg-cth-green',
      icon: whatsappIcon,
    },
    {
      href: siteConfig.socials.whatsappChannel,
      label: 'WhatsApp Channel',
      hover: 'hover:bg-cth-green',
      icon: whatsappIcon,
    },
  ];

  return (
    <footer id="contact" className="bg-cth-charcoal text-white">
      <div className="container-site py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div className="sm:col-span-2">
            <img src="/logo.png" alt="Christ The Hope" className="h-12 sm:h-14 mb-3 sm:mb-4" />
            <p className="font-accent text-lg sm:text-xl text-cth-pink mb-3 sm:mb-4">the hope</p>
            <p className="text-white/60 leading-relaxed mb-5 sm:mb-6 max-w-md text-sm sm:text-base">
              A community-driven children's center empowering disadvantaged children
              with the basic needs they deserve to thrive.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-white/10 ${social.hover} rounded-full flex items-center justify-center transition-colors`}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-display mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base">Our Story</a></li>
              <li><a href="#what-we-do" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base">What We Do</a></li>
              <li><a href="#donate" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base">Donate</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors text-sm sm:text-base">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-display mb-3 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/60 text-sm sm:text-base">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone.tel}>
                  <a href={`tel:${phone.tel}`} className="hover:text-white transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {siteConfig.phones[0].display}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Join our WhatsApp Channel
                </a>
              </li>
              <li>{siteConfig.location}</li>
              <li className="pt-2 border-t border-white/10">
                <span className="text-white/40 text-xs sm:text-sm block mb-1">M-Pesa Paybill</span>
                <span className="text-white font-semibold">{siteConfig.mpesa.paybill}</span>
                <span className="text-white/40 text-xs sm:text-sm block mt-1">{siteConfig.mpesa.account}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-5 sm:py-6">
          <p className="text-xs sm:text-sm text-white/40 text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
