'use client'

import { motion } from 'framer-motion'
import Titulo from '../components/titulo';
import Image from 'next/image';

const Origem = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.3,
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
      className=' flex flex-col w-maxW max-w-hd grande:max-w-grande items-center py-16 overflow-hidden'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Titulo titulo={'Origem Circense'} subtitulo={'Desde 1960'} variant={'red'} />

      <div
        className=' flex flex-col lg:flex-row w-full justify-between gap-8 overflow-hidden'
      >
        <div className='flex flex-col gap-4 overflow-hidden'>
          <motion.div variants={item}>
            <Image
              src='/bocarra_visual/CircoChrysostenes.webp'
              alt='Imagem Circo Chrysostenes'
              className='w-full max-w-[700px] max-h-[400px]'
              width={700}
              height={400}
            />
          </motion.div>

          <motion.p
            className='italic text-base text-red-default text-end justify-self-end'
            variants={item} >
            Circo Chrysostenes 1984
          </motion.p>
        </div>

        <motion.div className='flex' variants={item2}>
          <div className='flex flex-col mt-0 gap-4 lg:mt-0 '>
            <h3 className='text-black-text'>Tradição e Inovação</h3>
            <p className='w-full text-gray-text lg:mb-0 lg:max-w-[460px] indent-4'>
              Com raízes profundas na tradição circense, a Bocarra Circus carrega consigo uma história que atravessa gerações. Originária de uma linhagem respeitável, nossa jornada começou há décadas, moldando nossa identidade com tradição, paixão e autenticidade. Ao longo dos anos, enfrentamos desafios e celebramos conquistas, fortalecendo nosso compromisso com a excelência e a inovação. Guiados pela nossa herança circense, continuamos aprimorando nossas habilidades, sempre em busca de novas formas de encantar e inspirar nosso público.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default Origem