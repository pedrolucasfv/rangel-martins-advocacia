import Image from "next/image";
import { useEffect } from "react";

export type InfoContentProps = {
  title: string;
  image: string;
  altImage: string;
  text: string;
  id: string;
  invert?: boolean;
};

const InfoContent = ({
  image,
  text,
  title,
  altImage,
  id,
  invert = false,
}: InfoContentProps) => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        head.classList.remove(initialFirstClass);
        head.classList.add(endClass);

        image.classList.remove(initialSecondClass);
        image.classList.add(endClass);

        text.classList.remove(initialFirstClass);
        text.classList.add(endClass);

        info.classList.remove("blur-md");
        info.classList.add("blur-none");
      } else if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        head.classList.remove(endClass);
        head.classList.add(initialFirstClass);

        image.classList.remove(endClass);
        image.classList.add(initialSecondClass);

        text.classList.remove(endClass);
        text.classList.add(initialFirstClass);

        info.classList.remove("blur-none");
        info.classList.add("blur-md");
      }
      console.log(entries);
    });

    let initialFirstClass = "translate-x-full";
    let initialSecondClass = "-translate-x-full";
    let endClass = "translate-x-0";

    if (invert) {
      initialFirstClass = "-translate-x-full";
      initialSecondClass = "translate-x-full";
      endClass = "translate-x-50";
    }

    const info = document.querySelector(`#${id}`)!;
    const head = document.querySelector(`#head-${id}`)!;
    const image = document.querySelector(`#image-${id}`)!;
    const text = document.querySelector(`#text-${id}`)!;

    if (id != "info0") {
      info.classList.add("blur-md");
      head.classList.add(initialFirstClass);
      image.classList.add(initialSecondClass);
      text.classList.add(initialFirstClass);
      intersectionObserver.observe(info);
    }
    return () => intersectionObserver.disconnect();
  }, [id, invert]);

  return (
    <section
      className="mx-5 transition-blur duration-700 md:w-3/5 md:m-auto"
      id={id}
    >
      <h3
        id={`head-${id}`}
        className="text-2xl border-b-2 pb-2 border-yellow-500 transition-transform duration-700 md:transition-none md:duration-0"
      >
        {title}
      </h3>
      <div className="md:mt-3 md:flex md:justify-between items-center">
        <div
          id={`image-${id}`}
          className="my-5 transition-transform duration-700 md:transition-none md:duration-0 h-80 w-84 md:h-40 md:w-64 relative"
        >
          <Image
            className="rounded-xl border-2 border-slate-600"
            src={image}
            alt={altImage}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p
          id={`text-${id}`}
          className="text-xl leading-relaxed text-center transition-transform duration-700 md:transition-none md:duration-0 md:w-3/5"
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default InfoContent;
