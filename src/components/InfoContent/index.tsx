import Image from "next/image";
import { useEffect } from "react";

export type InfoContentProps = {
  title: string;
  image: string;
  altImage: string;
  text: string;
  id: string;
};

const InfoContent = ({
  image,
  text,
  title,
  altImage,
  id,
}: InfoContentProps) => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        head.classList.remove(headClass.initial);
        head.classList.add(headClass.end);

        setTimeout(() => {
          image.classList.add(imageClass);
        }, 650);

        info.classList.remove(infoClass.initial);
        info.classList.add(infoClass.end);

      } else if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        head.classList.remove(headClass.end);
        head.classList.add(headClass.initial);

        image.classList.remove(imageClass);

        info.classList.remove(infoClass.end);
        info.classList.add(infoClass.initial);
      }
    });


    const infoClass = {
      initial: "opacity-0",
      end: "opacity-100"
    }
    const headClass = {
      initial: "-translate-x-full",
      end: "translate-x-0"
    }
    const imageClass = "[transform:rotateX(180deg)]"
    

    const info = document.querySelector(`#${id}`)!;
    const head = document.querySelector(`#head-${id}`)!;
    const image = document.querySelector(`#image-${id}`)!;

    info.classList.add(infoClass.initial);
    head.classList.add(headClass.initial);
    intersectionObserver.observe(info);
    return () => intersectionObserver.disconnect();
  }, [id]);

  return (
    <section
      className="mx-5 transition-opacity duration-700 md:w-3/5 md:m-auto"
      id={id}
    >
      <h3
        id={`head-${id}`}
        className="text-2xl border-b-2 pb-2 border-yellow-500 transition-transform duration-700 md:transition-none md:duration-0"
      >
        {title}
      </h3>
      <div className="md:flex md:justify-between items-center">
        <div
          id={`image-${id}`}
          className="my-7 relative h-60 w-84 md:h-40 md:w-64 transition-all duration-1000 [transform-style:preserve-3d]"
        >
          <div className="absolute inset-0 bg-black">
            <Image
              className="rounded-xl border-2 border-slate-600"
              src="/img/dark-coin.png"
              alt={altImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/80 [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <Image
              className="rounded-xl border-2 border-slate-600"
              src={image}
              alt={altImage}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
          <p className="text-xl leading-relaxed text-center md:w-3/5">{text}</p>
      </div>
    </section>
  );
};

export default InfoContent;
