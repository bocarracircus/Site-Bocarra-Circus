
import React from 'react';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { dataCirco } from './data-circo';
import { Metadata } from 'next';
import { CategoryCircos } from '@/app/ui/components/categoryCircos';


export async function generateMetadata({ params }: ParamsProps): Promise<Metadata> {
  const { name } = params;
  
  const service = dataCirco.find((s) => s.id === name)

  const title = service?.titulo || 'Nossos Serviços'
  const description = service?.descricao || 'Bocarra Circus é uma empresa especializada em coberturas têxteis para eventos, com foco na inovação e na qualidade.'

  return {
    title: `Lona modelo - ${title}`,
    description: description,
    keywords: [
      "Circo", "Lonas", "Bocarra Circus", "fabricante de lonas", "serviços", "servicos", "Tendas", "Tendas piramidais", "aluguel de tendas", "Galpoes", "Galpao de lona", "lona de circo", "Lonas sob medida", "Lona para eventos", "lonas de circo brasil", "Evento", "Lona personalizada", "Fabricaçao de lona",
    ],
    authors: [{ name: 'Victor Belotto' }],
    robots: "index, follow",
    openGraph: {
      type: "website",
      url: `https://www.bocarracircus.com/servicos/${service?.id}`,
      title: title,
      description: 'Entre em contato conosco e vamos explorar suas ideias juntos!',
    },
    alternates: {
      canonical: `https://www.bocarracircus.com/servicos/${service?.id}`,
    },
  };
}
interface ParamsProps {
  params: {
    name: string;
  };
}

const Page = ({ params }: ParamsProps) => {

  return (
    <CategoryCircos params={params.name}/>
  );
};

export default Page;
