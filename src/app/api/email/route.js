import EmailTemplate from "../../components/EmailTemplate.js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_URI);

export async function POST(request) {
  const { nombre, identificacion, ciudad, comoOcurrio, tipo, geo } =
    await request.json();

  console.log(nombre, identificacion, ciudad, comoOcurrio, tipo, geo);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["wildchamo@gmail.com", "gabriela.peralta@uao.edu.co"],
      subject: "Hola JOSE",
      react: EmailTemplate({
        nombre,
        identificacion,
        ciudad,
        comoOcurrio,
        tipo,
        geo,
      }),
      attachments: [
        {
          filename: "soyjose.jpg",
          path: "https://nesin.io/_next/image?url=%2Fstatic%2Fimages%2FAshikNesin.jpg&w=384&q=75",
        },
      ],
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
