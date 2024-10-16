import React from 'react'

function Contact() {
    return (
        <div className='flex items-center justify-center py-16 bg-gray-100' id='contact'>
            <div className='bg-gradient-to-r from-purple-500 to-indigo-500 p-16 rounded-lg max-w-3xl w-full mx-auto'>
                <div className='text-center mb-8'>
                    <h2 className='text-3xl font-bold text-white'>GET UPDATE FROM ANYWHERE</h2>
                    <p className='text-white opacity-75 mt-4'>Get In Touch</p>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    <input type="email" placeholder='Enter Email' className='px-4 py-3 w-full max-w-md rounded-l-full text-black focus:ring-indigo-300' />
                    <button className='bg-white text-indigo-700 font-semibold px-6 py-3 rounded-r-full'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Contact