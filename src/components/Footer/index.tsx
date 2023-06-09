const Footer = () => {
  return (
    <section className="mb-10 mx-5 md:flex justify-around md:border-t md:border-yellow-500 md:pt-5">
      <div>
        <h3 className="text-yellow-600 text-2xl border-t border-yellow-500 pt-1 md:border-none">
          Endereço
        </h3>
        <p className="text-l mt-2">Avenida Dr. Abreu Lima, 180, Sala 102</p>
        <p className="text-l leading-relaxed">Bom Jesus do Itabapoana/RJ</p>
      </div>
      <div>
        <h3 className="text-yellow-600 text-2xl border-t border-yellow-500 pt-1 md:border-none mt-5 md:mt-0">
          Horário de Funcionamento
        </h3>
        <p className="text-l my-2">Seg-Sex 09:00 às 18:00</p>
        <p className="text-l my-2">Sábado 9:00 às 14:00</p>
      </div>
    </section>
  );
};

export default Footer;
