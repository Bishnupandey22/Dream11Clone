import React from 'react'
import dream11 from "../Assests/dream11video.mp4"
import user1 from "../Assests/user1_2022.webp"
import user2 from "../Assests/user2_2022.webp"
import user3 from "../Assests/user3_2022.webp"
const HowToPlay = () => {
  return (
    <div>
      <div className='bg-gray-400 pt-5'>
        <h2 className='font-bold text-xl '>How to <span className='text-red-600'>Play</span> </h2>
        <p className='text-gray-700 mr-12 ml-12 text-sm'>Ready to challenge other sports fans? Watch this video to learn how to play on Dream11 and get started now. Compete with sports fans, make a perfect Dream11 team with the best combination of players as per your knowledge and skill and win big.</p>

      </div>
      <div className='flex justify-center mt-5 mb-5'>
        <video width="350" height="260" controls src={dream11}></video>
      </div>

    </div>
  )
}

export default HowToPlay
