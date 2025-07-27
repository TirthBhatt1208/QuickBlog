import React from 'react'

function Newsletter() {
  return (
    <div className='flex flex-col items-center justify-center txt-ce'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'>
            Subsribe to get the latest blog , new tech , andd exclusve news.
        </p>

        <form  className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
            <input 
                type="text" 
                className='flex-1 h-12 px-4 border border-gray-300 rounded-l-md focus:outline-none focus:border-gray-400 bg-white text-gray-700 placeholder-gray-400'
                placeholder='Enter your email'
                required/>
            <button 
                type='submit' 
                className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>
                    Subscribe
                </button>
        </form>
    </div>
  )
}

export default Newsletter