import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCard = () => {

    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200 cursor-pointer'>
            <div className='company-info'>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-1xl text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ispum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
                <Badge className={'text-[#7209B7] font-bold'} variant="ghost">24LPA</Badge>
            </div>
        </div>
    )
}


export default LatestJobCard