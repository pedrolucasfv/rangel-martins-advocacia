import Image from "next/image";
import Link from "next/link";

export default function DrRamon() {
  return (
    <div className="mx-5">
      <Link href="/">
          <Image
           className="my-5 animate-pulse"
            src="/img/light-logo.png"
            alt="Dr Ramon advogado de Bom jesus"
            height={150}
            width={150}
          />
      </Link>
      <h3 className="text-2xl border-b-2 pb-2 border-yellow-500">
        Dr. Ramon Vargas Martins
      </h3>
      <div className="my-5">
        <Image
          className="rounded-2xl"
          src="/img/perfil-teste.jpg"
          alt="Dr Ramon advogado de Bom jesus"
          height={380}
          width={380}
        />
      </div>
      <div>
        <h3 className="text-2xl border-b-2 border-yellow-500 w-10">Endereço</h3>
        <p className="text-l leading-relaxed mt-2">
          Avenida Dr. Abreu Lima, 180, Sala 102
        </p>
        <p className="text-l leading-relaxed">Bom Jesus do Itabapoana/RJ</p>
        <h3 className="text-2xl border-b-2 border-yellow-500 mt-5">
          Horário de Funcionamento
        </h3>
        <p className="text-l leading-relaxed mt-2">
          Seg-Sex 09:00 às 18:00 Sábado 9:00 às 14:00
        </p>
        <h3 className="text-2xl border-b-2 border-yellow-500 mt-5">
          Redes Sociais
        </h3>
        <p className="text-l leading-relaxed mt-2">
          Seg-Sex 09:00 às 18:00 Sábado 9:00 às 14:00
        </p>
      </div>
    </div>
  );
}
