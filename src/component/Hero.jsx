import React from 'react'

function Hero() {
    return (
        <div>
            <section className='bg-white flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-24'>
                <div className='flex flex-col items-start space-y-6 md:space-y-8 md:w-2/3'>
                    <h2 className='text-3xl md:text-4xl font-bold'>
                        HELLO
                        <hr className='w-20 border-t-4 border-black my-3'></hr>
                        <span className='text-6xl md:text-7xl'>I AM SAIKAT</span>
                    </h2>
                    <hr />
                    <p className='text-gray-700 text-lg md:text-xl'>SENIOR WEB DEVELOPER</p>
                    <div className='flex space-x-4'>
                        <button className='bg-purple-600 text-white py-3 px-8 rounded-lg hover:bg-purple-800 hover:text-white text-lg'>HIRE ME</button>
                        <button className='border border-purple-600 text-purple-600 py-3 px-8 rounded-lg hover:bg-purple-800 hover:text-white text-lg'>GET CV</button>
                    </div>
                </div>
                <div className='mt-12 md:mt-0 md:w-1/2 flex justify-center'>
                    <img className='w-96 md:w-full' src="home.png" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Hero