'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Separador from '../components/separador';
import Image from 'next/image';
import Formulario from './formulario';
import Endereco from './endereco';

const PageContato = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
      },
    },
  };

  const itemY = {
    hidden: { y: '200%', opacity: 0 },
    visible: { y: ['100%', 0], opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <section className='flex flex-col pb-32 items-center'>
    <motion.div
      className='w-full pt-32 bg-blue-default flex flex-col items-center min-h-screen'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-maxW max-w-hd grande:max-w-grande">
        <Separador />
        <motion.h2 className='text-[white] mb-8 md:mb-16 lg:mb-8 ' variants={itemY}>Fale conosco</motion.h2>
        <motion.p className='max-w-[1000px] text-white-contraste text-xl sm:text-2xl' variants={itemY}>
          Estamos aqui para ajudar! Quer saber mais sobre nossos produtos e serviços? Preencha o formulário abaixo ou mande uma mensagem via Whatsapp. Nossa equipe responderá o mais rápido possível.
        </motion.p>

      </div>
    </motion.div>

    <motion.div
      className='py-16 w-full flex justify-center items-center relative'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='w-maxW  max-w-hd grande:max-w-grande h-[600px] lg:h-[600px] bg-white-contraste' >
        <Image className='w-full h-[600px] hidden lg:block' src='/servicos_banner/banner-contatos-desktop.webp' alt="Banner images" width={1900} height={1000} />
        <Image className='w-full h-[600px]  md:hidden' src='/servicos_banner/banner-contatos-mobile.webp' alt="Banner images" width={1023} height={676} />
        <Image className='w-full h-[600px] hidden md:block lg:hidden' src='/servicos_banner/banner-contatos-tablet.webp' alt="Banner images" width={921} height={1689} />
      </div>
    </motion.div>

    <Formulario />
    <Endereco />
  </section>
  )
}

export default PageContato