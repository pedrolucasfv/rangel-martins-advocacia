import Image from "next/image";
import Link from "next/link";

export default function DrRamon() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center px-5 mb-4 [background:#5A3813] border-b-4 border-yellow-500 md:px-40 2xl:px-80">
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
          className="text-white text-xl border-2 px-7 py-2 rounded-xl bg-black tracking-wider"
        >
          Voltar
        </Link>
      </div>
      <div className="md:flex md:flex-row md:justify-center items-center mx-5 2xl:mt-20">
        <div className="md:mr-40">
          <h3 className="text-3xl border-b-2 pb-2 border-yellow-500 font-semibold">
          Dr. João Vitor Rangel
          </h3>
          <div className="my-5">
            <Image
              className="rounded-2xl border-2 border-slate-600"
              src="/img/foto-joao.jpg"
              alt="Dr Ramon advogado de Bom jesus"
              height={380}
              width={380}
            />
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-3xl text-yellow-500">Formação</h3>
          <p className="text-l mt-2">
            <span className="font-bold pr-2">Curso: </span> Bacharelado em Direito
          </p>
          <p className="text-l leading-relaxed">
            <span className="font-bold pr-2">Instituição:</span> Faculdade
            Metropolitana São Carlos
          </p>
          <p className="text-l mt-2">
            Aprovado no XXXIV Exame da Ordem dos Advogados do Brasil
          </p>
          <h3 className="text-3xl border-t border-yellow-500 mt-3 pt-2 text-yellow-500">
            Contato
          </h3>
          <p className="text-l mt-2">
            <span className="font-bold pr-2">Telefone:</span> (22) 98814-8044
          </p>
          <p className="text-l">
            <span className="font-bold pr-2">Instagram:</span> <Link className="text-yellow-500" href="https://www.instagram.com/advjoaorangel/"> @advjoaorangel</Link>
          </p>
          <p className="text-l">
            <span className="font-bold pr-2">Email:</span> jvpraes@hotmail.com
          </p>
          <h3 className="text-3xl border-t border-yellow-500 mt-3 pt-2 text-yellow-500">
            Horário de atendimento
          </h3>
          <p className="text-l mt-2">
            <span className="font-bold pr-2">Escritório:</span> seg a sex: 8:00 às
            18:00
          </p>
          <p className="text-l">
            <span className="font-bold pr-2">Via Whatsapp:</span> 24 horas
          </p>
        </div>
      </div>
    </div>
  );
}
