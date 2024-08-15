import React from 'react'
import OrangeBall from './OrangeBall'
import './generalComponentStyle.css'

const SmallSubHeading = ({ customClass = '', text = '' }) => {
    return (
        <>
            {text.trim().length > 0 &&
                <section className={`sub-heading-container ${customClass}`}>
                    <OrangeBall dimensions='w-2 h-2'/>
                    <h3 className=''>
                        {text}</h3>
                </section>
            }
        </>
    )
}

export default SmallSubHeading