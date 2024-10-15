import React from 'react'

function Skills() {
    return (
        <div>
            <div className='text-center mb-8'>
                <h2 className='text-4xl font-bold mb-2'>SKILLS</h2>
            </div>
            <section className='flex justify-center items-center min-h-screen bg-gray-50 px-6 py-12'>
                <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className='md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8'>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                        <div className='bg-gray-100 h-24 flex justify-center items-center'>HTML</div>
                    </div>
                    <div className='relative bg-white p-8 rounded shadow-md'>
                        <div className='flex flex-col items-center md:items-start space-y-4'>
                            <div className='border-dashed border-2 border-gray-300 p-4 w-full'>
                                <span className='text-purple-600 text-6xl font-bold'>10</span>
                            </div>
                            <div>Years Experience <br /> Working</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills