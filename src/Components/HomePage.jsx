import React from 'react'
import HeroSection from './HomePage/HeroSection.jsx'
import VideoSection from './HomePage/VideoSection.jsx'
import MarqueeText from './HomePage/MarqueeText.jsx'
import Introduction from './HomePage/Introduction.jsx'
import FeaturedProjects from './HomePage/FeaturedProjects.jsx'
import Services from './HomePage/Services.jsx'
import BrandPartners from './HomePage/BrandPartners.jsx'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <VideoSection />
            <MarqueeText />
            <Introduction />
            <FeaturedProjects />
            <Services />
            <BrandPartners carousal_item_border_color='customGray' />
        </>
    )
}

export default HomePage