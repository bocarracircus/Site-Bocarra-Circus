import Link from 'next/link';
import Separador from '../components/separador';
import { motion } from 'framer-motion'

interface CardProps {
  img: string;
  titulo: string;
  descricao: string;
  to: string;
  variant: boolean;
}

const CardServicos = ({ img, titulo, descricao, to, variant } : CardProps) => {
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
    hidden: { x: '-200%', opacity: 0 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.39 } },
  };
  const item2 = {
    hidden: { x: '200%', opacity: 0 },
    visible: { x: ['100%', 0], opacity: 1, transition: { duration: 0.39 } },
  };

  const styles = {
    blue: {
      container: 'bg-blue-default',
      title: 'text-[white]',
      text: 'text-white-contraste',
      direction: 'lg:flex-row-reverse',
      motion_img: item2,
      motion_text: item
    },
    default: {
      container: '',
      title: 'text-black-text',
      text: 'text-gray-text',
      direction: 'lg:flex-row',
      motion_img: item,
      motion_text: item2
    },
  }
  const style = variant ? styles.blue : styles.default

  return (
    <motion.main
      className={`flex w-full justify-center ${style.container}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.48 }}
    >
      <section className={`flex flex-col w-maxW max-w-hd grande:max-w-grande justify-between py-16`}>
        {variant && (<Separador />)}
        <div className={`flex flex-col w-full lg:justify-between ${style.direction} gap-4 overflow-hidden`}>
          <motion.img
            src={img}
            alt={titulo}
            className='w-full lg:max-w-[700px] max-h-[400px] bg-gray-700 object-cover'
            variants={style.motion_img}
          />

          <motion.div className='flex flex-col mt-8 gap-8 lg:mt-0' variants={style.motion_text}>
            <h3 className={style.title}>{titulo}</h3>
            <p className={`indent-4 w-[95%] lg:max-w-[440px] ${style.text}`}>
              {descricao}
            </p>
            <Link
              className='uppercase px-5 py-2 rounded-lg bg-red-default hover:bg-red-hover text-[white] font-medium w-fit mt-4 '
              href={to}
            >
              veja mais
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}

export default CardServicos
