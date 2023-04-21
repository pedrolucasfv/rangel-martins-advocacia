import Image from "next/image";

export type InfoContentProps = {
  title: string;
  image: string;
  altImage: string;
  text: string;
};

const InfoContent = ({ image, text, title, altImage }: InfoContentProps) => {
  return (
    <section className="mx-5" >
      <h3 className="text-2xl border-b-2 pb-2 border-yellow-500">{title}</h3>
      <div className="my-5">
        <Image src={image} alt={altImage} height={380} width={380} />
      </div>
      <p className="text-xl leading-relaxed">{text}</p>
    </section>
  );
};

export default InfoContent;
