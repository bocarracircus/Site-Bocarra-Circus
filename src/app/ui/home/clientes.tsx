'use client'


import { motion } from 'framer-motion'
import Titulo from '../components/titulo'
import { geraLinks } from '@/app/lib/utils'




const logos = geraLinks('/logos_clientes/', 8)

const Clientes = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <motion.section 
    className='flex flex-col items-center w-maxW max-w-hd grande:max-w-grande mb-32 mt-16 '
    variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true, amount: 0.24 }}
    >
      <Titulo titulo={'Nossos Parceiros'} subtitulo={'Faça parte desta fámilia circense'} variant={'red'} />

      <main className='flex w-full flex-col gap-6 md:gap-16 p-4 md:p-12  rounded-lg'>
        <motion.div 
          className='flex gap-6 justify-between flex-wrap md:flex-nowrap'
        >
          {logos.slice(0, 4).map((logo) =>(
            <motion.img src={logo} loading="lazy" alt={logo} className='w-32 lg:w-44' key={logo} variants={item}/>
          ))}
        </motion.div>
        <motion.div 
          className='flex gap-6 justify-between flex-wrap md:flex-nowrap'
        >
          {logos.slice(4, 8).map((logo) =>(
            <motion.img src={logo} loading="lazy" alt={logo} className='w-32 lg:w-44' key={logo} variants={item}/>
          ))}
        </motion.div>
      </main>
      
    </motion.section>
  )
}

export default Clientes