'use client'
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Transition = ({ children }: { children: React.ReactNode }) => {
  const location = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const variants = {
    initial: { opacity: 0, y: '-100vh' },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className='overflow-x-hidden scrol'
        key={location}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
