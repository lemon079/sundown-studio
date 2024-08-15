import React, { useRef } from 'react'
import Blob from '../GeneralComponents/Blob'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const HeroSection = () => {

    useGSAP(() => {

        gsap.to('.moving_blob_1', {
            y: '40%',
            duration: 1.5,
            repeat: -1,
            delay: 1,
            yoyo: true,
            ease: 'power1.inOut'
        })

        gsap.to('.moving_blob_2', {
            y: '75%',
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        })

        gsap.to('.moving_blob_3', {
            y: '100%',
            x: '-20%',
            duration: 1.5,
            delay: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'power1'
        })
    }, { scope: '.hero-container' })

    return (
        <section className='hero-container'>
            <div className='wrapper relative gap-10 mt-16 sm:mt-36 font-medium mx-5 sm:mx-10 pb-10 grid grid-cols-1 sm:grid-cols-2 justify-between items-end border-b-2 border-borderColor'>
                <div className='absolute right-0 '>
                    <Blob customClass='static_blob_1' WidthHeight='w-[51vw] h-[62vh]' position='bottom-0 right-0 ' transform='translate-x-[10%] translate-y-[80%]' />
                    <Blob customClass='moving_blob_1' WidthHeight='w-[29vw] h-[300px]' position='bottom-0 right-0 'transform='translate-x-[70%] translate-y-[50%]' />
                    <Blob customClass='moving_blob_2' WidthHeight='w-[25vw] h-[46vh]' position='bottom-0 right-0 ' transform='translate-x-[-50%] translate-y-[90%] rotate-[-110deg]' />
                    <Blob customClass='moving_blob_3' WidthHeight='w-[29vw] h-[46vh]' position='bottom-0 right-0 ' transform='translate-x-[-50%] translate-y-[100%] rotate-[-130deg] ' />
                </div>
                <div className='side-1 text-xl sm:text-3xl order-2 max-w-[350px] sm:max-w-[460px]'>
                    <p>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</p>
                </div>
                <div className="side-2 order-1 sm:order-2 text-right">
                    <h1 className='uppercase text-[10vw] leading-[10vw]'>
                        <div>spaces</div>
                        <div>that</div>
                        <div>inspire</div>
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default HeroSection