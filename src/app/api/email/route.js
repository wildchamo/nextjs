import EmailTemplate from "../../components/EmailTemplate.js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { imageToBuffer } from "../../utils/buffer.js";

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
  const buffer1 = await imageToBuffer(image1);

  const image2 = reporte.get("image2");
  const buffer2 = await imageToBuffer(image2);

  const image3 = reporte.get("image3");
  const buffer3 = await imageToBuffer(image3);

  const image4 = reporte.get("image4");
  const buffer4 = await imageToBuffer(image4);

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
          content: buffer1,
        },
        {
          filename: "soyjose.jpg",
          content: buffer2,
        },
        {
          filename: "soyjose.jpg",
          content: buffer3,
        },
        {
          filename: "soyjose.jpg",
          content: buffer4,
        },
      ],
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
