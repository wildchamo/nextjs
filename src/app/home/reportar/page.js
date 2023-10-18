"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import FormMandarEmail from "../../components/FormMandarEmail";

const ReportarCaso = () => {
  const searchParams = useSearchParams()
  const tipo = searchParams.get('tipo')



  useEffect(() => {
    // if (!router.query.tipo) {
    //   router.push("/home");
    // }
  }),[];

  return (
    <section className="mr-8 ml-8 mt-8">
      <h1 className="text-center">Reporte {tipo}</h1>
      {tipo === "Agravado" && (<h2>holaa</h2>)}
      <FormMandarEmail />
    </section>
  );
};

export default ReportarCaso;
