import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCard = () => {

    return (
        <div className='latest-job-card'>
        <div className='company-info'>
            <h1>Company Name</h1>
            <p>India</p>
        </div>
        <div>
            <h1>Job Title</h1>
            <p>Lorem ispum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#7209B7] font-bold'} variant="ghost">24LPA</Badge>
        </div>
    </div>
  )
}


export default LatestJobCard