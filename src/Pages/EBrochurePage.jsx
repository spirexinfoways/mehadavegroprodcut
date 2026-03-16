import React from 'react'
import DynamicPageHeader from './../CommonComponents/DynamicPageHeader';
import pg1 from '../assets/HomeImg/pg (2).jpg'
import BrochureComponent from './../Components/EBrochureComponent/BrochureComponent';

const EBrochurePage = () => {
    return (
        <div className='outfit overflow-hidden'>
            <DynamicPageHeader
                title="E-Brochure"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "E-Brochure" }
                ]}
                bgImage={pg1}
            />
            <BrochureComponent />
        </div>
    )
}

export default EBrochurePage
