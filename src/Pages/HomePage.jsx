import React from 'react'
import HeroSlider from '../Components/HomeComponents/HeroSlider'
import AboutUs from '../Components/HomeComponents/AboutUs'
import SesameProductsGrid from './../Components/HomeComponents/SesameProductsGrid';
import SesameFeatures from './../Components/HomeComponents/SesameFeatures';
import VideoHeroSection from './../Components/HomeComponents/VideoHeroSection';
// import CargoSlider from './../Components/HomeComponents/CargoSlider';
import FAQComponent from './../Components/HomeComponents/FAQComponent';
import CounterSection from './../Components/HomeComponents/CounterSection';

const HomePage = () => {
  return (
    <div className='outfit overflow-hidden'>
      <HeroSlider />
      <AboutUs />
      <CounterSection />
      <SesameProductsGrid />
      <SesameFeatures />
      {/* <CargoSlider /> */}
      <FAQComponent />
      {/* <VideoHeroSection /> */}
    </div>
  )
}

export default HomePage
