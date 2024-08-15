import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './generalComponentStyle.css'

const Loading = () => {

    useGSAP(() => {

        const tl = gsap.timeline();

        window.onload = function () {

            gsap.to('.loading-text', {
                opacity: 1,
                translateY: '0%',
                stagger: 0.6,
                ease: 'expo.inOut',
            })

            gsap.to('.loading-text', {
                delay: 0.5,
                translateY: '-100%',
                stagger: 0.6,
                ease: 'expo.inOut',
            })

            gsap.to('.loading-screen', {
                x: '-100%',
                duration: 1,
                delay: 2,
                ease: 'power4.inOut',
            })
        }
    },)

    const loadText = ['content', 'environment', 'experiences']

    return (
        <>
            <div className='loading-screen'>
                <div className='overflow-hidden relative w-[350px] h-[52px]'>
                    {loadText.map(text => (
                        <div key={text} className='loading-text absolute opacity-0 translate-y-[100%] top-0 left-0 text-center'>{text}</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Loading