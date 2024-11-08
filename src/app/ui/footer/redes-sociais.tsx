import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const RedesSociais = () => {
  return (
    <section className='flex flex-col gap-4 mt-8 lg:mt-0'>
      <h3 className='titlesFont'>Nossas redes sociais:</h3>
      <div className='flex text-slate-100 ' >
        <ul className='flex items-center gap-6'>
          <li className='p-1 hover:bg-pink-500'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bocarracircus/">
              <FaInstagram className='text-3xl' />
            </a>
          </li>
          <li className='p-1 hover:bg-green-600'>
            <a href="https://api.whatsapp.com/send?phone=5519989884254&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer"><FaWhatsapp className='text-3xl' />
            </a>
          </li>
          <li className='p-1 hover:bg-red-700'>
            <a href="#">
              <SiGmail className='text-3xl' />
            </a>
          </li>
        </ul>
      </div>
    </section>

  )
}

export default RedesSociais