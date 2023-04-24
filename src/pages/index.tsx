import Banner from "@/components/Banner";
import ButtonContact from "@/components/ButtonContact";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import InfoContent from "@/components/InfoContent";

export default function Home() {
  const infoContents = [
    {
      title: "Consulta Inicial",
      text: "A primeira etapa para buscar auxílio jurídico é apresentar os fatos ao profissional. Desta forma, em busca de uma solução rápida e eficaz, propomos um encontro presencial ou virtual para expor cada detalhe da demanda. ",
      altImage: "escrevendo no papel",
      image: "/img/advogado-assinando.jpg",
    },
    {
      title: "Consultoria jurídica",
      text: "Caso precise de conselhos ou busca medidas de prevenção em relação a uma questão jurídica, estamos aptos e preparados a te auxiliar. ",
      altImage: "escrevendo no papel",
      image: "/img/advogado-assinando.jpg",
    },
    {
      title: "Análise jurídica",
      text: "Já possui um processo judicial e quer saber do andamento ou obter mais informações a respeito? Trabalhamos também com análise e investigação de processos. ",
      altImage: "escrevendo no papel",
      image: "/img/advogado-assinando.jpg",
    },
    {
      title: "Audiência de Custódia ",
      text: "Nesta etapa, busca-se auxiliar e representar o preso durante a audiência de custódia, entrevistando-o bem como realizando os requerimentos necessários para resguardar os seus direitos.",
      altImage: "escrevendo no papel",
      image: "/img/advogado-assinando.jpg",
    },
  ];
  return (
    <div className="max-w-7xl m-auto">
      <div className="mb-36">
        <Banner />
      </div>
      <div className="-mt-24">
      <Coin />
      </div>
      {infoContents.map((content, index) => {
        return (
          <div key={index} className="mb-14">
            {index % 2 == 0 ? (
              <InfoContent {...content} id={`info${index}`} />
            ) : (
              <InfoContent {...content} id={`info${index}`} />
            )}
          </div>
        );
      })}
      
        <Footer />
      <ButtonContact />
    </div>
  );
}
