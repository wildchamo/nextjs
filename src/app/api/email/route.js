import EmailTemplate from "../../components/EmailTemplate.js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_URI);

export async function POST(request) {
  const { nombre, identificacion, ciudad, comoOcurrio,tipo } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["wildchamo@gmail.com", "gabriela.peralta@uao.edu.co"],
      subject: "Hola Gaby",
      react: EmailTemplate({ nombre, identificacion, ciudad, comoOcurrio, tipo }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
