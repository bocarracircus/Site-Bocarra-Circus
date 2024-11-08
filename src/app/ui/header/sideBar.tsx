'use client'
import { useEffect, useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../../public/bocarra_visual/Est1B.svg'
import Links from "./links";
import { usePathname } from "next/navigation";



const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrollEnabled, setIsScrollEnabled] = useState(true);
  const location = usePathname();

  const item = {
    hidden: { x: "100vw", transition: { duration: 0.3, ease: "linear" } },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeOut" } },

  }

  useEffect(() => {
    const preventDefault = (e: Event) => {
      if (!isScrollEnabled) {
        e.preventDefault();
      }
    };

    document.addEventListener("wheel", preventDefault, { passive: false });
    document.addEventListener("touchmove", preventDefault, { passive: false });
    return () => {
      document.removeEventListener("wheel", preventDefault);
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [isScrollEnabled]);

  useEffect(() => {
    setIsScrollEnabled(!isDrawerOpen);
  }, [isDrawerOpen]);


  const toggleMenu = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }


  return (
    <aside className="relative flex lg:hidden">
      <div className="z-50">
        <Hamburger toggled={isDrawerOpen} toggle={toggleMenu} color="white" />
      </div>
      <AnimatePresence>
        <motion.div
          className={`fixed inset-y-0 right-0 z-30 bg-blue-contraste w-64 p-4 h-[100svh]`}
          variants={item}
          initial="hidden"
          animate={isDrawerOpen ? "visible" : "hidden"}
        >
          <div className="flex flex-col h-full">
            <div className="p-6">

            </div>
            <div className="p-0 flex flex-col h-fit  gap-4 mt-4">
              <Links onClick={toggleMenu} to="/" label="Home" local={location} />
              <Links onClick={toggleMenu} to="servicos" label="Serviços" local={location} />
              <Links onClick={toggleMenu} to="contato" label="Contato" local={location} />
            </div>
            <div className="mt-auto flex justify-center">
              <Link href="/" onClick={toggleMenu} className="flex w-full justify-end">
                <Image src={Logo} alt="Logo Bocarra Circus" className="w-28" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {
        isDrawerOpen && (
          <div className="fixed inset-0 z-20 bg-black opacity-50"></div>
        )
      }
    </aside >
  );
};

export default SideBar;
