import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Our Story' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  const linkClass = isScrolled
    ? 'font-medium text-cth-warm hover:text-cth-purple transition-colors'
    : 'font-medium text-white/90 hover:text-white transition-colors';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cth-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Christ The Hope" className="h-11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="px-6 py-2.5 bg-cth-pink hover:bg-cth-pink/90 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Donate
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-cth-charcoal' : 'text-white'
            }`}
            aria-label="Toggle menu"
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

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-cth-cream/98 backdrop-blur-sm rounded-b-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-cth-charcoal hover:text-cth-purple font-medium transition-colors px-4 py-3"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-3 bg-cth-pink text-white rounded-full font-semibold text-center"
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
