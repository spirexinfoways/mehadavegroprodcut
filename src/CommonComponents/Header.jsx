import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home, Info, ShoppingBag, Image as GalleryIcon,
  FileText, Phone, Leaf
} from 'lucide-react';
import logo from '../assets/HomeImg/logo1.png';
import LanguageSelector from './LanguageSelector';

const navLinks = [
  { name: 'Home',      path: '/',          icon: Home },
  { name: 'About',     path: '/about',     icon: Info },
  { name: 'Products',  path: '/products',  icon: ShoppingBag },
  { name: 'Gallery',   path: '/gallery',   icon: GalleryIcon },
  { name: 'EBrochure', path: '/ebrochure', icon: FileText },
  { name: 'Contact',   path: '/contact',   icon: Phone },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeIndex = useMemo(() =>
    Math.max(navLinks.findIndex(l => l.path === location.pathname), 0),
    [location.pathname]
  );

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ==================== DESKTOP TOP NAVBAR ==================== */}
      <header
        className={`outfit fixed top-0 left-0 right-0 z-[500] hidden lg:flex items-center transition-all duration-500 ease-in-out ${
          scrolled
            ? 'h-[66px] bg-white/80 backdrop-blur-2xl border-b border-green-200/50'
            : 'h-[82px] bg-transparent'
        }`}
        style={scrolled ? { boxShadow: '0 4px 30px rgba(45,125,50,0.10), 0 1px 3px rgba(0,0,0,0.06)' } : {}}
      >
        <div className="max-w-[1400px] w-full mx-auto px-8 flex items-center justify-between">

          {/* Logo + Brand Text */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Earth Agri Impex" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            
          </Link>

          {/* Center Nav Links */}
          <nav className="flex items-center gap-0.5 px-2 py-1.5 rounded-2xl bg-white/70 backdrop-blur-lg border border-green-200/60 shadow-[0_2px_16px_rgba(45,125,50,0.08)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative flex items-center gap-1.5 px-4 py-[9px] text-[13px] font-medium rounded-xl transition-all duration-300 group ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-gray-500 hover:text-green-800'
                }`}
              >
                {/* Active background */}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeDesktopPill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, var(--darkgreen), var(--green))' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover state */}
                {!isActive(link.path) && (
                  <span className="absolute inset-0 rounded-xl bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                )}

                {/* Icon */}
                <link.icon
                  size={14}
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive(link.path) ? 'text-lime-300' : 'text-gray-400 group-hover:text-green-600'
                  }`}
                />

                {/* Label */}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right: Language Selector */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Desktop Spacer */}
      <div className="hidden lg:block h-20" />

      {/* ==================== MOBILE TOP THIN BAR ==================== */}
      <header className="outfit fixed top-0 left-0 right-0 z-[500] lg:hidden flex items-center justify-between px-5 h-14 bg-white/90 backdrop-blur-2xl border-b-2 border-green-100" style={{ boxShadow: '0 2px 20px rgba(45,125,50,0.08)' }}>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Tagline pill */}
          <span className="hidden sm:flex items-center gap-1 text-[10px] text-green-700 font-medium bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
            <Leaf size={11} className="text-green-500" />
            Earth Agri Impex
          </span>
          <LanguageSelector />
        </div>
      </header>

      {/* Mobile Top Spacer */}
      <div className="lg:hidden h-14" />

      {/* ==================== MOBILE BOTTOM MAGIC NAV ==================== */}
      <div className="lg:hidden fixed bottom-3 left-0 right-0 z-[500] px-5">
        <div
          className="relative w-full mx-auto rounded-[28px] h-[64px]"
          style={{
            background: 'linear-gradient(135deg, #14381a 0%, #27692c 60%, #2d7d32 100%)',
            boxShadow: '0 -4px 30px rgba(20,56,26,0.3), 0 8px 30px rgba(20,56,26,0.5), inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
        >
          {/* Floating Bubble */}
          <motion.div
            className="absolute z-20"
            initial={false}
            animate={{
              left: `calc(${activeIndex * (100 / navLinks.length)}% + ${(100 / navLinks.length / 2)}% - 26px)`
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 22 }}
            style={{ top: '-20px' }}
          >
            <div
              className="w-[52px] h-[52px] rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #a8e063, #56ab2f)',
                boxShadow: '0 6px 20px rgba(86,171,47,0.5)',
              }}
            >
              {React.createElement(navLinks[activeIndex].icon, { size: 22, className: 'text-white drop-shadow-sm' })}
            </div>
            {/* Small label below bubble */}
            <p className="text-center text-[9px] font-bold text-lime-300 mt-0.5 uppercase tracking-wider">
              {navLinks[activeIndex].name}
            </p>
          </motion.div>

          {/* Nav items */}
          <div className="flex items-center justify-around h-full px-3">
            {navLinks.map((link, i) => {
              const active = activeIndex === i;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative flex flex-col items-center justify-center flex-1 h-full"
                >
                  <motion.div
                    animate={{ opacity: active ? 0 : 0.7, y: active ? -5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <link.icon size={20} color="white" />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Spacer */}
      <div className="lg:hidden h-20" />
    </>
  );
};

export default Header;
