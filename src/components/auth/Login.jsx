import React, {useState} from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../redux/authSlice'


const  Login= () => {
    const [input, setInput] = React.useState({
        email: "",
        password: "",
        role: "",
    });

  const {loading} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    
    try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}login`, input, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        if(res.data.success){
            dispatch(setUser(res.data.user));
            navigate('/');
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message);
    } finally{
        dispatch(setLoading(false));
    }
}


    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5 '>Login</h1>                  
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                           type='email'
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder='abc123@gmail.com'
                        />
                    </div>                    
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type='password'
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder='****'
                        />
                    </div>
                    <div className='flex items-center justyify-between'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type='radio'
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>  
                    </div>
                    {
                        loading && <Button className="w-full my-4" disabled>Loading...</Button>
                    }
                    <Button type="submit" className="w-full my-4">Login</Button>
                    <span>Don't have an account? <Link to="/Signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login