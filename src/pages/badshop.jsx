import WrapContainer from '@/widgets/layout/wrapContainer'
import { Typography } from '@material-tailwind/react'
import React from 'react'

function BadShop({}) {
   const list = [
      {
         url: '/img/badshop_1.gif',
         desc: 'badshop 1'
      },
      {
         url: '/img/badshop_2.gif',
         desc: 'badshop 2'
      },
      {
         url: '/img/badshop_3.gif',
         desc: 'badshop 3'
      }
   ]


   return (
      <WrapContainer>
         <div className='bs-image-wrapper max-w-[60%] gap-8'>
            {list.map((data, i) => {
               return <div key={i} className='flex justify-center'>
                  <img className='bs-img' key={i} src={data.url} alt={data.desc} />
               </div>
            })}
         </div>
         <Typography className="text-3xl xs:text-sm italic">
            Soooooooooooooooooooooooooooooon
         </Typography>
      </WrapContainer>
   )
}

export default BadShop;
