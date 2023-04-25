import AreasContent from "@/components/AreasContent";
import Banner from "@/components/Banner";
import ButtonContact from "@/components/ButtonContact";
import Coin from "@/components/Coin";
import Footer from "@/components/Footer";
import InfoContent from "@/components/InfoContent";

export default function Home() {
  const infoContents = [
    {
      title: "Direito de Família",
      text: "Em direito de família, ajudamos nossos clientes em questões como divórcio, guarda dos filhos, pensão alimentícia, inventário e partilha de bens. Nossa equipe de advogados altamente qualificados está aqui para ajudá-lo a navegar por essas questões difíceis e encontrar as melhores soluções para sua família. ",
      altImage: "escrevendo no papel",
      image: "/img/direito-image-3.jpg",
    },
    {
      title: "Direito Previdenciário",
      text: "No direito previdenciário, nossos advogados têm vasta experiência em lidar com questões relacionadas a aposentadorias, pensões, auxílio-doença, invalidez e outros benefícios previdenciários. Se você está tendo problemas para obter os benefícios que tem direito, nossa equipe está pronta para ajudá-lo a obter o que é justo. ",
      altImage: "escrevendo no papel",
      image: "/img/direito-image-1.jpg",
    },
    {
      title: "Direito Criminal",
      text: "Na área de direito criminal, oferecemos defesa para clientes em casos de acusações criminais, incluindo crimes de tráfico de drogas, roubo, furto, violência doméstica, crimes contra vida, entre outros. Nossa equipe altamente qualificada tem um histórico comprovado de obtenção de resultados positivos para nossos clientes em todas as fases do processo criminal.",
      altImage: "escrevendo no papel",
      image: "/img/direito-image-2.jpg",
    },
    {
      title: "Direito Cível",
      text: " Nosso escritório de advocacia oferece atendimento personalizado e eficaz na área cível, com soluções adequadas às necessidades individuais dos clientes. Protegemos direitos e interesses em questões de disputas contratuais, problemas de propriedade e responsabilidade civil, entre outros. Nossa equipe experiente oferece orientação clara em todas as etapas do processo, trabalhando em estreita colaboração com os clientes para alcançar os melhores resultados possíveis em suas questões jurídicas.",
      altImage: "escrevendo no papel",
      image: "/img/direito-image-0.jpg",
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
      <AreasContent />
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
