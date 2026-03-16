import React from 'react'
import DynamicPageHeader from './../CommonComponents/DynamicPageHeader';
import pg1 from '../assets/HomeImg/contact.jpg'
import ContactUs from './../Components/ContactComponent/ContactUs';

const ContactPage = () => {
    return (
        <div className='outfit'>
            <DynamicPageHeader
                title="Contact Us"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" }
                ]}
                bgImage={pg1}
            />
            <ContactUs />
        </div>
    )
}

export default ContactPage
