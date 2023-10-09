import Image from "next/image";

export default function NavAction({src,isActive, onButtonClick}){
    return(
        <>
        <div onClick={onButtonClick}
            className={` ${
                isActive ? "bg-terciary w-20 h-20 rounded-full flex items-center justify-center" : ""
              }`}>
        <Image alt="menú inferior" src={src} width={50} height={50}>    
        </Image>
        </div>
        </>

    )
}