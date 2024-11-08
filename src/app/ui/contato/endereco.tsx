'use client'
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const Endereco = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.35,
      },
    },
  };

  const itemX = {
    hidden: { x: '-200%', opacity: 0 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.39 } },
  };
  const itemX_Mapa = {
    hidden: { x: '-200%', opacity: 0 },
    visible: { x: ['-100%', 0], opacity: 1, transition: { duration: 0.39, delay: 0.7 } },
  };

  const itemY = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0 , opacity: 1, transition: { duration: 0.39, delay: 0.8 } },
  };

  const linkMaps = "https://www.google.com/maps/place/Av.+Jos%C3%A9+Carlos+do+Amaral+Galv%C3%A3o,+582+-+Jardim+Itatinga,+Campinas+-+SP,+13051-160/@-22.963595,-47.097212,18z/data=!4m6!3m5!1s0x94c8c9758ac085ab:0x80810d6a5b39cb27!8m2!3d-22.9635946!4d-47.0972116!16s%2Fg%2F11qt2m4hk8?hl=pt-BR&entry=ttu"

  const mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.4100297795808!2d-47.09731084202674!3d-22.963477290187747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9758ac085ab%3A0x80810d6a5b39cb27!2sAv.%20Jos%C3%A9%20Carlos%20do%20Amaral%20Galv%C3%A3o%2C%20582%20-%20Jardim%20Itatinga%2C%20Campinas%20-%20SP%2C%2013051-160!5e0!3m2!1spt-BR!2sbr!4v1704825380292!5m2!1spt-BR!2sbr"

  const apiWhatsapp = "https://api.whatsapp.com/send?phone=5519989884254&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."

  return (
    <motion.section
      className="w-maxW max-w-hd grande:max-w-grande py-16 text-[white]"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45}}
    >
      <motion.h2 className="text-red-default mb-12" variants={itemX}>Nossa localização</motion.h2>

      <aside className='flex flex-col lg:flex-row'>
        <motion.iframe className='lg:w-[65%] aspect-video max-h-[450px]' src={mapa} loading="lazy" variants={itemX_Mapa}></motion.iframe>

        <motion.div className='flex flex-col h-[400px] lg:h-auto lg:w-[35%] bg-red-default p-5' variants={itemY}>
          <FaLocationDot className="fill-blue-default w-6 h-6 self-center mb-4" />
          <a href={linkMaps} rel="noopener" target="_blank" className="flex gap-2 ">
            Av. José Carlos do Amaral Galvão, 582 - Jardim São José, Campinas - SP,
            &nbsp; 13051-160
          </a>

          <hr className="w-16 my-6" />
          <p className="text-white-fundo flex items-center gap-2 mb-2">
            <SiGmail /> contato@bocarracircus.com
          </p>
          <a href={apiWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <FaWhatsapp />(19) 98988-4254
          </a>
          <h4 className="mt-auto mb-2">Horários de Atendimento</h4>

          <p className="text-white-fundo">Seg. à Sex. das 8h às 17h</p>
        </motion.div>

      </aside>
    </motion.section>
  )
}

export default Endereco