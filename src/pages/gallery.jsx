import WrapContainer from '@/widgets/layout/wrapContainer'
import React, { useRef, useState } from 'react';

const image = [
  { img: "/img/galerry_1.jpg" }, 
  { img: "/img/galerry_2.jpg" }, 
  { img: "/img/galerry_3.jpg" }, 
  { img: "/img/galerry_4.jpg" }, 
  { img: "/img/galerry_5.jpg" },
  { img: "/img/galerry_6.jpg" },
  { img: "/img/galerry_7.jpg" },
  { img: "/img/galerry_8.jpg" },
  { img: "/img/galerry_9.jpg" },
  { img: "/img/galerry_10.jpg" }
];

export default function Gallery() {
  const imgRef = useRef();
  const [imgData, setImgData] = useState(0);

  const previous = () => {
    if (imgData != 0) {
      imgRef.current.style.opacity = 0;
      setTimeout(() => {
        setImgData(imgData - 1);
        imgRef.current.style.opacity = 1;
      }, 1000);
    }
  };

  const next = () => {
    if (image.length - 1 != imgData) {
      imgRef.current.style.opacity = 0;
      setTimeout(() => {
        setImgData(imgData + 1);
        imgRef.current.style.opacity = 1;
      }, 1000);
    }
  };


  return (
    <WrapContainer>
      <div className='w-full flex justify-center relative'>
        <img height={"40%"} className='absolute lg:w-[40%] top-[-70px] md:w-[65%] xs:top-[-55px] xs:h-[90%] xs:w-[85%]' src="/img/smoke.svg" alt="" />
        <div className='relative flex justify-center max-w-xl p-3'>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className='flex justify-center max-w-sm xs:w-[75%]'>
              <img ref={imgRef} className='rounded-[8%] z-40' style={{ transition: "opacity 1s linear" }} height={"80%"} width={"80%"} src={image[imgData].img} alt="" />
            </div>
            <div className='grid gap-2 max-w-sm text-center xs:w-[75%]'>
              <p className='text-xl xs:text-md'>gr3gor14n</p>
              <p className='text-md xs:text-xs'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className='arrow-container lg:w-[70vh] md:w-[50vh] xs:top-[25%] xs:w-[42vh]'>
            <div onClick={previous} className='cursor-pointer'>
              <img height={50} width={50} src="/img/arrow_left.png" alt="" />
            </div>
            <div onClick={next} className='cursor-pointer'>
              <img height={50} width={50} src="/img/arrow_right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </WrapContainer>
  )
}
