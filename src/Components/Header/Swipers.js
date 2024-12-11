import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import React, { useEffect, useState} from 'react'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay, Pagination,  } from 'swiper/modules';

export default function Swipers() {
  const [Swipers , setSwipers] = useState(null)
  const SwipersAPI = async () => {
      const {data} = await axios.get('http://localhost:8000/Swiper')
      setSwipers(data)
  }

  useEffect(() => {
    SwipersAPI()
  }, [])
  return (

      <div>
        <Swiper className='h-auto'
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
        >
          {Swipers?.map((item) => (
            <SwiperSlide>
              <img className='' src={item.img} alt="" />

            </SwiperSlide>
          ))} 

        </Swiper>
      </div>
  )
}
