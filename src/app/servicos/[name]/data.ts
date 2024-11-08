import { geraLinks } from '@/app/lib/utils';

const imagesCirco = geraLinks('/imagens_circos/', 30)
const imagesAranha = geraLinks('/imagens_aranha/', 9)
const imagesExclusiva = geraLinks('/imagens_exclusivas/', 25)
const imagesGalpao = geraLinks('/imagens_galpao/', 12)
const imagesPiramides = geraLinks('/imagens_piramide/', 14)

export const dataServicos = [
  {
    id: 'circo',
    titulo: 'Lonas para Circo',
    descricao: 'Há mais de 30 anos, a Bocarra Circus tem o orgulho de cobrir espetáculos circenses com lonas que combinam tradição e inovação. Nossos modelos únicos e memoráveis são projetados para trazer grandiosidade ao seu circo, refletindo a magia e a emoção dos espetáculos. Cada lona é cuidadosamente desenvolvida para garantir durabilidade e um visual impressionante, assegurando que seu espetáculo se destaque. Com nossa experiência e dedicação, oferecemos soluções que elevam a qualidade e a presença de seu circo, proporcionando uma experiência incomparável.',
    imagens: imagesCirco
  },
  {
    id: 'piramide',
    titulo: 'Tendas Piramidais',
    descricao:'As tendas piramidais são ideais para eventos, feiras e festas, oferecendo uma estrutura elegante e versátil. Fabricadas com materiais de alta qualidade, nossas tendas garantem durabilidade e resistência às intempéries. Além de serem fáceis de montar e desmontar, permitem personalização conforme o tema do evento, assegurando uma experiência memorável para os participantes.',
    imagens: imagesPiramides
  },
  {
    id: 'exclusivas',
    titulo: 'Coberturas Exclusivas',
    descricao: 'Nossas coberturas exclusivas são a combinação perfeita de design sofisticado e funcionalidade superior. Cada projeto é personalizado para atender às especificações do cliente, utilizando materiais de ponta para assegurar durabilidade e resistência às intempéries. Além de garantir proteção eficaz contra os elementos, essas coberturas realçam a estética do ambiente, proporcionando uma solução estilizada e adaptada às necessidades específicas de qualquer evento.',
    imagens: imagesExclusiva
  },
  {
    id: 'aranha',
    titulo: 'Tenda Aranha',
    descricao: 'A tenda aranha proporciona um visual marcante e moderno, combinando materiais de alta qualidade com um design inovador e arrojado. Seu formato distintivo não só chama a atenção, mas também garante estabilidade e proteção em diversas condições climáticas. Resistente e fácil de montar, ela se adapta a diferentes layouts e configurações, oferecendo uma solução prática e estilizada para eventos que exigem uma estrutura funcional e atraente.',
    imagens: imagesAranha
  },
  {
    id: 'galpao',
    titulo: 'Galpão',
    descricao: 'Nossos galpões são projetados para maximizar espaço e funcionalidade, atendendo às necessidades de armazenamento, eventos e atividades industriais. Construídos com materiais robustos e duráveis, eles oferecem resistência em diversas condições climáticas e operacionais. Com opções de personalização e fácil montagem, nossos galpões proporcionam uma solução versátil e eficiente, assegurando um ambiente seguro e adaptável para suas operações e eventos.',
    imagens: imagesGalpao
  }
];
