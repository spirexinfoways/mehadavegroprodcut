

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { Globe, Menu, X } from 'lucide-react';
// import logo from '../assets/HomeImg/logo1.png';
// import headerBg from '../assets/HomeImg/Artboard.png';
// import LanguageSelector from './LanguageSelector';

// // Define routes for navigation links
// const navRoutes = {
//   Home: '/',
//   About: '/about',
//   Products: '/products',
//   Gallery: '/gallery',
//   EBrochure: '/ebrochure',
//   Contact: '/contact',
// };

// const Header = () => {
//   const [selectedLang, setSelectedLang] = useState('EN');
//   const [isLangOpen, setIsLangOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('Home'); // Track active link

//   const navLinks = ['Home', 'About', 'Products', 'Gallery', 'EBrochure', 'Contact'];
//   const languages = ['EN', 'ES', 'FR', 'DE'];

//   return (
//     <>
//       <header className="w-full relative z-100">
//         {/* Background Image */}
//         <img
//           src={headerBg}
//           alt="Header Background"
//           className="absolute h-75 lg:h-99 w-full inset-0 -z-1"
//         />
//         <style>{`
//           /* Desktop Nav Link Swipe Up Animation */
//           .nav-link {
//             position: relative;
//             cursor: pointer;
//             color: var(--darkgreen);
//           }

//           .nav-link .word-container {
//             position: relative;
//             display: inline-block;
//             height: 1.5em;
//             overflow: hidden;
//           }

//           .nav-link .word {
//             display: block;
//             transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           }

//           .nav-link:hover .word,
//           .nav-link.active .word {
//             transform: translateY(-100%);
//           }

//           .nav-link .word-duplicate {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             display: block;
//             transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           }

//           .nav-link:hover .word-duplicate,
//           .nav-link.active .word-duplicate {
//             transform: translateY(-100%);
//           }

//           /* Double Underline Effect - fills from center */
//           .nav-link::before,
//           .nav-link::after {
//             content: '';
//             position: absolute;
//             bottom: 0;
//             left: 50%;
//             width: 0;
//             height: 2px;
//             transition: all 0.4s ease;
//             transform: translateX(-50%);
//           }

//           .nav-link::before {
//             bottom: 4px;
//             background: linear-gradient(90deg, var(--orange), var(--green));
//           }

//           .nav-link::after {
//             bottom: 0;
//             background: linear-gradient(90deg, var(--green), var(--darkgreen));
//             transition-delay: 0.1s;
//           }

//           .nav-link:hover::before,
//           .nav-link:hover::after,
//           .nav-link.active::before,
//           .nav-link.active::after {
//             width: 100%;
//           }

//           .nav-link.active {
//             font-weight: 600;
//           }

//           .logo-gradient {
//             background: linear-gradient(135deg, var(--orange), var(--green));
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//           }

//           .lang-btn {
//             transition: all 0.3s ease;
//             border: 2px solid var(--green);
//           }

//           .lang-btn:hover {
//             background: linear-gradient(135deg, var(--orange), var(--green));
//             border-color: var(--orange);
//             transform: translateY(-2px);
//             box-shadow: 0 4px 12px rgba(230, 114, 37, 0.3);
//           }

//           .lang-dropdown {
//             animation: slideDown 0.3s ease-out;
//           }

//           @keyframes slideDown {
//             from {
//               opacity: 0;
//               transform: translateY(-10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           .lang-option {
//             transition: all 0.2s ease;
//           }

//           .lang-option:hover {
//             background: linear-gradient(90deg, rgba(230, 114, 37, 0.1), rgba(103, 188, 69, 0.1));
//             transform: translateX(4px);
//           }

//           .mobile-menu {
//             position: fixed;
//             top: 0;
//             left: -100%;
//             width: 280px;
//             height: 100vh;
//             background: white;
//             transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//             box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
//             z-index: 100;
//           }

//           .mobile-menu.open {
//             left: 0;
//           }

//           .mobile-overlay {
//             position: fixed;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: rgba(0, 0, 0, 0.5);
//             opacity: 0;
//             visibility: hidden;
//             transition: all 0.3s ease;
//             z-index: 99;
//           }

//           .mobile-overlay.open {
//             opacity: 1;
//             visibility: visible;
//           }

//           .mobile-nav-link {
//             position: relative;
//             display: block;
//             padding: 16px 24px;
//             color: #374151;
//             font-weight: 500;
//             transition: all 0.3s ease;
//             border-left: 3px solid transparent;
//             border-bottom: 1px solid #e5e7eb;
//           }

//           .mobile-nav-link:hover {
//             background: linear-gradient(90deg, rgba(230, 114, 37, 0.1), rgba(103, 188, 69, 0.1));
//             border-left-color: var(--orange);
//             padding-left: 32px;
//           }

//           .mobile-nav-link.active {
//             background: linear-gradient(90deg, rgba(230, 114, 37, 0.15), rgba(103, 188, 69, 0.15));
//             border-left-color: var(--orange);
//             padding-left: 32px;
//             font-weight: 600;
//             color: var(--darkgreen);
//           }

//           .menu-btn {
//             border: 2px solid var(--green);
//             transition: all 0.3s ease;
//           }

//           .menu-btn:hover {
//             background: linear-gradient(135deg, var(--orange), var(--green));
//             border-color: var(--orange);
//             transform: scale(1.05);
//           }
//         `}</style>

//         <div className="outfit hidden w-full mx-auto h-10 bg-[var(--dark)] text-white text-sm lg:flex justify-between items-center px-6">
//           <h1>+91 1234567890 | earthagri@info.com</h1>
//           <h1>Opening Hours : Sunday- Friday, 08:00 am - 05:00pm</h1>
//         </div>

//         <nav className="container mx-auto px-4 sm:px-6 py-4">
//           <div className="flex justify-between items-center">
//             {/* Logo - Left Side */}
//             <div className="flex items-center">
//               <Link to="/">
//                 <img src={logo} alt="Logo" className="w-28" />
//               </Link>
//             </div>

//             {/* Navigation Links - Center (Desktop) */}
//             <div className="outfit hidden lg:flex items-center space-x-12">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link}
//                   to={navRoutes[link]}
//                   className={`nav-link text-lg font-medium ${activeLink === link ? 'active' : ''}`}
//                   onClick={() => setActiveLink(link)}
//                 >
//                   <span className="word-container">
//                     <span className="word">{link}</span>
//                     <span className="word-duplicate">{link}</span>
//                   </span>
//                 </Link>
//               ))}
//             </div>

//             {/* Right Side - Language & Menu */}
//             <div className="flex items-center space-x-4">
//               <LanguageSelector />

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(true)}
//                 className="lg:hidden menu-btn p-2 rounded-lg"
//               >
//                 <Menu size={24} style={{ color: 'var(--darkgreen)' }} />
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
//         onClick={() => setIsMobileMenuOpen(false)}
//       />

//       {/* Mobile Menu Sidebar */}
//       <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">
//           <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
//             <img src={logo} alt="Logo" className="w-30" />
//           </Link>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//           >
//             <X size={24} style={{ color: 'var(--darkgreen)' }} />
//           </button>
//         </div>

//         <nav className="py-4">
//           {navLinks.map((link) => (
//             <Link
//               key={link}
//               to={navRoutes[link]}
//               className={`mobile-nav-link ${activeLink === link ? 'active' : ''}`}
//               onClick={() => {
//                 setActiveLink(link);
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               {link}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import logo from '../assets/HomeImg/logo1.png';
import headerBg from '../assets/HomeImg/Artboard.png';
import LanguageSelector from './LanguageSelector';

const navRoutes = {
  Home: '/',
  About: '/about',
  Products: '/products',
  Gallery: '/gallery',
  EBrochure: '/ebrochure',
  Contact: '/contact',
};

const Header = () => {
  const [selectedLang, setSelectedLang] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'About', 'Products', 'Gallery', 'EBrochure', 'Contact'];
  const languages = ['EN', 'ES', 'FR', 'DE'];

  // ✅ FIX: Detect current URL and set active link automatically
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    const active = Object.keys(navRoutes).find(
      (key) => navRoutes[key] === currentPath
    );

    if (active) {
      setActiveLink(active);
    }
  }, [location.pathname]);

  return (
    <>
      <header className="w-full relative z-100">
        <img
          src={headerBg}
          alt="Header Background"
          className="absolute h-80 lg:h-80 w-full inset-0 -z-1"
        />

        <style>{`
          .nav-link {
            position: relative;
            cursor: pointer;
            color: var(--darkgreen);
            display: inline-block;
          }
          .nav-link .word-container {
            position: relative;
            display: inline-block;
            height: 1.5em;
            overflow: hidden;
            vertical-align: bottom;
          }
          .nav-link .word {
            display: block;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .nav-link:hover .word,
          .nav-link.active .word {
            transform: translateY(-100%);
          }
          .nav-link .word-duplicate {
            position: absolute;
            top: 100%;
            left: 0;
            display: block;
            background: linear-gradient(to right, var(--orange) 50%, var(--darkgreen) 50%);
            background-size: 200% 100%;
            background-position: 100% 0; /* Start at right (var(--darkgreen)) */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), background-position 0.5s ease-out;
          }
          .nav-link:hover .word-duplicate,
          .nav-link.active .word-duplicate {
            transform: translateY(-100%);
            background-position: 0 0; /* Swipe to left (var(--orange)) */
          }
          .nav-link.active .word-duplicate {
            font-weight: 600;
          }
          .logo-gradient {
            background: linear-gradient(135deg, var(--orange), var(--green));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .lang-btn {
            transition: all 0.3s ease;
            border: 2px solid var(--green);
          }
          .lang-btn:hover {
            background: linear-gradient(135deg, var(--orange), var(--green));
            border-color: var(--orange);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(230, 114, 37, 0.3);
          }
          .lang-dropdown {
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .lang-option {
            transition: all 0.2s ease;
          }
          .lang-option:hover {
            background: linear-gradient(90deg, rgba(230, 114, 37, 0.1), rgba(103, 188, 69, 0.1));
            transform: translateX(4px);
          }
          .mobile-menu {
            position: fixed;
            top: 0;
            left: -100%;
            width: 280px;
            height: 100vh;
            background: white;
            transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
            z-index: 100;
          }
          .mobile-menu.open {
            left: 0;
          }
          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 99;
          }
          .mobile-overlay.open {
            opacity: 1;
            visibility: visible;
          }
          .mobile-nav-link {
            position: relative;
            display: block;
            padding: 16px 24px;
            color: #374151;
            font-weight: 500;
            transition: all 0.3s ease;
            border-left: 3px solid transparent;
            border-bottom: 1px solid #e5e7eb;
          }
          .mobile-nav-link:hover {
            background: linear-gradient(90deg, rgba(230, 114, 37, 0.1), rgba(103, 188, 69, 0.1));
            border-left-color: var(--orange);
            padding-left: 32px;
          }
          .mobile-nav-link.active {
            background: linear-gradient(90deg, rgba(230, 114, 37, 0.15), rgba(103, 188, 69, 0.15));
            border-left-color: var(--orange);
            padding-left: 32px;
            font-weight: 600;
            color: var(--darkgreen);
          }
          .menu-btn {
            border: 2px solid var(--green);
            transition: all 0.3s ease;
          }
          .menu-btn:hover {
            background: linear-gradient(135deg, var(--orange), var(--green));
            border-color: var(--orange);
            transform: scale(1.05);
          }
        `}</style>

        {/* <div className="outfit hidden w-full mx-auto h-10 bg-[var(--dark)] text-white text-sm lg:flex justify-between items-center px-6">
          <h1>+91 1234567890 | earthagri@info.com</h1>
          <h1>Opening Hours : Sunday- Friday, 08:00 am - 05:00pm</h1>
        </div> */}

        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">

            <div className="flex items-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-25 h-25 transform translate-y-3" />
              </Link>
            </div>

            <div className="outfit hidden lg:flex items-center space-x-12 lg:pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  to={navRoutes[link]}
                  className={`nav-link text-lg font-medium ${activeLink === link ? 'active' : ''}`}
                  onClick={() => setActiveLink(link)}
                >
                  <span className="word-container">
                    <span className="word">{link}</span>
                    <span className="word-duplicate">{link}</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden menu-btn p-2 rounded-lg"
              >
                <Menu size={24} style={{ color: 'var(--darkgreen)' }} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logo} alt="Logo" className="w-30" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} style={{ color: 'var(--darkgreen)' }} />
          </button>
        </div>

        <nav className="py-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={navRoutes[link]}
              className={`mobile-nav-link ${activeLink === link ? 'active' : ''}`}
              onClick={() => {
                setActiveLink(link);
                setIsMobileMenuOpen(false);
              }}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
