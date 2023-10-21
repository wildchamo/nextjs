import MenuInferior from "../components/menuInferior";
import MenuSuperior from "../components/menuSuperior";

export default function LayoutHome({children}){
    return(
        <div className='flex flex-col justify-between h-screen'>
            <MenuSuperior/>
            {children}
            <MenuInferior/>
        </div>
    )
}