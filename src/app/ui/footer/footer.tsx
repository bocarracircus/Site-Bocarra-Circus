import RedesSociais from './redes-sociais'
import Cards from './cards'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import Image from 'next/image';

const Footer = () => {
  const apiWhatsapp = "https://api.whatsapp.com/send?phone=5519989884254&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
  return (
    <footer className='flex flex-col w-full justify-center items-center bg-red-default text-[white]'>
      <section className='flex justify-between p-5 md:p-8 w-maxW max-w-hd grande:max-w-grande bg-blue-default rounded-lg relative top-[-64px] mb-[-64px]'>
        <div className='flex flex-col w-full' >
          <div className='flex flex-wrap w-full justify-between'>
            <div className='flex flex-col gap-8'>
              <h2>Vamos Conversar!</h2>
              <p>
                Tem um projeto em mente? Ou está curioso sobre nossos serviços?
                <br />
                Entre em contato conosco e vamos explorar suas ideias juntos!
              </p>
              <hr className='w-12' />
              <div className='hidden flex-col gap-4 w-96 md:flex'>
                <p className="flex items-center gap-2 mb-1 text-white-contraste">
                  <SiGmail className='text-[white]' /> contato@bocarracircus.com
                </p>
                <a href={apiWhatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white-contraste">
                  <FaWhatsapp className='text-[white]' />(19) 98988-4254
                </a>
              </div>
            </div>
            <RedesSociais />
          </div>

          <div className='flex gap-8 mt-16 lg:mt-0 md:flex-row md:flex-wrap flex-wrap w-full md:items-end '>
            <Cards
              titulo={'Serviços'}
              label={'Explore nossos serviços'}
              to={'/servicos'}
            />
            <Cards
              titulo={'Galeria'}
              label={'Veja nossos projetos circenses'}
              to={'/servicos/circo'}
            />

             {/*       <Cards
              classe={'mr-16 md:mr-0'}
              titulo={'Sobre Nós'}
              label={'Conheça nossa história'}
              to={'/sobre'}
            />
             */}
            <Cards
              titulo={'Contato'}
              label={'Entre em contato conosco'}
              to={'/contato'}
            />
            <Link className='w-32 ml-auto mt-48 md:mt-0 self-end relative top-[-96px] mb-[-96px] sm:mt-8 lg:mt-0 sm:top-0 sm:mb-0     sm:static' href={'/'}>
              <Image
                className='w-32 ml-auto self-end relative top-[-96px] mb-[-96px] sm:mt-8 lg:mt-0 sm:top-0 sm:mb-0 sm:static'
                loading="lazy"
                src='/bocarra_visual/Est1B.svg'
                alt="Logo Bocarra Circus"
                width={128}
                height={250}
              />
            </Link>
          </div>
        </div>
      </section>

      <aside className='flex text-center items-center justify-between textsFont pb-4 w-maxW max-w-hd grande:max-w-grande mt-1'>
        <p className='titlesFont '>Bocarra Circus &copy; 2024</p>
        <a className='titlesFont text-xs' href="https://github.com/VictorBelotto" target="_blank" rel="noopener noreferrer">designed by <i className='underline'>Victor Belotto</i></a>
      </aside>

    </footer>
  )
}

export default Footer