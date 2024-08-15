import React from 'react'
import Blob from '../GeneralComponents/Blob'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Introduction = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.from('.moving_blob', {
            y: '30%',
            x :'60%',
            transform: 'scale3d(0.85,0.95,1) rotate(-50deg)',
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: 'power1',
        })
    },{scope : '.introduction-container'})

    return (
        <section className='introduction-container max-w-[1345px] mx-auto my-20 sm:my-40'>
            <div className="wrapper relative z-0 px-5 sm:px-16 md:px-16 flex flex-col md:flex-row gap-16">
                <Blob transform='translate-x-[70%] translate-y-[10%]' position='absolute top-0 left-0 z-[-1]' customClass='moving_blob' />

                <h2 className='side-1 text-4xl md:text-[3.5rem] md:leading-[4rem] lg:text-7xl'>
                    We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
                </h2>

                <div className="side-2 w-[70%] md:w-full sm:max-w-[300px] md:max-w-full">
                    <figure className=' mt-0 md:mt-32 lg:mt-40'>
                        <img src="../src/assets/images/Introduction.webp" alt="tick" className='rounded-xl' />
                        <figcaption className='font-light mt-10'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</figcaption>
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Introduction