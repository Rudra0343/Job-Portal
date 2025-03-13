import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import { setSingleJobs } from './redux/jobSlice';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/components/utils/constant';
import { useDispatch, useSelector } from 'react-redux';

const JobDescription = () => {
  const isApplied = false;
  const params = useParams();
  const jobId = params.id;
  const {dispatch} = useDispatch();
  const {singleJobs} = useSelector(store => store.job);

  useEffect(()=>{
    const fetchSingleJobs = async () => {
        try{
            const res = await axios.get(`${JOB_API_END_POINT}get/${jobId}`, {withCredentials: true});
            if(res.status === 200){
                dispatch(setSingleJobs(res.data.jobs));
            }
        } catch (error){
            console.log(error);
            
        }
    }
    fetchSingleJobs();
},[jobId,dispatch,user?._id])

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>Frontend Developer</h1>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#7209B7] font-bold'} variant="ghost">24LPA</Badge>
          </div>
        </div>
        <Button className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#5f178f] hover:bg[]'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role :<span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>Loction :<span className='pl-4 font-normal text-gray-800'>Gujarat</span></h1>
        <h1 className='font-bold my-1'>Description :<span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>Experience :<span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
        <h1 className='font-bold my-1'>Salary :<span className='pl-4 font-normal text-gray-800'>12LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants :<span className='pl-4 font-normal text-gray-800'>4</span></h1>
        <h1 className='font-bold my-1'>Posted Date :<span className='pl-4 font-normal text-gray-800'>3-1-2025</span></h1>
      </div>
    </div>
  )
}

export default JobDescription