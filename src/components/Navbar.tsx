import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#what-we-do', label: 'What We Do' },
        { href: '#get-involved', label: 'Get Involved' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-sm shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Christ The Hope" className="h-12 w-auto" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className="font-medium text-gray-700 hover:text-cth-purple transition-colors"
                >
                    {link.label}
                </a>
            ))}

            <a
                href="#get-involved"
                className="px-6 py-2.5 bg-cth-purple hover:bg-cth-magenta text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
                    Donate
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-cth-purple transition-colors"
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

        {/* Mobile Menu */ }
    {
        isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
                <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-cth-purple font-medium transition-colors px-4 py-2"
                >
                    {link.label}
                </a>
            ))}

            <a
                href="#get-involved"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 px-6 py-2.5 bg-cth-purple hover:bg-cth-magenta text-white rounded-full font-semibold text-center transition-all duration-300"
            >
                Donate
            </a>
            </div >
          </div >
        )}
      </div >
    </nav >
  );
};

export default Navbar;