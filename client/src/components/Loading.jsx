


import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom'

const Loading = () => {

    const {navigate} = useAppContext()
    let {search} = useLocation()
    const query = new URLSearchParams(search)
    const nextUrl = query.get('next');

    useEffect (() => {
        if(nextUrl){
            setTimeout(() => {
                navigate(`/${nextUrl}`)
            },5000)
        }
    },[nextUrl])


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className=' animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'></div>
        <h3>Welcome to GreenCart.</h3>
    </div>
  )
}

export default Loading




/*
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Remove this if you are not using it
import { useAppContext } from '../context/AppContext';

const Loading = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  
  // If you don't actually use this, you can remove it
  useAppContext(); 

  const query = new URLSearchParams(search);
  const nextUrl = query.get('next');

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        // Prevent double slashes if nextUrl already starts with '/'
        navigate(nextUrl.startsWith('/') ? nextUrl : `/${nextUrl}`);
      }, 5000);
    }
  }, [nextUrl, navigate]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className=' animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-primary'></div>
    </div>
  );
};

export default Loading;

*/