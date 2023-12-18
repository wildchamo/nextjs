import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_URI);

export async function POST(request) {
  try {
    await connectDB();
    const { email } = await request.json();
    const code= 123;
    const user = await User.findOne({ email });

    console.log(user);
    if (!user)
      return NextResponse.json(
        {
          message:
            "No existe un usuario con esta dirección de correo electrónico",
        },
        {
          status: 400,
        }
      );

    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Correo al mail del user",
        html: `<strong>Tu código de verificación es: ${code}</strong>`,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.error();
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
