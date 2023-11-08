import WrapContainer from '@/widgets/layout/wrapContainer'
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isLoading, setIsLoading] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const previous = () => {
    if (imgData > 0 && !isLoading) {
      imgRef.current.style.opacity = 0;
      setDirection(-1);
      setIsLoading(true)
      setTimeout(() => {
        setImgData(imgData - 1);
        imgRef.current.style.opacity = 1;
        setIsLoading(false);
      }, 2500); // Ganti angka sesuai durasi animasi
    }
  };

  const next = () => {
    if (imgData < image.length - 1 && !isLoading) {
      imgRef.current.style.opacity = 0;
      setDirection(1);
      setIsLoading(true)
      setTimeout(() => {
        setImgData(imgData + 1);
        imgRef.current.style.opacity = 1;
        setIsLoading(false);
      }, 2500); // Ganti angka sesuai durasi animasi
    }
  };


  return (
    <WrapContainer>
      <div className='w-full flex justify-center relative'>
        <img height={"40%"} className='absolute lg:w-[36%] top-[-65px] md:w-[65%] xs:top-[-55px] xs:h-[90%] xs:w-[85%]' src="/img/smoke.svg" alt="" />
        <div className='relative flex justify-center max-w-xl p-3'>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className='flex justify-center lg:h-72 md: max-w-sm xs:w-[75%]'>
              {/* <AnimatePresence exitBeforeEnter={false} initial={true}>
                <motion.img
                  key={imgData}
                  className='rounded-[8%] z-40'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{  
                    duration: 0.5,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                   }}
                  height={"80%"}
                  width={"80%"}
                  src={image[imgData].img}
                  alt="gallery"
                />
              </AnimatePresence> */}
              <img ref={imgRef} className='rounded-[8%] z-40' style={{ 
                transition: "opacity 2s linear",
                WebkitTransition: "opacity 2s linear"
                }} height={"80%"} width={"80%"} src={image[imgData].img} alt="" />
            </div>
            <div className='grid gap-2 max-w-sm text-center xs:w-[75%]'>
              <p className='text-md xs:text-xs'>
                Dawn Bad Club isn't just a project; it's a lifestyle, a movement, a way of life. We're trying to combine Hip-hop/Rap music, Basquiat art, and streetwear culture into Web3. Yes, we do love to make money together and thrive as a community in the Dawn Bad Club.
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
