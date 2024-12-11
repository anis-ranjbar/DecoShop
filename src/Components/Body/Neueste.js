import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

export default function Neueste() {
  const [Neueste , setNeueste] = useState(null)
  const NeuesteAPI = async () => {
      const {data} = await axios.get('http://localhost:8000/Neueste')
      setNeueste(data)
  }

  useEffect(() => {
    NeuesteAPI()
  }, [])

  return (
    <div className='  '>
      <div className='flex items-center justify-around m-auto w-5/6 '>
        <h2 className=' text-3xl text-[#54786a] flex  pt-12'>Neueste Produkte</h2>
        <hr className=" h-px w-3/4 !mt-24 mx-auto my-4 bg-[#54786a] border-0 rounded md:my-10 dark:bg-[#54786a]"></hr>
      </div>
     
        <Swiper className=" h-[500px]  w-5/6 text-slate-200 "
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {Neueste?.map((item) => (
            <SwiperSlide className='!flex flex-col justify-center '>
              <img className='rounded-lg' src={item.image} alt=""/>
              <p className=' text-xl text-[#54786a] flex items-center justify-center leading-5 h-[40px]'>{item.Name}</p>
              <p className=' text-[#54786a] flex justify-center'>{item.Price}</p>
            </SwiperSlide>

          ))} 

        </Swiper>
    </div>
  )}