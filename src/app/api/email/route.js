import EmailTemplate from "../../components/EmailTemplate.js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_URI);

export async function POST(request) {
  const reporte = await request.formData();

  const nombre = reporte.get("nombre");
  const identificacion = reporte.get("identificacion");
  const ciudad = reporte.get("ciudad");
  const comoOcurrio = reporte.get("comoOcurrio");
  const tipo = reporte.get("tipo");
  const geo = reporte.get("geo");
  const image1 = reporte.get("image1");

  console.log(nombre, identificacion, ciudad, comoOcurrio, tipo, geo, image1);

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
      // attachments: [
      //   {
      //     filename: "soyjose.jpg",
      //     path: "https://nesin.io/_next/image?url=%2Fstatic%2Fimages%2FAshikNesin.jpg&w=384&q=75",
      //   },
      // ],
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
