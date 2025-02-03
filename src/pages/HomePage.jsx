import React from 'react'
import HeroSection from '../Components/HomePage/HeroSection.jsx'
import VideoSection from '../Components/HomePage/VideoSection.jsx'
import MarqueeText from '../Components/HomePage/MarqueeText.jsx'
import Introduction from '../Components/HomePage/Introduction.jsx'
import FeaturedProjects from '../Components/HomePage/FeaturedProjects.jsx'
import Services from '../Components/HomePage/Services.jsx'
import BrandPartners from '../Components/HomePage/BrandPartners.jsx'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <VideoSection />
            <MarqueeText />
            <Introduction />
            <FeaturedProjects />
            <Services />
            <BrandPartners />
        </>
    )
}

export default HomePage