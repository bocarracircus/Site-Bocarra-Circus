import  Link  from 'next/link';
import { motion } from 'framer-motion';

const Nav = () => {

  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { x: -60, opacity: 0, scale: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'linear',
        duration: 0.16,
      }
    }
  }

  const icon = {
    hidden: { x: -60, opacity: 0, scale: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'linear',
        duration: 0.16,
        delay: 0.6,
      }
    }
  }

  const bg = {
    hidden: {
      width: 0
    },
    visible: {
      width: 'auto',
      transition: {
        delay: 0.8, // Ajuste a duração do atraso conforme necessário
        duration: 0.2,
      }
    }
  }

  return (
    <motion.nav
      className='titlesFont text-xl font-medium hidden lg:flex'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <ul className='flex gap-7 items-center font-semibold rounded-lg pl-4 text-[white] overflow-hidden'>
        <li className='hover:text-red-default overflow-hidden'>
          <motion.div variants={item}>
            <Link href='/'>Home</Link>
          </motion.div>
        </li>

        <li className='hover:text-red-default overflow-hidden'>
          <motion.div variants={item}>
            <Link href={'/servicos'}>Serviços</Link>
          </motion.div>
        </li>

        <li className='relative'>
          <motion.div
            variants={bg}
            className='absolute inset-0 bg-red-default rounded-lg'
          />
          <motion.div
            variants={icon} 
            className='relative z-10 px-5 py-2 text-[white] uppercase overflow-hidden'
          >
            <Link href={'/contato'}>Contato</Link>
          </motion.div>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
