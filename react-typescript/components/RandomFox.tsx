import {
  MutableRefObject,
  Ref,
  useRef,
  useEffect,
  useState,
  ImgHTMLAttributes,
} from "react";
import Image from "next/image";
import { log } from "console";

export const LazyImage = ({ src, ...impProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );
  useEffect(() => {
    // Nuevo observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });
    //onIntersection

    if (node.current) {
      observer.observe(node.current as HTMLImageElement);
    }
    //observe node

    return () => {
      observer.disconnect;
    };
    // desconectar
  }, [src]);

  return <img ref={node} src={currentSrc} {...impProps} />;
};
