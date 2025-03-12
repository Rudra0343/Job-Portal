import  { useEffect } from 'react'
import { JOB_API_END_POINT } from '@/components/utils/constant'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setAllJobs } from '@/components/redux/jobSlice'


const useGetSingleJobs = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try{
                const res = await axios.get(`${JOB_API_END_POINT}get`, {withCredentials: true});
                if(res.status === 200){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error){

            }
        }
        fetchAllJobs();
    },[])
}

export default useGetSingleJobs
