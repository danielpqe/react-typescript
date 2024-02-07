import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type Props = {
    image: string,
    alt: string
}

export const RandoFox = ({image, alt}: Props):JSX.Element => {
    return <Image className='rounded-md' src={image} alt={alt} width='250' height={250}/>
} 

