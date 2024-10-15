import React from 'react'

function Clients() {
    return (
        <div className='bg-white py-16'>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className='text-4xl font-bold text-gray-900 mb-4'>CLIENT SAY ABOUT ME</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='p-6 bg-gray-50 rounded-lg shadow-lg text-center'>
                        <img src="about.png" alt="" className='w-24 h-24 mx-auto rounded-full mb-4' />
                        <h3 className='text-xl font-bold text-gray-900'>SINU DAS</h3>
                        <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quaerat odio distinctio?</p>
                    </div>
                    <div className='p-6 bg-gray-50 rounded-lg shadow-lg text-center'>
                        <img src="about.png" alt="" className='w-24 h-24 mx-auto rounded-full mb-4' />
                        <h3 className='text-xl font-bold text-gray-900'>SINU DAS</h3>
                        <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quaerat odio distinctio?</p>
                    </div>
                    <div className='p-6 bg-gray-50 rounded-lg shadow-lg text-center'>
                        <img src="about.png" alt="" className='w-24 h-24 mx-auto rounded-full mb-4' />
                        <h3 className='text-xl font-bold text-gray-900'>SINU DAS</h3>
                        <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quaerat odio distinctio?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients