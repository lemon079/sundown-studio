import React from 'react'
import BrandPartners from './HomePage/BrandPartners'
import Blob from './GeneralComponents/Blob'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Studio = () => {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
        gsap.from('.moving_blob', {
            y: '15%',
            x: '10%',
            transform: 'scale3d(0.95,1,1.2) rotate(-50deg)',
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
        })

    }, { scope: '.studio-container' })

    const container = [
        {
            id: 1,
            heading: { name: 'create', fontsize: 0 },
            text: 'Crafting the concepts and experiences. Connecting the dots and amplifying the story.',
            list: ['Strategy & Ideation', 'Concept Development', 'Environmental Design', 'Graphic Design', 'Visual Merchandising', '3D Renderings', 'Consumer Experience']
        },
        {
            id: 2,
            heading: { name: 'produce', fontsize: 5 },
            text: 'Production, strategy, partnership, and materials. The end point is more than the sum of its parts.',
            list: ['Project Management', 'Budget Ownership', 'Technical Drawings', 'Digital & Technology Integration', 'Custom Fabrication', 'Graphics Production', 'Material Samples & Prototyping']
        },
        {
            id: 3,
            heading: { name: 'implement', fontsize: 5 },
            text: 'Onsite guidance, installation and oversight to take each project through to the finish line.',
            list: ['Onsite Project Management', 'Installation Oversight', 'Sustainability Consulting', 'Site Survey/Permitting', 'Onsite Logistics', 'Photography & Videography']
        }
    ]

    return (
        <>
            <section className="studio-container bg-gradient-to-b from-customWhite from-10% via-customOrange via-50% to-orange-500 to-60%">
                <section className='mt-20 relative'>
                    <Blob WidthHeight='w-[500px] h-[500px]' position='top-0 left-0' transform='translate-x-[30%] translate-y-[5%]' customClass='moving_blob' />
                    <h1 className='text-[15vw] sm:text-[13vw] leading-[15vw] sm:leading-[13vw] uppercase text-center tracking-tight'>
                        <div>turning</div>
                        <div className='sm:pl-40 lg:pr-32 relative'>ideas into</div>
                        <div className='sm:pl-40 lg:pl-52 relative'>reality</div>
                    </h1>
                    <div className='mt-16 px-5 sm:px-10 md:px-20 flex sm:items-center flex-col sm:flex-row gap-14 lg:gap-32'>
                        <figure className='w-[280px] sm:w-full relative'>
                            <img src="src/assets/images/Studio/hero-image.webp" className='rounded-2xl object-cover w-full h-full ' />
                        </figure>
                        <p className='relative text-2xl lg:text-4xl xl:text-5xl'>We love creating experiences from idea to install, but are also comfortable jumping into a project at any point in the process, from Creative, to Design, to Project Management and Implementation.</p>
                    </div>
                </section>
                <section className="containers mt-28 px-5 sm:px-10 md:px-16 space-y-20">
                    {
                        container.length > 0 && container.map((container) => (
                            <section key={container.id} className={`container-${container.id} space-y-10 lg:space-y-28 `}>
                                <h2 className={`uppercase text-[${(20 - container.heading.fontsize).toString()}vw] leading-[17vw] lg:text-center`}>{container.heading.name}</h2>
                                <div className='grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-0 max-w-[1145px] mx-auto'>
                                    <p className='text-2xl leading-[1.5rem] sm:text-3xl lg:text-4xl lg:max-w-[430px] lg:mx-auto lg:col-span-2'>{container.text}</p>
                                    <ul className='capitalize text-lg font-light lg:col-start-4 col-span-full'>
                                        {container.list.map((item, index) => <li className='border-b-[1px] border-black/40 pb-5 mb-5'><span className='text-sm text-black/60 mr-10'>0{index + 1}</span>{item}</li>)}
                                    </ul>
                                </div>
                            </section>
                        ))
                    }
                </section>

                <BrandPartners carousal_item_border_color='black/40' />

            </section>

        </>
    )
}

export default Studio