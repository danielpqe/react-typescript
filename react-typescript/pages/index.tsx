import Image from "next/image";
import { Inter } from "next/font/google";
import { LazyImage } from "@/components/RandomFox";
import { MouseEventHandler, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const random: () => number = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<IImageItem>>([
    // { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    // { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    // { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    // { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const target = event.target;
    // console.log("target", target);

    setImages([
      ...images,
      { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    ]);
  };
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return (
    <main>
      <h2>Hello world!</h2>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }) => {
        return (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              alt=""
              width="250"
              height={250}
              className="rounded-md bg-gray-300"
            />
          </div>
        );
      })}
    </main>
  );
}
