import Image from "next/image";

export default function NavAction({src,isActive}){
    return(
        <>
        <div
            className={` ${
                isActive ? "bg-terciary w-20 h-20 rounded-full flex items-center justify-center" : ""
              }`}>
        <Image src={src} width={50} height={50}>    
        </Image>
        </div>
        </>

    )
}