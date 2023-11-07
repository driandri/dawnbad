import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from './loading';
 
 export default function layout() {
   const [isLoading, setIsloading] = useState(false);
   return (
     <div className='h-screen w-screen'>
       {isLoading && <Loading />}
       <Outlet />
     </div>
   )
 }
 