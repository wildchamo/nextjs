"use client";
import ActionSection from "./ActionSection";
import todoriesgo from "../../../public/todoriesgo.png";
import exequias from "../../../public/exequias.png";
import soat from "../../../public/soat.png";


export default function MisSeguros(){
    return(
        <section className="">
            <h2>MIS SEGUROS</h2>
            <div className="flex justify-between bg-primary h-32 p-6 rounded-2xl text-sm">

                <ActionSection src={todoriesgo} text="Todo riesgo" ></ActionSection>
                <ActionSection src={exequias} text="Exequias"></ActionSection>
                <ActionSection src={soat} text="S.O.A.T"></ActionSection>
            </div>
        </section>
    )
}