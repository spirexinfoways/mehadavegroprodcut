import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import the CSS (required for animations to work)
import HomePage from './Pages/HomePage';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import PageLoader from './CommonComponents/PageLoader';
import WhatsApp3DButton from './CommonComponents/WhatsApp3DButton';
import SmoothScroll from './CommonComponents/SmoothScroll';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import ProductPage from './Pages/ProductPage';
import EBrochurePage from './Pages/EBrochurePage';
import ContactPage from './Pages/ContactPage';
import ScrollToTop from './CommonComponents/ScrollToTop';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300, // animation duration
      once: false, // whether animation should happen only once - while scrolling down
      easing: "ease-in-out", // animation easing
    });
  }, []);
  return (
    <div className='overflow-hidden'>
      <WhatsApp3DButton />
      <SmoothScroll />
      <PageLoader />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/about' element={<AboutPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/ebrochure' element={<EBrochurePage />} />
        <Route path='/contact' element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
