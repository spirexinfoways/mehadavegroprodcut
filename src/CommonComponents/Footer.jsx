import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgImg from '../assets/FooterImg/ab8606b2e3a081ff4f39bbe50115afb0.jpg';

const Footer = () => {
    const quickLinks = [
        { name: 'Products', path: '/products' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const findPeople = [
        { name: 'E-Brochure', path: '/ebrochure' },
        { name: 'Contact', path: '/contact' },
    ];

    const companyLinks = [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms', path: '#' },
        { name: 'Cookies', path: '#' },
    ];

    const socialLinks = [
        { icon: Instagram, href: '#' },
        { icon: Twitter, href: '#' },
        { icon: Mail, href: 'mailto:info@earthagriimpex.com' }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <footer className="relative bg-[#0a0a0a] text-white overflow-hidden pt-20 pb-10 outfit">
            {/* Background Image with Parallax-like effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={bgImg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <motion.div 
                className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
                    
                    {/* Brand and Newsletter */}
                    <motion.div variants={itemVariants} className="lg:col-span-12 xl:col-span-5 space-y-7 lg:border-r lg:border-white/10 lg:pr-16">
                        <div>
                            <motion.h2 
                                className="text-xl font-medium tracking-tight mb-1"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Earth Agri Impex ™
                            </motion.h2>
                            <p className="text-gray-500 text-sm">Sowing Trust, Growing Quality</p>
                        </div>

                        <div className="flex flex-col sm:flex-row max-w-md gap-0">
                            <input 
                                type="email" 
                                placeholder="email@gmail.com" 
                                className="w-full bg-white/5 border border-white/20 rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg py-3 px-4 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#e2ff31]/60 focus:border-[#e2ff31]/60 transition-all duration-300"
                            />
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#e2ff31] text-black px-6 py-3 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg font-bold text-sm hover:bg-[#d4f020] transition-colors whitespace-nowrap"
                            >
                                Join for free
                            </motion.button>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                    style={{ boxShadow: "0 0 0 0px #e2ff31" }}
                                    onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 12px 1px rgba(226,255,49,0.3)"}
                                    onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 0px #e2ff31"}
                                >
                                    <social.icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xs font-semibold mb-6 text-gray-500 uppercase tracking-widest">Quick Links</h3>
                            <ul className="space-y-4">
                                {quickLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group relative w-fit">
                                            <span>{link.name}</span>
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e2ff31] transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xs font-semibold mb-6 text-gray-500 uppercase tracking-widest">Support</h3>
                            <ul className="space-y-4">
                                {findPeople.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm relative group w-fit block">
                                            <span>{link.name}</span>
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e2ff31] transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xs font-semibold mb-6 text-gray-500 uppercase tracking-widest">Legal</h3>
                            <ul className="space-y-4">
                                {companyLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.path} className="text-gray-300 hover:text-white transition-colors text-sm relative group w-fit block">
                                            <span>{link.name}</span>
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#e2ff31] transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Large Stylized Branding */}
                <div className="relative mt-6 mb-8 select-none z-10">
                    <motion.h1 
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.01 }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[10vw] sm:text-[8vw] font-bold leading-none tracking-tighter text-center uppercase pb-2"
                        style={{ 
                            fontFamily: "Outfit, sans-serif",
                            letterSpacing: "-0.05em",
                            backgroundImage: "linear-gradient(to top, #ffffff 20%, rgba(255,255,255,0.15) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        mahadev agro product
                    </motion.h1>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest gap-4"
                >
                    <p className="text-center md:text-left">© 2025 Earth Agri Impex. All rights reserved.</p>
                    <div className="flex gap-6">
                        {['Instagram', 'Twitter', 'Linked In'].map((platform) => (
                            <a 
                                key={platform} 
                                href="#" 
                                className="hover:text-white transition-colors relative group"
                            >
                                {platform}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;