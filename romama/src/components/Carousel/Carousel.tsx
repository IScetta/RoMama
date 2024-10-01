"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel(){
    return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          autoplay={true}
          loop={true}
          className='w-full h-[200px] rounded-xl'
        >
          <SwiperSlide className=' h-[200px] '><Image src={"/img-product/product-1/product-1-img-1.jpeg"} alt='' width={400} height={400}/></SwiperSlide>
          <SwiperSlide className=' h-[200px] '><Image src={"/img-product/product-1/product-1-img-1.jpeg"} alt='' width={400} height={400}/></SwiperSlide>
          <SwiperSlide className=' h-[200px] '><Image src={"/img-product/product-1/product-1-img-1.jpeg"} alt='' width={400} height={400}/></SwiperSlide>
          <SwiperSlide className=' h-[200px] '><Image src={"/img-product/product-1/product-1-img-1.jpeg"} alt='' width={400} height={400}/></SwiperSlide>
          <SwiperSlide className=' h-[200px] '><Image src={"/img-product/product-1/product-1-img-1.jpeg"} alt='' width={400} height={400}/></SwiperSlide>



        </Swiper>
      )
}