'use client'
import React from 'react'
import Titulo from '../components/titulo'
import Image from 'next/image'
import LogoVertical from '../icons/logoVertical'
import { motion } from 'framer-motion';

const Banner = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },

  };
  return (
    <motion.main
      className='flex w-full h-[100svh] overflow-hidden bg-blue-default items-center justify-center'
      variants={container}
      initial="hidden"
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image className='absolute top-0 left-0 w-screen h-screen opacity-5' src='/bocarra_visual/circoDosSonhosCapa.jpg' alt='Imagem circo dos sonhos' width={1920} height={1080} />
      <div className='flex w-maxW h-full max-w-hd grande:max-w-grande justify-between items-center z-20'>
        <div className='w-[580px]'>
          <Titulo titulo={'Inovação em Estruturas de Alta Performance'} subtitulo={'NOS SOMOS A BOCARRA CIRCUS'} variant={'blue'} />
          <motion.p variants={item} className='text-gray-400'>Especialistas na fabricação de lonas e coberturas têxteis personalizadas, utilizando materiais de alta performance para atender às suas necessidades.</motion.p>
        </div>
        <motion.div className='flex' variants={item}>
          <LogoVertical className='w-[250px] h-[450px] opacity-5  hidden hd:block' />
        </motion.div>

      </div>

    </motion.main>
  )
}

export default Banner