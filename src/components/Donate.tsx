import { useState } from 'react';
import { siteConfig } from '../config/site';

const Donate = () => {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState(0);

  const copyPaybill = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.mpesa.paybill);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello, I would like to donate to Christ The Hope Children\'s Center.'
  )}`;

  return (
    <section id="donate" className="section-padding bg-cth-pink-tint">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <p className="text-cth-pink font-semibold uppercase tracking-wider text-sm mb-3">
            Give Hope
          </p>
          <h2 className="section-heading mb-4 sm:mb-6">
            Your gift changes a child's life
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-cth-warm leading-relaxed">
            Every shilling goes directly to the children you see on this page.
            Donate securely via M-Pesa.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 sm:mb-12">
          {siteConfig.donationTiers.map((tier, index) => (
            <button
              key={tier.amount}
              onClick={() => setSelectedTier(index)}
              className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center transition-all duration-300 border-2 ${
                selectedTier === index
                  ? 'bg-white border-cth-pink shadow-lg sm:scale-105'
                  : 'bg-white/60 border-transparent hover:border-cth-pink/30'
              }`}
            >
              <div className="text-xl sm:text-2xl font-display font-bold text-cth-purple mb-1 sm:mb-2">
                {tier.label}
              </div>
              <div className="text-xs sm:text-sm text-cth-warm">{tier.impact}</div>
            </button>
          ))}
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-cth-green/10 rounded-full mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-cth-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-display mb-2">M-Pesa Paybill</h3>
            <p className="text-cth-warm text-sm">Send your donation using the details below</p>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-4 py-3 sm:py-4 px-4 sm:px-5 bg-cth-cream rounded-xl">
              <span className="text-cth-warm font-medium text-sm sm:text-base">Paybill Number</span>
              <span className="text-xl sm:text-2xl font-display font-bold text-cth-purple tracking-wider">
                {siteConfig.mpesa.paybill}
              </span>
            </div>
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-1 xs:gap-4 py-3 sm:py-4 px-4 sm:px-5 bg-cth-cream rounded-xl">
              <span className="text-cth-warm font-medium text-sm sm:text-base">Account Name</span>
              <span className="font-semibold text-cth-charcoal text-sm sm:text-base break-words text-left xs:text-right">
                {siteConfig.mpesa.account}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={copyPaybill}
              className="flex-1 px-6 py-3.5 bg-cth-purple hover:bg-cth-purple-deep text-white rounded-full font-semibold transition-all duration-300 min-h-[48px]"
            >
              {copied ? 'Copied!' : 'Copy Paybill'}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3.5 bg-cth-green hover:bg-cth-green/90 text-white rounded-full font-semibold transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="text-xs text-cth-warm/70 text-center mt-5 sm:mt-6">
            Paybill and contact details are placeholders — real numbers coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Donate;
