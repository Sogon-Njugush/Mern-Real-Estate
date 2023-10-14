import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


export default function SignIn() {


  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormdata] = useState({});
  const  navigate  = useNavigate();


  const handleChange = (e) =>{
   setFormdata(
    {
      ...formData,
      [e.target.id]: e.target.value, 
    }
   );
  };
  console.log(formData);



  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
    setLoading(true);
    const res = await fetch('/api/auth/signin', 
    {
method:'POST',
headers:{
  'Content-Type':'application/json',
},
body: JSON.stringify(formData),
    }
    );
    const data = await res.json();
    if(data.success === false){
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/');
  } catch (error){
setLoading(false);
setError(error.message);
  }
    // console.log(data);
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' className='border p-3 rounded-lg' id="email" placeholder='email' onChange={handleChange}/>
        <input type='password' className='border p-3 rounded-lg' id="password" placeholder='password' onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading? 'Loading...':'Login'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an account?</p>
        <Link to={"/sign-up"} >
         <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error} </p>}
    </div>
  );
}
