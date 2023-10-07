import Image from "next/image";

export default function NavAction({src}){
    return(
        <Image src={src} width={50} height={50}>    
        </Image>

    )
}