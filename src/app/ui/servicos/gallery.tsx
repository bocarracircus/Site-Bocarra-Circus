'use client'
import { SectionProps } from '@/app/lib/types'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Galerry = ({ section } : {section : SectionProps}) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }
  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.19 },
     
    }
  }

  return (
    <motion.div
      className='flex flex-wrap gap-2 md:gap-3 '
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {section.imagens.map((src, index) => (
        <motion.a
          href={src}
          data-fancybox="gallery"
          data-caption={`Imagem ${index + 1}`}
          key={index}
          variants={item}
          className="flex w-[calc((100%/2)-8px)] md:w-[calc((100%/3)-12px)] lg:w-[calc((100%/4)-12px)] overflow-hidden"
        >

          <Image
            className='h-[130px] md:h-[200px] w-full cursor-pointer object-cover lg:hover:scale-105 lg:hover:brightness-50  transition duration-300'
            src={src}
            alt={`Imagem ${index + 1}`}
            width={200}
            height={130}
          />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Galerry 