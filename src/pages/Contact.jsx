import React from 'react'
import Blob from '../Components/ui/Blob'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.from('.moving_blob', {
            y: 50,
            x: -10,
            transform: 'scale3d(0.95,0.95,1.2) rotate(-50deg)',
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
        })
    }, { scope: '.contact-container' })

    return (
        <>
            <section className="contact-container py-20 md:py-32">
                <div className="wrapper px-10 grid grid-cols-1 gap-20 md:grid-cols-2 items-center max-w-[1320px] mx-auto">

                    <figure className='flex items-center'>
                        <img src="/images/location-map.webp" alt="Location-map" width={500} className='rounded-full' loading='lazy'/>
                    </figure>
                    <section className='relative flex flex-col gap-16 md:gap-20'>
                        <Blob WidthHeight='w-[350px] h-[350px]' position='bottom-0 left-24' customClass='moving_blob' />
                        <div className='text-right'>
                            <h1 className='uppercase text-6xl md:text-5xl lg:text-8xl'>let's work together</h1>
                            <a href="#" className='relative z-[1] text-3xl'>contact@sundown-studion.com</a>
                        </div>
                        <div>
                            <h2 className='relative z-[1] w-fit space-y-4 text-2xl '>
                                <p className='border-b-[1px] border-black'>Roots in Greenpoint, Brooklyn</p>
                                <p className='border-b-[1px] border-black'>Physical work across the US</p>
                                <p>Digital work across the world</p>
                            </h2>
                        </div>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Contact