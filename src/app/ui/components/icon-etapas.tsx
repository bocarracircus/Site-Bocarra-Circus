import { motion } from "framer-motion";
import { FC } from "react";

interface CardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // O ícone é um componente React
  title: string; // Título do card
  text: string;  // Texto descritivo do card
}

const IconEtapas: FC<CardProps> = ({ icon: Icon, title, text }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      className='flex flex-col  gap-2 w-[150px] md:w-[190px] lg:w-[150px] items-center'
      key={title}
    >
      <Icon className='w-12 h-12 text-blue-default' />
      <h4 className=' text-red-default'>{title}</h4>
      <p className=' text-gray-text text-sm text-center'>
        {text}
      </p>
    </motion.div>
  );
};

export default IconEtapas;
