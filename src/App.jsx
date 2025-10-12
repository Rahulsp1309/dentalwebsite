import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import testImg from './assets/images/test_img.jpg';
import kpPic from './assets/images/ketanpic.jpg';
import cpPic from './assets/images/Chayapic.jpg';
import { FaGem, FaSmile, FaBolt, FaHeart, FaStar, FaTooth } from 'react-icons/fa';

export default function SmyluxeDentalStudio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  // Replace these with your EmailJS env variables
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  console.log("vars",SERVICE_ID);
  console.log("vars2",TEMPLATE_ID);
  console.log("vars3",USER_ID);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(() => {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => console.error('Email send error:', err));
  };

  // Updated Colors and Fonts with more golden gradients
  const GOLD_PRIMARY = '#BFA34A'; // Deeper gold for main headings and accents
  const GOLD_ACCENT = '#d4af37'; // Brighter gold for buttons, links
  const GOLD_LIGHT = '#f7d56f'; // Light golden for gradients and highlights
  const OFF_WHITE_BG = '#fff9e6'; // Warm off-white with a subtle golden tint
  const TEXT_GRAY_PRIMARY = '#3a2e0f'; // Darker warm gray for text with golden warmth
  const TEXT_GRAY_SECONDARY = '#5a4b1a'; // Softer secondary text in warm tone
  
  // Gradient backgrounds updated to richer golden gradients
  const GOLD_GRADIENT = `linear-gradient(145deg, ${GOLD_ACCENT}, ${GOLD_LIGHT})`;
  const BUTTON_STYLE = { background: GOLD_GRADIENT, boxShadow: `0 4px 15px ${GOLD_LIGHT}` };

  // Services with icons and refined descriptions
  const services = [
    {
      title: 'Hollywood Whitening',
      desc: 'Achieve a dazzling, red-carpet-ready smile with our advanced, professional teeth whitening system, customized for stunning results.',
      icon: <FaSmile size={32} style={{ color: GOLD_PRIMARY }} />,
    },
    {
      title: 'Porcelain Veneers',
      desc: 'Transform your smile with custom-crafted porcelain veneers, designed for impeccable beauty, natural aesthetics, and exceptional durability.',
      icon: <FaGem size={32} style={{ color: GOLD_PRIMARY }} />,
    },
    {
      title: 'Invisible Aligners',
      desc: 'Discreetly straighten your teeth using cutting-edge clear aligner technology, offering comfort and convenience without traditional braces.',
      icon: <FaBolt size={32} style={{ color: GOLD_PRIMARY }} />,
    },
    {
      title: 'Dental Implants',
      desc: 'Restore your smile and confidence with permanent dental implants, offering a natural-looking and long-lasting solution for missing teeth.',
      icon: <FaTooth size={32} style={{ color: GOLD_PRIMARY }} />,
    },
    {
      title: 'Aesthetic Bonding',
      desc: 'Enhance the beauty of your smile with cosmetic dental bonding, expertly applied to correct minor imperfections and create seamless results.',
      icon: <FaStar size={32} style={{ color: GOLD_PRIMARY }} />,
    },
    {
      title: 'Preventative Care',
      desc: 'Maintain optimal oral health with our comprehensive preventative care program, tailored to keep your smile vibrant and strong for years to come.',
      icon: <FaHeart size={32} style={{ color: GOLD_PRIMARY }} />,
    },
  ];

  // Doctors with free, professional-looking Unsplash images (higher resolution where possible)
  const doctors = [
    {
      name: 'Dr. Ketan Patil',
      role: 'BDS, MUHS',
      img:{kpPic},
    },
    {
      name: 'Dr. Chhaya Patil',
      role: 'MDS, Implant Surgeon',
      img: {cpPic},
    },
  ];

  return (
    <div className="font-poppins" style={{ color: TEXT_GRAY_PRIMARY, backgroundColor: OFF_WHITE_BG }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="py-5 px-4 shadow-lg sticky top-0 z-50 bg-yellow-50 border-b border-yellow-300/70">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-3xl lg:text-4xl font-playfair font-extrabold tracking-wide" style={{ color: GOLD_PRIMARY }}>
            Smyluxe Dental Studio
          </a>
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {['services', 'testimonials', 'doctors', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="hover:text-yellow-700 transition-all duration-300 relative group pb-1"
                style={{ '--tw-text-hover': GOLD_ACCENT, color: TEXT_GRAY_PRIMARY }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span
                  className="absolute bottom-0 left-0 w-0 h-[3px] transition-all duration-300 group-hover:w-full rounded-full"
                  style={{ background: GOLD_ACCENT }}
                ></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: OFF_WHITE_BG }}>
        <div className="absolute inset-0 z-0 opacity-20">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="%23f7d56f" fill-opacity="0.07" fill-rule="evenodd"><path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill-opacity="0.07"/></g></svg>')`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <span className="text-lg font-medium flex items-center justify-center lg:justify-start" style={{ color: GOLD_PRIMARY }}>
              <FaHeart size={20} className="mr-3" /> Exquisite Care, Exceptional Results
            </span>
            <h2 className="text-5xl md:text-6xl font-playfair font-extrabold leading-tight tracking-wide" style={{ color: GOLD_ACCENT }}>
              Your Journey to a <br className="hidden md:inline" /> Flawless Smile Begins Here.
            </h2>
            <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: TEXT_GRAY_SECONDARY }}>
              Experience the pinnacle of <strong>modern dental artistry</strong> in a serene, spa-like studio. We blend advanced technology
              with a personal, luxurious touch for your ultimate comfort and beauty.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 text-white font-semibold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={BUTTON_STYLE}
            >
              Book Your Bespoke Consultation
            </a>
          </div>
          <div className="lg:w-1/2 relative group">
            <img
              src={testImg}
              alt="Luxurious, bright dental studio interior with elegant finishes"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover border-8 border-white group-hover:border-yellow-300 transition-all duration-500 transform rotate-1 group-hover:rotate-0 group-hover:scale-105"
              style={{ boxSizing: 'content-box' }}
            />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-yellow-100/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-yellow-200/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-yellow-50 border-t border-b border-yellow-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-playfair font-extrabold mb-16" style={{ color: GOLD_PRIMARY }}>
            Our Signature Services
          </h3>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border-b-6 border-transparent hover:border-yellow-400/80 group flex flex-col items-center"
              >
                <div className="mx-auto w-fit mb-6 p-4 rounded-full border-2 group-hover:border-4 transition-all duration-300" style={{ borderColor: GOLD_ACCENT }}>
                  {s.icon}
                </div>
                <h4 className="text-2xl font-semibold font-playfair mb-3" style={{ color: GOLD_PRIMARY }}>
                  {s.title}
                </h4>
                <p className="text-base leading-relaxed" style={{ color: TEXT_GRAY_SECONDARY }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-28" style={{ backgroundColor: OFF_WHITE_BG }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-playfair font-extrabold mb-16" style={{ color: GOLD_PRIMARY }}>
            Client Impressions
          </h3>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                quote:
                  'My smile has never looked better! The attention to detail and personalized care at Smyluxe Dental Studio is absolutely unmatched. A truly transformative experience.',
                name: 'Priya Sharma, Entrepreneur',
              },
              {
                quote:
                  'The perfect blend of luxury and professionalism. The studio is so tranquil, I felt completely at ease, like royalty. The results exceeded all my expectations.',
                name: 'Rohit Verma, Architect',
              },
              {
                quote:
                  'The results blew me away! From the warm welcome to the meticulous aftercare, it was a world-class experience. I confidently recommend Smyluxe to everyone!',
                name: 'Anjali Kapoor, Designer',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-10 bg-white rounded-3xl shadow-xl transition hover:shadow-2xl border-t-8 border-yellow-300 hover:border-yellow-400 duration-300 flex flex-col h-full"
              >
                <FaStar size={24} className="mb-4 self-center" style={{ color: GOLD_ACCENT }} />
                <p className="text-3xl mb-6 font-playfair leading-none" style={{ color: GOLD_PRIMARY }}>
                  &ldquo;
                </p>
                <p className="italic text-lg mb-6 leading-relaxed flex-grow" style={{ color: TEXT_GRAY_SECONDARY }}>
                  {t.quote}
                </p>
                <h5 className="font-semibold text-xl" style={{ color: GOLD_ACCENT }}>
                  {t.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-28 bg-yellow-50 border-t border-b border-yellow-300">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-playfair font-extrabold mb-16" style={{ color: GOLD_PRIMARY }}>
            Meet Our Expert Team
          </h3>
          <div className="grid gap-12 md:grid-cols-3">
            {doctors.map(({ name, role, img }, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img
                    src={img}
                    alt={`Portrait of ${name}, ${role}`}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-2xl font-playfair font-semibold mb-1" style={{ color: GOLD_PRIMARY }}>
                  {name}
                </h4>
                <p className="text-yellow-700 font-semibold tracking-wide">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-r from-yellow-300 to-yellow-100 border-t border-yellow-300"
        style={{ color: TEXT_GRAY_PRIMARY }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-5xl font-playfair font-extrabold mb-12" style={{ color: GOLD_PRIMARY }}>
            Get In Touch
          </h3>
          {!isSent ? (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-3xl p-10 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2" style={{ color: GOLD_ACCENT }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Your full name"
                  style={{ color: TEXT_GRAY_PRIMARY }}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2" style={{ color: GOLD_ACCENT }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="your.email@example.com"
                  style={{ color: TEXT_GRAY_PRIMARY }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2" style={{ color: GOLD_ACCENT }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-yellow-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                  placeholder="Your message or inquiry"
                  style={{ color: TEXT_GRAY_PRIMARY }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full text-white font-semibold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                style={BUTTON_STYLE}
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center text-2xl font-semibold py-20 bg-white rounded-3xl shadow-lg" style={{ color: GOLD_PRIMARY }}>
              Thank you for reaching out! We will get back to you soon.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-200 py-8 text-center text-yellow-900 font-semibold tracking-wide">
        &copy; {new Date().getFullYear()} Smyluxe Dental Studio — Crafted with care and precision.
      </footer>
    </div>
  );
}
