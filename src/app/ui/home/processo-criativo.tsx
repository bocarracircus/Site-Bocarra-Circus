'use client'

import { motion } from 'framer-motion'
import  Link  from 'next/link'
import Separador from '../components/separador';
import Titulo from '../components/titulo';

const ProcessoCriativo = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.35,
      },
    },
  };
  const item = {
    hidden: { x: '-200%', opacity: 1 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.3 } },
  };
  const item2 = {
    hidden: { x: '200%', opacity: 1 },
    visible: { x: ['100%', 0], opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className=' flex flex-col w-maxW max-w-hd grande:max-w-grande items-center  py-16 '
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Separador />
      <Titulo titulo={'Processo Criativo'} subtitulo={'Processo único e personalizado'} variant={'blue'} />
      <div className=' flex flex-col lg:flex-row w-full rounded-lg justify-between gap-8 overflow-hidden'>
        <div className='flex flex-col gap-4 overflow-hidden'>
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            variants={item}
            className='w-full lg:w-[700px] max-h-[400px] object-cover'
          >
            <source src='/videos/video_3d.mp4' type='video/mp4' />
            Seu navegador não suporta o elemento de vídeo.
          </motion.video>
          <motion.p
            variants={item}
            className='text-red-default text-base italic justify-self-end text-end'
          >
            Lona quatro bicos
          </motion.p>
        </div>
        <motion.div className='flex flex-col  gap-4 lg:mt-0' variants={item2}>
          <h3 className='text-[white]' >De Ideias a Obras-Primas</h3>
          <p className='w-full text-white-contraste  mb-6 lg:mb-0 lg:max-w-[460px] indent-4'>
            Na Bocarra Circus, cada lona é uma obra única, fruto de um processo criativo que valoriza a exclusividade e a personalização. Nosso programa 3D permite a visualização detalhada do projeto antes mesmo de ele ganhar vida, garantindo que cada lona atenda exatamente às expectativas de nossos clientes. Através dessa tecnologia, combinamos nossa vasta experiência com inovação, transformando ideias em realidade com precisão milimétrica.
          </p>
          <Link
              className='uppercase px-5 py-2 rounded-lg bg-red-default hover:bg-red-hover text-[white] font-medium w-fit mt-4 '
              href='/contato'
            >
              Entre em contato
              
            </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ProcessoCriativo