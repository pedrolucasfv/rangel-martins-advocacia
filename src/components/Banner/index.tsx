import Image from "next/image";

const Banner = () => {
  return (
    <section className="mx-5">
      <div className="my-16 animate-pulse flex justify-center items-center">
        <Image
          src="/img/dark-logo.png"
          alt="logo da rangel e martins advocacia"
          height={300}
          width={300}
        />
      </div>
      <div className="text-center">
      <p className="text-xl leading-relaxed">
        Nós somos um escritório de advocacia localizado em Bom Jesus do
        Itabapoana/RJ, fundado por dois advogados dedicados e comprometidos.
        Nosso objetivo como Missão é levar justiça aos que dela precisam, por
        meio de um atendimento humanizado e atencioso.{" "}
      </p>
      <p className="text-xl leading-relaxed">
        Como Visão, buscamos resolver a vida dos injustiçados com transparência,
        simplicidade e celeridade. Para isso, trabalhamos com ética e
        comprometimento integral em cada caso, buscando uma solução individual e
        personalizada para cada cliente.
      </p>
      <p className="text-xl leading-relaxed">
        Com nossos Valores, temos como base a busca pela verdade acima de tudo,
        garantindo a defesa dos direitos dos nossos clientes em todas as
        instâncias. Se você precisa de um advogado em Bom Jesus, conte conosco
        para garantir seus direitos e obter a justiça que você merece.
      </p>
      </div>
    </section>
  );
};

export default Banner;
