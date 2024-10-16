import React from 'react'

function Services() {
    return (
        <div id='services'>
            <section className='bg-white py-12'>
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-8'>
                        <h2 className='text-4xl font-bold mb-2'>SERVICE OFFERS</h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>Start by creating a new vite project if you don't have one up already. The most common approach is to use Create Vite.</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg'>
                            <div className='mb-4'>
                                <img src="s1.png" alt="" className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>WEB DEVELOPER</h3>
                            <p className='text-gray-600'>Start by creating a new vite project if you don't have one up already. The most common approach is to use Create Vite.</p>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg'>
                            <div className='mb-4'>
                                <img src="s2.png" alt="" className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>WEB DEVELOPER</h3>
                            <p className='text-gray-600'>Start by creating a new vite project if you don't have one up already. The most common approach is to use Create Vite.</p>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg'>
                            <div className='mb-4'>
                                <img src="s3.png" alt="" className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>WEB DEVELOPER</h3>
                            <p className='text-gray-600'>Start by creating a new vite project if you don't have one up already. The most common approach is to use Create Vite.</p>
                        </div>
                        <div className='bg-gray-50 p-6 rounded-lg text-center transition-shadow duration-300 hover:shadow-lg'>
                            <div className='mb-4'>
                                <img src="s4.png" alt="" className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>WEB DEVELOPER</h3>
                            <p className='text-gray-600'>Start by creating a new vite project if you don't have one up already. The most common approach is to use Create Vite.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services