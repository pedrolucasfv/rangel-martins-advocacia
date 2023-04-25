import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-4xl mx-5 md:m-auto">
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
          Bem-vindo ao nosso escritório de advocacia localizado em Bom Jesus do
          Itabapoana, Rio de Janeiro, onde a justiça é a nossa missão. Fundado
          por dois advogados dedicados e comprometidos, nossa equipe trabalha
          com um atendimento humanizado e atencioso, buscando incessantemente
          soluções jurídicas personalizadas e transparentes para cada caso.
        </p>
        <p className="text-xl leading-relaxed mb-5">
          Se você está enfrentando problemas em questões cíveis, como conflitos
          de propriedade ou contratos, podemos ajudá-lo a resolver sua situação
          de forma eficaz e rápida. Se você precisa de orientação em questões
          previdenciárias, como aposentadoria ou benefícios, nossos advogados
          têm o conhecimento necessário para ajudá-lo a obter seus direitos. E
          se você enfrenta acusações criminais, podemos fornecer a representação
          legal que você precisa para proteger seus direitos e sua liberdade.
        </p>
        <p className="text-xl leading-relaxed ">
          Em nosso escritório de advocacia, você pode ter a certeza de que será
          representado por uma equipe altamente qualificada e dedicada, que
          trabalha incansavelmente para obter os melhores resultados possíveis
          para cada caso. Conte conosco para fornecer soluções jurídicas
          excepcionais que atendam às suas necessidades específicas e garantam
          seus direitos
        </p>
      </div>
    </section>
  );
};

export default Banner;
