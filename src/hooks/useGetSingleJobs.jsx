import  { useEffect } from 'react'
import { JOB_API_END_POINT } from '@/components/utils/constant'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setAllJobs, setSingleJobs } from '@/components/redux/jobSlice'


const useGetSingleJobs = (jobId) => {
    const dispatch = useDispatch();
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
    },[])
}

export default useGetSingleJobs
