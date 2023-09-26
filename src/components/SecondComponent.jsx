import React from 'react'
import icc from "../Assests/icc.webp"
import superSmash from "../Assests/supersmash.webp"
import cricket from "../Assests/cricket.webp"
import wbbl from "../Assests/wbbl.webp"
import hero from "../Assests/herocpl.webp"
import hundread from "../Assests/hundread.webp"
import selectAMatch from "../Assests/selectAMatch.webp"
import createTeam from "../Assests/createTeam.webp"
import joinContest from "../Assests/joinContest.webp"
import "../App.css"

const SecondComponent = () => {
  return (
    <div className='mt-9'>
        <div>
            <h3 className='font-bold'>Official <span className='text-red-600'>Partner</span> </h3>
        </div>
        <div className='flex justify-center'>
            <div className='flex gap-5 mt-5 '>
                <img src={icc} alt="" className='w-3/12 h-3/4 border border-gray-400 rounded-3xl' />
                <img src={superSmash} alt="" className='w-3/12 h-3/4 border border-gray-400  rounded-3xl'/>
                <img src={cricket} alt="" className='w-3/12 h-3/4 border border-gray-400 rounded-3xl'/>
                <img src={wbbl} alt="" className='w-3/12 h-3/4 border border-gray-400 rounded-3xl'/>
                <img src={hero} alt="" className='w-3/12 h-3/4 border border-gray-400 rounded-3xl'/>
                <img src={hundread} alt="" className='w-3/12 h-3/4 border border-gray-400 rounded-3xl'/>
            </div>
        </div>
        <div className=' flex flex-col  justify-center items-center '>
            <div className='justify-center items-center'>
            <p className='font-bold text-xl'>It's easy to start playing <span className='text-red-600 font-bold'>on Dream11</span> </p> 
         <p className='play text-blue-500'>Play <span className='text-blue-700'>Fantasy Cricket</span>  on Dream11 and win big!</p>
         <p className='mr-9 ml-9  text-gray-400'>Enter into the thrilling world of Fantasy sports, a strategy-based online sports game wherein you can create a virtual team of real players playing in real life matches. Create your team to win points based on all the players' performance in a live game.</p>
            </div>
        
        </div>
        <div className='flex justify-center gap-3 mt-5 mb-5'>
            <div className='bg-gray-300 relative h-2/3 rounded-lg p-2'>
                <h2 className=' font-bold pt-12 text-left' >Select A Match</h2>
                <h3 className='text-sm'>chosse an upcoming match that you want to play</h3>
                <div>
                    <h1 className='btn w-1/12  rounded-full absolute top-0 left-2'>1</h1>
                    <img src={selectAMatch} alt="" className='absolute top-[0] right-2 w-1/2'/>
                </div>
            </div>
            <div className='bg-gray-300 relative h-2/3 rounded-lg p-2'>
                <h2 className=' font-bold pt-12 text-left'>Create Team</h2>
                <h3 className='text-sm'>use your skill to pic the right player </h3>
                <div >
                    <h1 className='btn w-1/12  rounded-full absolute top-0 left-2'>2</h1>
                    <img src={createTeam} alt="" className='absolute top-[0] right-2 w-1/2'/>
                </div>
            </div>
            <div className='bg-gray-300 relative h-2/3 rounded-lg p-2'>
                <h2 className=' font-bold pt-12 text-left'>Join Contest</h2>
                <h3 className='text-sm'>Choose between different contests and compete</h3>
                <div>
                    <h1 className='btn w-1/12  rounded-full absolute top-0 left-2'>3</h1>
                    <img src={joinContest} alt="" className='absolute top-[0] right-2 w-1/2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondComponent
