import { MutableRefObject, Ref, useRef, useEffect, use } from "react";
import Image from "next/image";
import { log } from "console";

type Props = {
  image: string;
  alt: string;
};

export const RandoFox = ({ image, alt }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Hi");
        }
      });
    });
    //onIntersection

    //observe node
    observer.observe(node.current as HTMLImageElement);
    // desconectar
  }, []);

  return (
    <Image
      ref={node}
      className="rounded-md"
      src={image}
      alt={alt}
      width="250"
      height={250}
    />
  );
};
