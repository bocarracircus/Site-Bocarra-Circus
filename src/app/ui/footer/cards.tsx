import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  titulo: string,
  label: string,
  to: string,
  classe?: string
}

const Cards = ({ titulo, label, to, classe }: CardProps) => {
  return (
    <div className={classNames('flex group', classe)}>
      <Link
        href={to}
      >
        <div className='flex flex-col h-32 w-32'>
          <hr className='border-white-contraste' />
          <h4 className='mt-3' >{titulo}</h4>
          <p className='text-white-contraste text-base'>{label}</p>

          <Image
            src='/icons/arrowRed.svg'
            alt='Icone flecha'
            className='transition-transform duration-300 ease-in-out transform group-hover:translate-x-4 mt-auto'
            width={40}
            height={40}
          />
        </div>
      </Link>
    </div>
  )
}

export default Cards