import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import testImg from './assets/images/test_img.jpg';

import cpPic from './assets/images/ChhayaPatil.jpeg';
import kpPic from './assets/images/KetanPatil.jpeg';
import { FaGem, FaSmile, FaBolt, FaHeart, FaStar, FaTooth } from 'react-icons/fa';

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function SmyluxeDentalStudio() {
    // === 1. STATE FOR POPUP ===
    const [showWelcomePopup, setShowWelcomePopup] = useState(true);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        appointmentDate: '',
    });

    const [isSent, setIsSent] = useState(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    // === 2. EFFECT TO HANDLE AUTO-HIDE (Optional - increased to 6s) ===
    useEffect(() => {
        // Automatically hide the popup after 6 seconds
        const timer = setTimeout(() => {
            setShowWelcomePopup(false);
        }, 3200); 

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
            .then(() => {
                setIsSent(true);
                setFormData({ name: '', email: '', message: '', appointmentDate: '' });
            })
            .catch((err) => console.error('Email send error:', err));
    };

    const GOLD_PRIMARY = '#BFA34A';
    const GOLD_ACCENT = '#d4af37';
    const GOLD_LIGHT = '#f7d56f';
    const OFF_WHITE_BG = '#fff9e6';
    const TEXT_GRAY_PRIMARY = '#3a2e0f';
    const TEXT_GRAY_SECONDARY = '#5a4b1a';

    const GOLD_GRADIENT = `linear-gradient(145deg, ${GOLD_ACCENT}, ${GOLD_LIGHT})`;
    const BUTTON_STYLE = { background: GOLD_GRADIENT, boxShadow: `0 4px 15px ${GOLD_LIGHT}` };

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

    const doctors = [
        {
            name: 'Dr. Ketan Patil',
            role: 'BDS, MUHS',
            img: kpPic,
        },
        {
            name: 'Dr. Chhaya Patil',
            role: <>MDS, MUHS<br />Implant Surgeon</>,
            img: cpPic,
        },
    ];

    // === 3. CONDITIONAL RENDER RETURN ===
    // If showWelcomePopup is TRUE, ONLY render the popup.
    if (showWelcomePopup) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="bg-white p-12 sm:p-16 rounded-3xl shadow-2xl max-w-lg w-11/12 text-center"
                    style={{ border: `4px solid ${GOLD_PRIMARY}` }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                    >
                        <FaSmile size={70} className="mx-auto mb-6" style={{ color: GOLD_ACCENT }} />
                    </motion.div>
                    <h3
                        className="text-4xl sm:text-5xl font-playfair font-extrabold mb-4 leading-snug"
                        style={{ color: GOLD_PRIMARY }}
                    >
                        Welcome to <br />Smyluxe Dental Studio!
                    </h3>
                    <p className="text-xl font-medium" style={{ color: TEXT_GRAY_SECONDARY }}>
                        Your flawless smile journey starts now.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowWelcomePopup(false)}
                        className="mt-8 px-8 py-3 text-white font-semibold rounded-full shadow-lg"
                        style={BUTTON_STYLE}
                    >
                        Start Exploring
                    </motion.button>
                </motion.div>
            </motion.div>
        );
    }

    // If showWelcomePopup is FALSE, render the entire site.
    return (
        <div className="font-poppins" style={{ color: TEXT_GRAY_PRIMARY, backgroundColor: OFF_WHITE_BG }}>
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@300;400;500;600&display=swap"
                rel="stylesheet"
            />

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="py-4 px-6 sticky top-0 z-50 border-b transition-all duration-300"
                style={{
                    backgroundColor: 'rgba(255, 250, 235, 0.85)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderColor: 'rgba(212, 175, 55, 0.25)',
                }}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.02 }}
                        className="text-2xl lg:text-3xl font-playfair font-extrabold tracking-wide"
                        style={{ color: GOLD_PRIMARY }}
                        title="Smyluxe Dental Studio - Best Dental Clinic in Ravet, Pune"
                    >
                        Smyluxe Dental Studio
                    </motion.a>
                    <nav className="hidden md:flex space-x-10 text-base font-medium">
                        {['services', 'testimonials', 'doctors', 'contact'].map((link) => (
                            <motion.a
                                key={link}
                                href={`#${link}`}
                                whileHover={{ y: -2 }}
                                className="relative group pb-1"
                                style={{ color: TEXT_GRAY_PRIMARY }}
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                                    style={{ background: GOLD_GRADIENT }}
                                />
                            </motion.a>
                        ))}
                    </nav>
                </div>
            </motion.header>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-28 lg:py-36" style={{ backgroundColor: OFF_WHITE_BG }}>
                <div className="absolute inset-0 z-0 opacity-30">
                    <div
                        className="absolute inset-0 bg-repeat opacity-50"
                        style={{
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><path d="M30 5L55 30L30 55L5 30Z" fill="%23d4af37" fill-opacity="0.03" stroke="%23BFA34A" stroke-opacity="0.06" stroke-width="0.5"/></svg>')`,
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 space-y-8 text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center text-lg font-medium px-4 py-2 rounded-full border"
                            style={{ color: GOLD_PRIMARY, borderColor: 'rgba(191, 163, 74, 0.4)', backgroundColor: 'rgba(247, 213, 111, 0.15)' }}
                        >
                            <FaHeart size={18} className="mr-2" /> Best Dental Clinic in Ravet, Pune
                        </motion.span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold leading-[1.1] tracking-tight" style={{ color: GOLD_ACCENT }}>
                            Your Journey to a <br className="hidden md:inline" /> Flawless Smile Begins Here
                        </h1>
                        <p className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: TEXT_GRAY_SECONDARY }}>
                            Experience the pinnacle of modern dental artistry at Ravet&apos;s premier dental studio. We blend advanced technology
                            with a personal, luxurious touch for your ultimate comfort and beauty. Serving Ravet, Pune and surrounding areas.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.35)' }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block px-10 py-4 text-white font-semibold text-xl rounded-full shadow-xl"
                            style={BUTTON_STYLE}
                        >
                            Book Your Bespoke Consultation
                        </motion.a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:w-1/2 relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="relative group"
                        >
                            <img
                                src={testImg}
                                alt="Smyluxe Dental Studio - Best dental clinic in Ravet, Pune - Luxurious dental care interior"
                                className="w-full h-auto rounded-3xl shadow-2xl object-cover border-[10px] border-white/90 rotate-2 group-hover:rotate-0 transition-transform duration-500"
                                style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }}
                            />
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob bg-amber-200/70" />
                            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob bg-yellow-300/60" style={{ animationDelay: '2s' }} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-28 relative overflow-hidden" style={{ backgroundColor: 'rgba(255, 250, 235, 0.6)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_ACCENT}40, transparent)` }} />
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-playfair font-extrabold mb-20"
                        style={{ color: GOLD_PRIMARY }}
                    >
                        Our Signature Services
                    </motion.h3>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white p-10 rounded-3xl shadow-lg flex flex-col items-center overflow-hidden"
                                style={{
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                }}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${GOLD_LIGHT}08, transparent)` }} />
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="relative z-10 mx-auto w-fit mb-6 p-5 rounded-2xl"
                                    style={{ backgroundColor: 'rgba(247, 213, 111, 0.2)', border: `2px solid ${GOLD_ACCENT}` }}
                                >
                                    {s.icon}
                                </motion.div>
                                <h4 className="relative z-10 text-xl font-semibold font-playfair mb-3" style={{ color: GOLD_PRIMARY }}>
                                    {s.title}
                                </h4>
                                <p className="relative z-10 text-base leading-relaxed" style={{ color: TEXT_GRAY_SECONDARY }}>
                                    {s.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_ACCENT}40, transparent)` }} />
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-28" style={{ backgroundColor: OFF_WHITE_BG }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-playfair font-extrabold mb-20"
                        style={{ color: GOLD_PRIMARY }}
                    >
                        Client Impressions
                    </motion.h3>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-10 md:grid-cols-3"
                    >
                        {[
                            { quote: 'My smile has never looked better! The attention to detail and personalized care at Smyluxe Dental Studio is absolutely unmatched. A truly transformative experience.', name: 'Priya Sharma', role: 'Entrepreneur' },
                            { quote: 'The perfect blend of luxury and professionalism. The studio is so tranquil, I felt completely at ease, like royalty. The results exceeded all my expectations.', name: 'Rohit Verma', role: 'Architect' },
                            { quote: 'The results blew me away! From the warm welcome to the meticulous aftercare, it was a world-class experience. I confidently recommend Smyluxe to everyone!', name: 'Anjali Kapoor', role: 'Designer' },
                        ].map((t, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="p-10 bg-white rounded-3xl flex flex-col h-full text-left relative overflow-hidden"
                                style={{
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                                    borderTop: `4px solid ${GOLD_ACCENT}`,
                                }}
                            >
                                <div className="absolute top-6 right-6 opacity-20">
                                    <FaStar size={48} style={{ color: GOLD_PRIMARY }} />
                                </div>
                                <p className="text-5xl mb-4 font-playfair leading-none" style={{ color: GOLD_LIGHT }}>&ldquo;</p>
                                <p className="italic text-lg mb-8 leading-relaxed flex-grow relative z-10" style={{ color: TEXT_GRAY_SECONDARY }}>{t.quote}</p>
                                <div>
                                    <h5 className="font-semibold text-lg" style={{ color: GOLD_ACCENT }}>{t.name}</h5>
                                    <p className="text-sm font-medium opacity-70" style={{ color: TEXT_GRAY_SECONDARY }}>{t.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Doctors */}
            <section id="doctors" className="py-28 relative" style={{ backgroundColor: 'rgba(255, 250, 235, 0.5)' }}>
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_ACCENT}40, transparent)` }} />
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-playfair font-extrabold mb-20"
                        style={{ color: GOLD_PRIMARY }}
                    >
                        Meet Our Expert Team
                    </motion.h3>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-16 md:grid-cols-2"
                    >
                        {doctors.map(({ name, role, img }, i) => (
                            <motion.div
                                key={i}
                                variants={staggerItem}
                                whileHover={{ y: -8 }}
                                className="group relative max-w-md mx-auto"
                            >
                                <div className="p-8 rounded-3xl bg-white overflow-hidden"
                                    style={{
                                        boxShadow: '0 20px 50px -15px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(212, 175, 55, 0.15)',
                                    }}
                                >
                                    <div className="relative overflow-hidden rounded-2xl mb-6">
                                        <motion.img
                                            src={img}
                                            alt={`Portrait of ${name}`}
                                            className="w-full h-80 md:h-72 object-cover"
                                            loading="lazy"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                    <h4 className="text-2xl font-playfair font-semibold mb-2" style={{ color: GOLD_PRIMARY }}>{name}</h4>
                                    <p className="font-medium" style={{ color: GOLD_ACCENT }}>{role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_ACCENT}40, transparent)` }} />
            </section>

            {/* Contact */}
            <section
                id="contact"
                className="py-28 relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, rgba(255, 243, 205, 0.9) 0%, rgba(255, 250, 235, 0.95) 50%, rgba(255, 243, 205, 0.9) 100%)`,
                    color: TEXT_GRAY_PRIMARY,
                }}
            >
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(191, 163, 74, 0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="max-w-2xl mx-auto px-6 relative z-10">
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl font-playfair font-extrabold mb-14"
                        style={{ color: GOLD_PRIMARY }}
                    >
                        Get In Touch
                    </motion.h3>
                    <p className="text-lg mb-8 -mt-6 opacity-80" style={{ color: TEXT_GRAY_SECONDARY }}>
                        Visit our dental clinic in Ravet, Pune — or book your appointment online
                    </p>
                    {!isSent ? (
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}
                            className="space-y-6 bg-white rounded-3xl p-10 shadow-xl"
                            style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
                        >
                            <div>
                                <label htmlFor="name" className="block text-base font-semibold mb-2" style={{ color: GOLD_ACCENT }}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                                    placeholder="Your full name"
                                    style={{ color: TEXT_GRAY_PRIMARY, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-base font-semibold mb-2" style={{ color: GOLD_ACCENT }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                                    placeholder="your.email@example.com"
                                    style={{ color: TEXT_GRAY_PRIMARY, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="appointmentDate" className="block text-base font-semibold mb-2" style={{ color: GOLD_ACCENT }}>Preferred Appointment Date</label>
                                <input
                                    type="date"
                                    id="appointmentDate"
                                    name="appointmentDate"
                                    required
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all"
                                    style={{ color: TEXT_GRAY_PRIMARY, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-base font-semibold mb-2" style={{ color: GOLD_ACCENT }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border-2 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 resize-none transition-all"
                                    placeholder="Your message or inquiry"
                                    style={{ color: TEXT_GRAY_PRIMARY, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 rounded-full text-white font-semibold text-xl"
                                style={BUTTON_STYLE}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 bg-white rounded-3xl shadow-xl"
                            style={{ color: GOLD_PRIMARY, border: '1px solid rgba(212, 175, 55, 0.2)' }}
                        >
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
                                <FaSmile size={64} className="mx-auto mb-4" style={{ color: GOLD_ACCENT }} />
                            </motion.div>
                            <p className="text-2xl font-semibold">Thank you for reaching out!</p>
                            <p className="mt-2 opacity-80">We will get back to you soon.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-10 text-center font-medium tracking-wide relative"
                style={{
                    background: `linear-gradient(180deg, rgba(212, 175, 55, 0.15), rgba(191, 163, 74, 0.2))`,
                    color: TEXT_GRAY_PRIMARY,
                }}
            >
                <p className="opacity-90">&copy; {new Date().getFullYear()} Smyluxe Dental Studio</p>
                <p className="mt-1 opacity-80">Best Dental Clinic in Ravet, Pune</p>
                <p className="mt-2 text-sm opacity-70">Ravet, Pune, Maharashtra • Crafted with care and precision</p>
            </motion.footer>
        </div>
    );
}