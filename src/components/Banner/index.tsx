import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-5">
      <div className="my-16 h-80 w-80 relative animate-pulse mx-auto">
            <Image
              className="my-5 animate-pulse"
              src="/img/dark-logo.png"
              alt="Dr Ramon advogado de Bom jesus"
              layout="fill"
              objectFit="cover"
            />
      </div>
      <div className="text-center">
        <p className="text-xl leading-relaxed mb-5">
          Nós somos um escritório de advocacia localizado em Bom Jesus do
          Itabapoana/RJ, fundado por dois advogados dedicados e comprometidos.
          Nosso objetivo como Missão é levar justiça aos que dela precisam, por
          meio de um atendimento humanizado e atencioso.
        </p>
        <p className="text-xl leading-relaxed mb-5">
          Como Visão, buscamos resolver a vida dos injustiçados com
          transparência, simplicidade e celeridade. Para isso, trabalhamos com
          ética e comprometimento integral em cada caso, buscando uma solução
          individual e personalizada para cada cliente.
        </p>
        <p className="text-xl leading-relaxed ">
          Nosso escritório de advocacia é especializado em oferecer soluções
          jurídicas em três áreas principais: direito de família, direito
          previdenciário e direito criminal. Se você precisa de um advogado em
          Bom Jesus, conte conosco para garantir seus direitos e obter a justiça
          que você merece.
        </p>
      </div>
    </section>
  );
};

export default Banner;
