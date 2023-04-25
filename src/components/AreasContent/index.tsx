import Image from "next/image";
import { useEffect } from "react";

const AreasContent = () => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        setTimeout(() => {
          icons.forEach((icon) => {
            icon.classList.remove(blurClass.initial);
            icon.classList.add(blurClass.end);
          });
        }, 400);
        setTimeout(() => {
          heads.forEach((head) => {
            head.classList.remove(opacityClass.initial);
            head.classList.add(opacityClass.end);
          });
        }, 1000);
      } else if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        icons.forEach((icon) => {
          icon.classList.remove(blurClass.end);
          icon.classList.add(blurClass.initial);
        });
        heads.forEach((head) => {
          head.classList.remove(opacityClass.end);
          head.classList.add(opacityClass.initial);
        });
      }
    });

    const icons = document.querySelectorAll(".icon")!;
    const areas = document.querySelector("#areas")!;
    const heads = document.querySelectorAll(".textTransition")!;

    const blurClass = {
      initial: "blur",
      end: "blur-none",
    };
    const opacityClass = {
      initial: "opacity-0",
      end: "opacity-100",
    };

    icons.forEach((icon) => {
      icon.classList.add(blurClass.initial);
    });

    heads.forEach((head) => {
      head.classList.add(opacityClass.initial);
    });

    intersectionObserver.observe(areas);
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <section className="mb-20 p-5 text-center mx-5 md:w-3/5 md:m-auto md:mb-20">
      <div>
        <p className="text-xl">
          Nós nos especializamos em três áreas principais do direito. Com vasta
          experiência nessas áreas, estamos prontos para garantir seus direitos
          e obter a justiça que você merece.
        </p>
        <div id="areas" className="flex justify-between mt-16 md:w-80 md:mx-auto">
          <div className="w-20 flex flex-col items-center">
            <div className="p-5 px-3 bg-white rounded-3xl border-2 border-slate-500">
              <Image
                className="transition-all duration-700 icon"
                src="/img/leilao.png"
                alt="logo da rangel e martins advocacia"
                height={50}
                width={50}
              />
            </div>
            <h4 className="mt-5 text-sm w-14 textTransition transition-all duration-700">
              Direito Civíl
            </h4>
          </div>
          <div className="w-20 flex-col items-center">
            <div className="p-5 px-3 bg-white rounded-3xl border-2 border-slate-500">
              <Image
                className="transition-all duration-700 icon delay-300"
                src="/img/algemas.png"
                alt="logo da rangel e martins advocacia"
                height={50}
                width={50}
              />
            </div>
            <h4 className="mt-5 text-sm textTransition transition-all duration-700 delay-300">
              Direito Criminal
            </h4>
          </div>
          <div className="w-20 flex-col items-center">
            <div className="py-5 px-3 bg-white rounded-3xl border-2 border-slate-500">
              <Image
                className="transition-all duration-700 icon delay-700"
                src="/img/justica.png"
                alt="logo da rangel e martins advocacia"
                height={50}
                width={50}
              />
            </div>
            <h4 className="mt-5 text-sm textTransition transition-all duration-700 delay-700 ">
              Direito Previdenciário
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasContent;
