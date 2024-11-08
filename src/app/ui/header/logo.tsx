import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/' className='flex'>
      <motion.div className='flex'>
        <Image className='w-auto h-14 md:h-16' src='/bocarra_visual/rino.svg' alt="Logo Bocarra Circus" width={50} height={64}/>
        <div className='flex overflow-hidden'>
          <motion.div
           initial={{ x: '-200%' }}
           animate={{ x: ['-200%', 0] }}
           transition={{ duration: 1.1 }}
           viewport={{ once: true }}
          >

          </motion.div>
          <Image
            className='w-44 md:w-48 ml-2'
            src='/bocarra_visual/escritaBranca.svg'
            alt="Bocarra Circus Escrita"
            width={198}
            height={80}
          />
        </div>
      </motion.div>
    </Link>

  );
};

export default Logo;
