'use client'
import React from 'react'
import { useEffect, useRef } from 'react';
import { Carousel } from '@fancyapps/ui';
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";
import Image from 'next/image';


const SwiperHome = () => {
  const carouselRef = useRef(null);
  const imagens = ['/imagens_carrossel/1.webp', '/imagens_carrossel/2.webp', '/imagens_carrossel/3.webp', '/imagens_carrossel/4.webp']

  useEffect(() => {
    const carousel = new Carousel(carouselRef.current, {
      Autoplay: {
        timeout: 5000,
        pauseOnHover: false
      },
      Navigation : false
    }, {
      Autoplay
      

    });

    return () => {
      carousel.destroy();
    };
  }, []);

  return (
    <section className=' w-full h-[100svh] overflow-hidden'>
      <div ref={carouselRef} className='f-carousel '>
        {imagens.map((imagem, index) => (
          <div key={index} className='relative f-carousel__slide'>
            <Image
              src={imagem}
              className='w-screen h-[100svh] object-cover'
              alt={`Imagem ${index + 1}`}
              width={1920}
              height={1080}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default SwiperHome