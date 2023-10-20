import MenuInferior from "../components/menuInferior";

export default function LayoutHome({children}){
    return(
        <div className='flex flex-col justify-between h-screen'>
            {children}
            {/* <MenuInferior/> */}
        </div>
    )
}