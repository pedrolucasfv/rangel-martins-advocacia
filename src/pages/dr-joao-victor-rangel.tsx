import Image from "next/image";
import Link from "next/link";

export default function DrRamon() {
  return (
    <div className="min-h-screen">
      <div
        className="flex justify-between items-center px-5 mb-4 [background:#5A3813] bg-gradient-r to-blue-500 border-b-4 border-yellow-500"
      >
        <div className="h-24 w-24 relative animate-pulse">
          <Image
            src="/img/alt-logo.png"
            alt="Dr Ramon advogado de Bom jesus"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Link
          href="/"
          className="text-white text-xl px-7 py-2 rounded-xl bg-black tracking-wider"
        >
          Voltar
        </Link>
      </div>
      <div className="md:flex md:flex-row md:justify-center items-center mx-5">
        <div className="md:mr-40">
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
        </div>
        <div className="mb-10">
          <h3 className="text-3xl text-yellow-500">Formação</h3>
          <p className="text-l mt-2">
            <span className="font-bold">Curso:</span> Bacharel em direito
          </p>
          <p className="text-l leading-relaxed">
            <span className="font-bold">Intituição:</span> Faculdade
            metropolitana São Carlos
          </p>
          <h3 className="text-3xl border-t border-yellow-500 mt-3 pt-2 text-yellow-500">
            Contato
          </h3>
          <p className="text-l mt-2">
            <span className="font-bold">Telefone:</span> (22) 99844-2948
          </p>
          <p className="text-l">
            <span className="font-bold">Email:</span> ramondabl@gmail.com
          </p>
          <h3 className="text-3xl border-t border-yellow-500 mt-3 pt-2 text-yellow-500">
            Horário de atendimento
          </h3>
          <p className="text-l mt-2">
            <span className="font-bold">Escritório:</span> seg a sex: 8:00 às
            18:00
          </p>
          <p className="text-l">
            <span className="font-bold">Via Whatsapp:</span> 24 horas
          </p>
        </div>
      </div>
    </div>
  );
}
