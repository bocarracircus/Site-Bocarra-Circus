import { LiaUsersCogSolid } from "react-icons/lia";
import { TbBuildingCircus } from "react-icons/tb";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";
import { BsDiagram2 } from "react-icons/bs";
import IconEtapas from "./icon-etapas";

const CardEtapas = () => {

  return (
    <div className='flex flex-wrap w-fit h-fit'>
      <div className="w-1/2  p-2 flex md:justify-center lg:justify-start">
        <IconEtapas
          title={'Requisitos'}
          text={'Identificamos e documentamos os requisitos para atender às suas necessidades específicas.'}
          icon={HiOutlinePresentationChartLine}
        />
      </div>
      <div className="w-1/2  p-2 md:justify-center lg:justify-start flex">
        <IconEtapas
          title={'Planejamento'}
          text={'Criamos projetos personalizados com modelagem 3D para garantir precisão e inovação.'}
          icon={BsDiagram2}
        />
      </div>
      <div className="w-1/2  p-2 md:justify-center lg:justify-start flex">
        <IconEtapas
          title={'Qualidade'}
          text={'Desde o pedido inicial até as verificações finais, buscamos sempre a mais alta qualidade.'}
          icon={TbBuildingCircus}
        />
      </div>
      <div className="w-1/2  p-2 md:justify-center lg:justify-start flex">
        <IconEtapas
          title={'Instalação'}
          text={'Realizamos a instalação inicial proativamente para evitar problemas.'}
          icon={LiaUsersCogSolid}
        />
      </div>
    </div>
  );
};

export default CardEtapas;
