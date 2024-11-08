import { Metadata } from "next";
import Clientes from "./ui/home/clientes";
import Etapas from "./ui/home/etapas";
import Origem from "./ui/home/origem";
import ProcessoCriativo from "./ui/home/processo-criativo";
import Servicos from "./ui/home/servicos";
import SwiperHome from "./ui/home/swiper-home";

export const metadata: Metadata = {
  title: "Bocarra Circus",
  description: "Com mais de 30 anos de experiência, a Bocarra Circus oferece lonas circenses de alta qualidade, unindo tradição e inovação para encantar e inspirar o público.",
  keywords: [
    "Circo",
    "Lonas",
    "Bocarra Circus",
    "bocarra circus site",
    "home bocarra",
    "bocarra circos",
    "bocarra circus",
    "circus brasil",
    "fabricante de lonas para circo",
    "fabricante de coberturas"
  ],
  authors: [{name: "Victor Belotto"}],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://www.bocarracircus.com",
    title: "Bocarra Circus - Tradição e Inovação em Lonas Circenses",
    description: "Com mais de 30 anos de experiência, a Bocarra Circus oferece lonas circenses de alta qualidade, unindo tradição e inovação para encantar e inspirar o público.",
    images: [
      {
        url: "/images/bocarra_visual/rino.svg",
        width: 800,
        height: 600,
        alt: "Bocarra Circus logo",
      },
    ],
  },
  alternates: {
    canonical: "https://www.bocarracircus.com",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <SwiperHome/>
      <Origem />
      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <Servicos />
      </div>
      <Etapas />
      <div className='flex flex-col w-full items-center justify-center bg-blue-default'>
        <ProcessoCriativo />
      </div>
      <div className='flex flex-col w-full items-center justify-center bg-[#f0f0f0]'>
        <Clientes />
      </div>
     
    </div>
  );
}
