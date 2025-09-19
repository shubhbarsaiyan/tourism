import React from 'react'
import MyVideo from '../assets/JHARKHAND.mp4'

const Video = () => {
  return (
    <div className='  h-screen flex justify-center items-center w-full pt-20  '>
       <video src={MyVideo} autoPlay muted loop className='w-full h-100vh '></video>
       {/* <h1 className='absolute'>Not Just a Trip - An Immersive Journey Through Jharkhand</h1> */}
    </div>
  )
}

export default Video
