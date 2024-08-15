import React from 'react'

const VideoSection = () => {
    return (
        <section className='video-container my-16 relative z-[20]'>
            <div className="wrapper px-10">
                <video src='src\assets\videos\converse-soho.mp4' loop={true} muted={true} autoPlay={true} controls={false} className='rounded-3xl'></video>
            </div>
        </section>
    )
}

export default VideoSection