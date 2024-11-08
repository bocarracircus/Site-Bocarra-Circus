'use client'

import { motion } from 'framer-motion';
import Titulo from '../components/titulo';
import Separador from '../components/separador';
import CardServicos from '../components/card-servicos';
import { cardData } from '@/app/lib/data';

const Servicos = () => {
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
    <motion.div
      className="flex flex-col w-maxW max-w-hd grande:max-w-grande justify-center items-center py-16 min-h-100px"
      variants={container}
      initial="hidden"
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      <Separador />
      <Titulo titulo={'Nossos Serviços'} subtitulo={'Mais de 30 anos de experiência'} variant={'blue'} />
      <div
        className="flex w-full flex-wrap overflow-hidden justify-center min-h-[100px]"
      >
        {cardData.map((card, index) => (
          <motion.div key={index} variants={item} className={`overflow-hidden sm:max-h-[650px] lg:h-fit ${card.width}  lg:w-[20%] `}>
            <CardServicos
              img={card.img}
              title={card.title}
              description={card.description}
              to={card.to}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Servicos
