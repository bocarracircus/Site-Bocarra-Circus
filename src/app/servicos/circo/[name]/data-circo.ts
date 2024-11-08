import { geraLinks } from '@/app/lib/utils';

const images_4bicos = geraLinks('/imagens_modelos_circo/4bicos/', 20)
const images_cupula_redonda = geraLinks('/imagens_modelos_circo/cupula_redonda/', 31)
const images_mastareus = geraLinks('/imagens_modelos_circo/mastareus/', 17)
const images_tradicional = geraLinks('/imagens_modelos_circo/tradicional/', 16)

export const dataCirco = [
  {
    id: "redonda",
    titulo: "Redonda",
    descricao: "A lona redonda é projetada para proporcionar um espaço amplo e sem obstruções, ideal para espetáculos que exigem visibilidade total. Seu formato circular permite uma disposição harmoniosa dos assentos, oferecendo ao público uma visão completa do palco. Este modelo é versátil e pode ser adaptado para diferentes tipos de eventos, mantendo a atmosfera mágica e envolvente do circo.",
    imagens: images_cupula_redonda
  },
  {
    id: "tradicional",
    titulo: "Tradicional",
    descricao: "A lona tradicional, ou padrão, é o modelo clássico que evoca a essência do circo tradicional. Com seu design atemporal e linhas simples, esta lona mantém a autenticidade e o charme do circo de antigamente. É ideal para espetáculos que buscam uma estética clássica e nostálgica, oferecendo uma experiência familiar e reconfortante ao público. A lona tradicional é a escolha perfeita para quem deseja preservar a verdadeira essência do circo.",
    imagens: images_tradicional
  },
  {
    id: "4bicos",
    titulo: "Quatro Bicos",
    descricao: "A lona 4 bicos, também conhecida como Castelo, oferece um design icônico com quatro picos elevados que evocam a imagem de um castelo de contos de fadas. Este modelo cria uma atmosfera encantadora e mágica, ideal para eventos que desejam impressionar o público com uma estética única e envolvente. A disposição dos picos proporciona uma excelente distribuição do espaço interno, tornando-o adequado para grandes espetáculos e eventos especiais.",
    imagens: images_4bicos
  },
  {
    id: "mastareus",
    titulo: "Mastareus",
    descricao: "A lona mastareus, conhecida como Coroa, destaca-se por seu design imponente e majestoso, com um pico central elevado que confere um visual grandioso à estrutura. Este modelo cria uma sensação de altura e espaço, sendo perfeito para espetáculos que buscam impressionar o público com acrobacias aéreas e números de grande porte. A lona mastareus proporciona uma experiência visual impactante, transformando qualquer evento em um espetáculo memorável.",
    imagens: images_mastareus
  }
];
