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
        entries.some(
          (entry) =>
            entry.isIntersecting &&
            entries.some((entry) => entry.boundingClientRect.y > 0)
        )
      ) {
        info.classList.remove(initialClass);
        info.classList.add(endClass);
      }
    });
    let initialClass = "translate-x-full";
    let endClass = "translate-x-0";
    if (invert) {
      initialClass = "-translate-x-full";
      endClass = "translate-x-50";
    }
    
    const info = document.querySelector(`#${id}`)!;
    info.classList.add(initialClass);
    intersectionObserver.observe(info);
    return () => intersectionObserver.disconnect();
  }, [id, invert]);

  return (
    <section
      className="mx-5 transition-transform duration-700 "
      id={id}
    >
      <h3 className="text-2xl border-b-2 pb-2 border-yellow-500">{title}</h3>
      <div className="my-5">
        <Image src={image} alt={altImage} height={380} width={380} />
      </div>
      <p className="text-xl leading-relaxed">{text}</p>
    </section>
  );
};

export default InfoContent;
