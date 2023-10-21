import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();
    const {
      _id,
      nombre,
      identificacion,
      ciudad,
      celular,
      vencimientoLicencia,
      fechaNacimiento,
      direccion,
      email,
    } = await request.json();

    const updatedUser = await User.updateOne(
      { _id },
      {
        nombre,
        identificacion,
        ciudad,
        celular,
        fechaVencimientoLicencia: vencimientoLicencia,
        fechaNacimiento,
        direccion,
        email,
      }
    );

    if (updatedUser.nModified === 0) {
      return NextResponse.json(
        {
          message: "No se pudo actualizar el usuario",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      { message: "usuario modifcado" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
