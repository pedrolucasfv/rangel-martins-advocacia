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


    if(id!='info0'){
    head.classList.add(initialFirstClass);
    image.classList.add(initialSecondClass);
    text.classList.add(initialFirstClass);
    intersectionObserver.observe(image);
    }
    return () => intersectionObserver.disconnect();
  }, [id, invert]);

  return (
    <section className="mx-5 transition-transform duration-700 " id={id}>
      <h3 id={`head-${id}`} className="text-2xl border-b-2 pb-2 border-yellow-500 transition-transform duration-700">{title}</h3>
      <div id={`image-${id}`} className="my-5 transition-transform duration-700">
        <Image className="rounded-xl border-2 border-slate-600" src={image} alt={altImage} height={380} width={380} />
      </div>
      <p id={`text-${id}`} className="text-xl leading-relaxed text-center transition-transform duration-700">{text}</p>
    </section>
  );
};

export default InfoContent;
