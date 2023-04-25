import Image from "next/image";

const AreasContent = () => {
  return (
    <section className="mb-20 p-5 text-center mx-5">
      <div>
        <p className="text-xl">
          Nós nos especializamos em três áreas principais do direito. Com vasta
          experiência nessas áreas, estamos prontos para garantir seus direitos
          e obter a justiça que você merece.
        </p>
        <div className="flex justify-between mt-16">
          <div className="w-20 flex flex-col items-center">
            <div className="p-5 px-3 bg-white rounded-3xl border-2 border-slate-500">
              <Image
                src="/img/leilao.png"
                alt="logo da rangel e martins advocacia"
                height={50}
                width={50}
              />
            </div>
            <h4 className="mt-5 text-sm w-14">Direito Civíl</h4>
          </div>
          <div className="w-20 flex-col items-center">
            <div className="p-5 px-3 bg-white rounded-3xl border-2 border-slate-500">
              <Image
                src="/img/algemas.png"
                alt="logo da rangel e martins advocacia"
                height={50}
                width={50}
              />
            </div>
            <h4 className="mt-5 text-sm">Direito Criminal</h4>
          </div>
          <div className="w-20 flex-col items-center">
            <div className="py-5 px-3 bg-white rounded-3xl border-2 border-slate-500">
              <Image
                src="/img/justica.png"
                alt="logo da rangel e martins advocacia"
                height={50}
                width={50}
              />
            </div>
            <h4 className="mt-5 text-sm">Direito Previdenciário</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasContent;
