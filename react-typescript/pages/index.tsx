import Image from "next/image";
import { Inter } from "next/font/google";
import { RandoFox } from "@/components/RandomFox";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const random:()=>number = ()=> Math.floor(Math.random()*123 )+1;
const generateId = ()=>Math.random().toString(36).substring(2,9)

type ImageItem = {
  id: string,
  url: string
}

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([
    {id:generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:generateId(),url:`https://randomfox.ca/images/${random()}.jpg`},
  ])

  const image:string = `https://randomfox.ca/images/${random()}.jpg`

  return (
    <main>
     <h2>Hello world!</h2>
     {images.map(({id, url})=>{
       return <div className="p-4" key={id}>

       <RandoFox  image={url} alt=''/>
       </div> 

     })}
    </main>
  );
}
