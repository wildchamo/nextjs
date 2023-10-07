import Image from "next/image"
import homePage from "../../../public/homepage.png"
import doorbell from "../../../public/doorbell.png"
import user from "../../../public/user.png"
import call from "../../../public/call.png"


export default function MenuInferior(){
    return(
        <footer className="bg-secundary mr-8 ml-8 h-20 rounded-2xl fixed inset-x-0 bottom-2">


        <div className="circulo rounded-full flex flex-col items-center justify-center">
            <div className="bg-yellowCall w-24 h-24 rounded-full flex items-center justify-center">
            <Image src={call} width={50} height={50}></Image>
            </div>        
        </div>
        </footer>
    )
}