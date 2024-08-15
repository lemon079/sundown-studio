import React from 'react'
import './generalComponentStyle.css'

const OrangeBall = ({ dimensions = '4', customClass = '' }) => {
    return (
        // in dimension prop only give width and height like w-14 h-14 or w-2 h-2
        // tried doing this w-${size} h-${size} where size is 4,3,6...etc but didnt work 
        <span className={`orange-ball ${dimensions} ${customClass}`}></span>
    )
}

export default OrangeBall