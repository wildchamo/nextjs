"use client";

export default function PicoyPlaca(){
    return(
        <section className="pt-6">
            <h2>PICO Y PLACA</h2>
            <div className="flex flex-col justify-between bg-primary h-32 p-6 rounded-2xl text-sm">
            <p> Hoy en <b className="underline">Cali</b> para <b className="underline">particulares</b> es <b className="">0 y 9</b></p>
            <div className="flex justify-end" >
            <button className="bg-secundary text-white w-28 h-8 rounded-2xl">Ver más</button>
            </div>
            </div>
        </section>
    )
}