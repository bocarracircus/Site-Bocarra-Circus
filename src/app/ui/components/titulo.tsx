import classNames from 'classnames';
import { motion } from 'framer-motion';

interface TituloProps{
  titulo : string,
  subtitulo : string,
  variant : 'red' | 'blue'
}

const Titulo = ({ titulo, subtitulo, variant } : TituloProps) => {
  const variants = {
    red: {
      title: 'text-[#d03438]',
      sub: 'text-[#696969]',
    },
    blue: {
      title: 'text-[#ffffff]',
      sub: 'text-[#d03438]',
    },
  };
  const item = {
    hidden: { x: '-200%', opacity: 1 },
    visible: { x: ['-100%', 0], opacity: 1, transition : { duration : 0.8 }}
  };
  const titleClass = variants[variant].title;
  const subClass = variants[variant].sub;

  return (
    <div
      className='flex flex-col w-full mb-12 overflow-hidden'
    >
      <motion.h2
        className={classNames('text-base font-bold uppercase', subClass)}
        variants={item}
      >
        {subtitulo}
      </motion.h2>

      <motion.h1
        className={classNames(titleClass)}
        variants={item}
      >
        {titulo}
      </motion.h1>
    </div>
  );
};

export default Titulo;
