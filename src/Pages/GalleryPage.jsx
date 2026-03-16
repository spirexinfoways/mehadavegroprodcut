import React from 'react'
import DynamicPageHeader from './../CommonComponents/DynamicPageHeader';
import pg1 from '../assets/HomeImg/pg (3).jpg'
import Gallery from './../Components/GalleryComponent/Gallery';

const GalleryPage = () => {
  return (
    <div className='overflow-hidden outfit'>
            <DynamicPageHeader
                title="Our Gallery"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Gallery" }
                ]}
                bgImage={pg1}
            />
      <Gallery />
    </div>
  )
}

export default GalleryPage
