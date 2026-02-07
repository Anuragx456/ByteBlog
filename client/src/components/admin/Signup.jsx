import React, { useState } from 'react'
import { signUp } from '../../lib/auth-client';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await signUp.email({
            email: email,
            password: password,
            name: name,
        }, {
            onRequest: () => {
                // loading state if needed
            },
            onSuccess: () => {
                toast.success("Account created successfully");
                navigate('/admin'); 
            },
            onError: (ctx) => {
                toast.error(ctx.error.message);
            }
        });
    };

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl 
        shadow-primary/15 rounded-lg'>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-full py-6 text-center'>
                    <h1 className='text-3xl font-bold'>Join <span className='text-primary'>Us</span></h1>
                    <p className='font-light'>Create an account to get started</p>
                </div>
                <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
                    
                    <div className='flex flex-col'>
                        <label> Name </label>
                        <input onChange={e => setName(e.target.value)} value={name} 
                        type="text" required placeholder='Enter your full name' 
                        className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>

                    <div className='flex flex-col'>
                        <label> Email </label>
                        <input onChange={e => setEmail(e.target.value)} value={email} 
                        type="email" required placeholder='Enter your email address' 
                        className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>

                    <div className='flex flex-col'>
                        <label> Password </label>
                        <input onChange={e => setPassword(e.target.value)} value={password}
                        type="password" required placeholder='Create a password' 
                        className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>
                    
                    <button type='submit' className='w-full py-3 font-medium bg-primary
                     text-white rounded cursor-pointer hover:bg-primary/90 transition-all'> Sign Up </button>
                    
                    <p className='mt-4 text-center text-sm'>
                        Already have an account? <span onClick={() => navigate('/admin')} className='text-primary cursor-pointer hover:underline'>Login</span>
                    </p>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup
