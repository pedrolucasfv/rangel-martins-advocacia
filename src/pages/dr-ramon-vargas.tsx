import Image from "next/image";
import Link from "next/link";

export default function DrRamon() {
  return (
    <div className="mx-5">
      <div className="flex justify-around items-center rounded-2xl p-7 my-8 border bg-white">
        <Link href="/">
          <div className="-mt-10 h-80 w-80 relative">
            <Image
              className="my-5 animate-pulse"
              src="/img/light-logo.png"
              alt="Dr Ramon advogado de Bom jesus"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>
      </div>
      <h3 className="text-3xl border-b-2 pb-2 border-yellow-500 font-semibold">
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
      <div className="mb-10" >
        <h3 className="text-3xl text-yellow-500">Formação</h3>
        <p className="text-l mt-2"><span className="font-bold">Curso:</span> Bacharel em direito</p>
        <p className="text-l leading-relaxed">
        <span className="font-bold">Intituição:</span> Faculdade metropolitana São Carlos
        </p>
        <h3 className="text-3xl border-t border-yellow-500 mt-3 pt-2 text-yellow-500">
          Contato
        </h3>
        <p className="text-l mt-2"><span className="font-bold">Telefone:</span> (22) 99844-2948</p>
        <p className="text-l"><span className="font-bold">Email:</span> ramondabl@gmail.com</p>
        <h3 className="text-3xl border-t border-yellow-500 mt-3 pt-2 text-yellow-500">
          Horário de atendimento
        </h3>
        <p className="text-l mt-2"><span className="font-bold">Escritório:</span> seg a sex: 8:00 às 18:00</p>
        <p className="text-l"><span className="font-bold">Via Whatsapp:</span> 24 horas</p>
      </div>
    </div>
  );
}
