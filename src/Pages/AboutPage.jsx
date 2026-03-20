import React from 'react'
import DynamicPageHeader from './../CommonComponents/DynamicPageHeader';
import pg1 from '../assets/HomeImg/pg (4).jpg'
import AboutSection from './../Components/AboutUsComponent/AboutSection';
import WhyChooseUs from './../Components/AboutUsComponent/WhyChooseUs';
import VisionMission from './../Components/AboutUsComponent/VisionMission';

const AboutPage = () => {
    return (
        <div className='overflow-hidden outfit'>
            <DynamicPageHeader
                title="About Mahadev Agro Product"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" }
                ]}
                bgImage={pg1}
            />
            <AboutSection />
            <WhyChooseUs />
            <VisionMission />
        </div>
    )
}

export default AboutPage
