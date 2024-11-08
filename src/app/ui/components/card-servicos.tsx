import Link  from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface CardProps {
  img : string,
  title : string, 
  description : string, 
  to : string
}

const CardServicos = ({ img, title, description, to } : CardProps) => {
  const container = {
    hidden: {opacity: 1},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 2 } },
  };
  return (
    <Link href={to} className={`flex flex-col w-full h-full justify-center cursor-pointer  group `} >
      <motion.div
        className='flex flex-col w-full h-full'
        variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={clsx('w-full overflow-hidden lg:max-h-none', (to === '/servicos/circo')? 'aspect-[9:16] max-h-[350px]' : 'aspect-[4/3] max-h-[250px]')}
          variants={item}
     
        >
          <Image
            className={clsx('w-full h-full transform transition duration-300 group-hover:scale-110 aspect-[4/3] ',(to === '/servicos/circo') ? 'aspect-[9:16] max-h-[350px]' : 'aspect-[4/3] max-h-[250px]' ) }
            src={img}
            alt={`Imagem ${title}`}
            width={1280}
            height={720}
          />
        </motion.div>

        <motion.div className={clsx('flex flex-col  lg:h-[280px] mb-8', (to === '/servicos/circo') ? 'h-[180px]' : 'h-[230px]')} variants={item}>
          <h4 className='text-[white] mt-6 mb-2'>{title}</h4>
          <p className='pr-2 lg:pr-11 text-white-contraste text'>{description}</p>
          <Image className='w-11 justify-self-end mt-auto transition-transform duration-300 ease-in-out transform group-hover:translate-x-5' src='/icons/arrowRed.svg' alt='Arrow' width={44} height={28}/>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default CardServicos