import React from 'react'
import './generalComponentStyle.css'
const Blob = ({ position = 'absolute', WidthHeight = 'w-[500px] h-[500px]', transform = '', borderRoundness='rounded-full', customClass = '' }) => {

  return (
    <div className={`${customClass} ${WidthHeight} ${position} ${transform} ${borderRoundness} blob `}>
    </div>
  )
}

export default Blob