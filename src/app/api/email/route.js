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

  async function imageToBuffer(image) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    return buffer;
  }
  
  const buffer1 = await imageToBuffer(image1);


  console.log(nombre, identificacion, ciudad, comoOcurrio, tipo, geo);

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["wildchamo@gmail.com", "ochixoxo@gmail.com"],
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
          content: buffer1.toString("base64"),
        },
      ],
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
