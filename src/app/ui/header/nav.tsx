import Link from 'next/link';
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
  };

  const item = {
    hidden: { x: -60, opacity: 0, scale: 0 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'linear',
        duration: 0.16
      }
    }
  };

  return (
    <motion.nav
      className='titlesFont text-xl font-medium hidden lg:flex'
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <ul className='flex gap-4 items-center font-semibold rounded-lg pl-4 text-[white] overflow-hidden'>
        <li>
          <motion.div variants={item}>
            <Link href='/' className='nav-item text-xl'>
              Home
            </Link>
          </motion.div>
        </li>

        <li>
          <motion.div variants={item}>
            <Link href='/servicos' className='nav-item text-xl'>
              Serviços
            </Link>
          </motion.div>
        </li>

        <li>
          <motion.div variants={item}>
            <Link href='/contato' className='nav-item text-xl'>
              Contato
            </Link>
          </motion.div>
        </li>
      </ul>
    </motion.nav>
  );
}

export default Nav;
