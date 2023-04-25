import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Coin = () => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
       
        setTimeout(() => {
            coin1.classList.add("[transform:rotateY(180deg)]");
          }, 600);
        setTimeout(() => {
          coin2.classList.add("[transform:rotateY(180deg)]");
        }, 1100);
      } else if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        coin1.classList.remove("[transform:rotateY(180deg)]");
        coin2.classList.remove("[transform:rotateY(180deg)]");
      }
    });
    const coin1 = document.querySelector("#coin1")!;
    const coin2 = document.querySelector("#coin2")!;
    intersectionObserver.observe(coin1);
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <section className="mb-10">
      <div className="mx-6">
        <div className="flex flex-col md:flex-row md:items-end items-center justify-around">
          <div className="my-16 h-52 w-52">
            <div
              id="coin1"
              className="relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0">
                <Image
                  src="/img/light-coin.png"
                  alt="logo da rangel e martins advocacia"
                  height={200}
                  width={200}
                />
              </div>
              <Link href="/dr-ramon-vargas" className="mb-2 mr-2 absolute inset-0 bg-black/80 rounded-full [transform:rotateY(180deg)] cursor-pointer [backface-visibility:hidden] border">
                <div className="flex flex-col items-center justify-center mt-16">
                  <h2 className="text-xl">Dr. Ramon Martins</h2>
                  <p className="text-center text-sm mt-3">
                    Clique aqui para mais inforamções
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="my-16 h-52 w-52 group -mt-6">
            <div
              id="coin2"
              className="relative h-full w-full transition-all duration-1000 [transform-style:preserve-3d]"
            >
              <div className="absolute inset-0">
                <Image
                  src="/img/alt-coin.png"
                  alt="logo da rangel e martins advocacia"
                  height={200}
                  width={200}
                />
              </div>
              <Link href="/dr-joao-vitor-rangel" className="mb-2 mr-2 absolute inset-0 bg-black/80 rounded-full [transform:rotateY(180deg)] cursor-pointer [backface-visibility:hidden] border">
                <div className="flex flex-col items-center justify-center mt-16">
                  <h2 className="text-l">Dr. João Vitor Rangel</h2>
                  <p className="text-center text-sm mt-3">
                    Clique aqui para mais inforamções
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coin;
