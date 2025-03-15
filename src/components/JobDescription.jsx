import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import { setSingleJobs } from './redux/jobSlice';
import axios from 'axios';
import { JOB_API_END_POINT } from '@/components/utils/constant';
import { useDispatch, useSelector } from 'react-redux';

const JobDescription = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isApplied = true;
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const { SingleJobs } = useSelector(store => store.job);
  const { user } = useSelector(store => store.auth);

  useEffect(() => {
    const fetchSingleJobs = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${JOB_API_END_POINT}get/${jobId}`, { withCredentials: true });
        console.log(res);

        if (res.status === 200) {
          dispatch(setSingleJobs(res.data.Jobs));
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }

    }
    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);

  if (loading) {
    return <div>Loading job details...</div>;
  }

  // Show an error message if the fetch failed
  if (error) {
    return <div>{error}</div>;
  }

  // If singleJobs is undefined or empty, show a fallback
  if (!SingleJobs) {
    return <div>No job details available.</div>;
  }

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>{SingleJobs?.title || 'N/A'}</h1>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">{SingleJobs?.position || 'N/A'}Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">{SingleJobs?.jobType || 'N/A'}</Badge>
            <Badge className={'text-[#7209B7] font-bold'} variant="ghost">{SingleJobs?.salary || 'N/A'}LPA</Badge>
          </div>
        </div>
        <Button className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#5f178f] hover:bg[]'}`}>{isApplied ? 'Already Applied' : 'Apply Now'}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role :<span className='pl-4 font-normal text-gray-800'>{SingleJobs?.title || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Loction :<span className='pl-4 font-normal text-gray-800'>{SingleJobs?.location || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Description :<span className='pl-4 font-normal text-gray-800'>{SingleJobs?.description || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Experience :<span className='pl-4 font-normal text-gray-800'>{SingleJobs?.experience || 'N/A'} yrs</span></h1>
        <h1 className='font-bold my-1'>Salary :<span className='pl-4 font-normal text-gray-800'>{SingleJobs?.salary || 'N/A'}LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants :<span className='pl-4 font-normal text-gray-800'>{SingleJobs?.applicants || 'N/A'}</span></h1>
        <h1 className='font-bold my-1'>Posted Date :<span className='pl-4 font-normal text-gray-800'>3-1-2025</span></h1>
      </div>
    </div>
  )
}

export default JobDescription