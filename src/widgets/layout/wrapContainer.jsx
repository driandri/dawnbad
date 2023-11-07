import React from 'react';
import { useNavigate } from "react-router-dom";

function WrapContainer({...props}) {
   let navigateTo = useNavigate();


   return (
      <div className="p-8 bg-black h-screen w-screen flex flex-col items-center justify-between gap-3">
         <div className='w-full flex text-4xl xs:justify-center cursor-pointer xs:text-base hover:text-red-500' onClick={() => navigateTo('/')}>Home</div>
         <div className='flex justify-center w-full items-center flex-col gap-2'>{props.children}</div>
         <div>
            <p>Dawn Bad Club, c.2023</p>
         </div>
      </div>
   )
}

export default WrapContainer;
