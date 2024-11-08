import React from 'react'
import PageContato from '../ui/contato/page-contato'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Entre em contato",
  description: "Tem um projeto em mente? Ou está curioso sobre nossos serviços? Entre em contato conosco e vamos explorar suas ideias juntos!",
  keywords: ['Circo', 'Lonas', 'Bocarra Circus', 'bocarra contato', 'contato bocarra circus', 'bocarra circus site', 'bocarra',' circus brasil', 'fabricante de lonas', 'fabricante de circo', "Entre em contato"] ,
  authors: [{ name: "Bocarra Circus" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://www.bocarracircus.com/contato',
    title: 'Contato - Bocarra Circus',
    description: 'Entre em contato - Bocarra Circus',
  },
  alternates: {
    canonical: 'https://www.bocarracircus.com/contato',
  },
};

const Page = () => {
  return (
    <PageContato />
  )
}

export default Page