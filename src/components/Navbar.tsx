import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'Our Story' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const linkClass = isScrolled || isMobileMenuOpen
    ? 'font-medium text-cth-warm hover:text-cth-purple transition-colors'
    : 'font-medium text-white/90 hover:text-white transition-colors';

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-cth-cream/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a href="#" className="flex items-center shrink-0" aria-label="Christ The Hope home">
            <img
              src="/logo.png"
              alt="Christ The Hope"
              className="h-14 sm:h-16 lg:h-[4.5rem] w-auto transition-transform duration-300 hover:scale-105"
            />
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="px-5 lg:px-6 py-2.5 bg-cth-pink hover:bg-cth-pink/90 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm lg:text-base"
            >
              Donate
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#donate"
              className="inline-flex items-center justify-center h-9 px-4 bg-cth-pink text-white rounded-full font-semibold text-sm leading-none"
            >
              Donate
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-cth-charcoal' : 'text-white'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-cth-cream z-40 overflow-y-auto">
          <div className="container-site py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-cth-charcoal hover:text-cth-purple font-medium text-lg transition-colors py-4 border-b border-cth-purple/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={closeMenu}
              className="mt-4 px-6 py-4 bg-cth-pink text-white rounded-full font-semibold text-center text-lg"
            >
              Give via M-Pesa
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
