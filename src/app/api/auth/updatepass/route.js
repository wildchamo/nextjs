import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_URI);

export async function POST(request) {
  try {
    await connectDB();
    const { newPassword, idUser, email } = await request.json();

    console.log(idUser);
    const user = await User.findOne({ _id: idUser });
    if (!user)
      return NextResponse.json(
        {
          message:
            "No existe un usuario con este id, porfavor contacte al soporte técnico",
        },
        {
          status: 400,
        }
      );

    const updatedUser = await User.updateOne(
      { _id: idUser }, // Cambia _id por idUser
      {
        password: bcrypt.hashSync(newPassword, 10),
      }
    );

    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Correo al mail del user",
        html: `<strong>Contraseña modificada con éxito</strong>`,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.error();
    }

    return NextResponse.json(
      {
        message: "contraseña modificada con éxito",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
