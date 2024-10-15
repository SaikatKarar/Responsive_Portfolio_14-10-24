import React from 'react'
import { FaFacebook, FaDribbbleSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Footer() {
    return (
        <div>
            <footer className='bg-gray-100 text-center py-10'>
                <div className='text-purple-600 font-bold text-2xl'>SAIKAT KARAR</div>
                <p className='text-black font-semibold mt-4'>FOLLOW ME</p>

                <div className='flex justify-center space-x-6 mt-4 text-gray-500'>
                    <FaFacebook className='hover:text-gray-700 cursor-pointer' />
                    <FaXTwitter className='hover:text-gray-700 cursor-pointer' />
                    <FaDribbbleSquare className='hover:text-gray-700 cursor-pointer' />
                </div>
                <p className='text-gray-500 mt-2'>Copyright &#9400; All right reserved | This is made by Saikat Karar</p>
            </footer>
        </div>
    )
}

export default Footer