import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/navigation';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section 
      id="Contact" 
      className="py-20 md:py-28 relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/images/9cd53aafe21505d44d31dea2f10704a6.jpeg')`,
        backgroundColor: '#96337b'
      }}
    >
      {/* Magenta/Purple Color Overlay */}
      <div className="absolute inset-0 bg-[#96337b]/80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: White Card with Google Map Background */}
          <div 
            className="lg:col-span-5 bg-white rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between bg-cover bg-center relative overflow-hidden border border-[#e8e7ef]"
            style={{
              backgroundImage: `url('/assets/images/WhatsApp-Image-2023-08-22-at-5.30.04-PM.jpeg')`
            }}
          >
            <div className="absolute inset-0 bg-white/88 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#003461] border-b-2 border-[#96337b] pb-2 inline-block">
                  Info
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#334155]">
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                  className="flex items-center gap-3 font-medium hover:text-[#cc2b5e] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#96337b] shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>

                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="flex items-center gap-3 font-medium hover:text-[#cc2b5e] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#96337b] shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>

                <a 
                  href={CONTACT_INFO.mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#cc2b5e] transition-colors pt-2"
                >
                  <MapPin className="w-5 h-5 text-[#96337b] shrink-0 mt-0.5" />
                  <span>GYATK RVCR Apparatus Pvt Ltd, India, CIN : {CONTACT_INFO.cin}</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 pt-10">
              <a 
                href={CONTACT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#003461] font-semibold uppercase hover:text-[#cc2b5e] transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Right Column: Contact Us Form */}
          <div className="lg:col-span-7 text-white space-y-6 py-4">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                Contact us
              </h3>
              <p className="text-sm text-pink-100 mt-2 max-w-xl font-light">
                We operate from our base in UK and India. For more information, please drop us a mail or use the form.
              </p>
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-white text-emerald-800 flex items-center gap-3 shadow">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <p className="text-sm font-semibold">Thank you for your message! An engineer will be in touch shortly.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-900/80 text-white flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-300 shrink-0" />
                <p className="text-sm">Please fill in your name and email.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white font-semibold mb-1">
                  Your message (optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner resize-none font-light"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-3 rounded text-xs font-semibold uppercase tracking-wider text-white btn-gyatk-gradient shadow-lg active:scale-95 transition-all"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Submit Message'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
