import { connectDB } from "@/app/utils/mongoose";
import Insurance from "@/models/insurances";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const {
      nombrePoliza,
      tipoPoliza,
      companiaAseguradora,
      fechaVencimiento,
      documentos,
      idUser,
    } = await request.json();

    console.log(
      nombrePoliza,
      tipoPoliza,
      companiaAseguradora,
      fechaVencimiento,
      documentos,
      idUser
    );

    const insurance = new Insurance({
      idUser,
      nombrePoliza,
      tipoPoliza,
      companiaAseguradora,
      fechaVencimiento,
      documentos,
    });

    const savedInsurance = await insurance.save();

    return NextResponse.json({ "creado con éxito": savedInsurance });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
