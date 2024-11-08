import ReactCompareImage from 'react-compare-image'
import { TbHandFinger } from 'react-icons/tb'
import { motion } from 'framer-motion'

const CompareImage = () => {
  const item = {
    hidden: { x: '200%', opacity: 1 },
    visible: { x: ['150%', 0], opacity: 1, transition: { duration: 0.35 } },
  };
  return (
    <motion.section
      className='flex flex-col items-center'
      variants={item}
    >
      <h3 className=' text-blue-default mb-3 self-start md:self-center lg:self-start'>Projeto 3D vs. Realidade</h3>
      <div className="w-full md:w-[590px] flex items-end ">
        <ReactCompareImage
          leftImage='/bocarra_visual/lona3D.webp'
          rightImage='/bocarra_visual/lonaReal.webp'
        />
      </div>
      <div className="swipe-instruction flex flex-col items-center mt-">
        <TbHandFinger className="hand-icon text-blue-default" />
      </div>
    </motion.section>
  )
}

export default CompareImage