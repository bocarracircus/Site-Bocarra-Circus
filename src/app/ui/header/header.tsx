'use client'

import { motion } from 'framer-motion';
import Nav from './nav';
import Logo from './logo';
import SideBar from './sideBar';

const Header = () => {

  const variants = {
    hidden: { opacity: 0, y: '-100%', transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className='relative w-screen'>
      <div className={`w-full z-20 bg-transparent absolute bg-blue-300 top-0`}>
        <motion.header
          className={`flex w-full justify-center `}
          initial="visible"
          animate="visible"
          variants={variants}
        >
          <div className='flex w-maxW max-w-hd grande:max-w-grande py-2 justify-between items-center relative'>
            <Logo />
            <Nav/> 
            <SideBar/>
          </div>
        </motion.header>
      </div>
    </div>

  );
};

export default Header;
