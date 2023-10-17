import  EmailTemplate  from "../../components/EmailTemplate.js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_URI);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["wildchamo@gmail.com", "ochixoxo@gmail.com"],
      subject: "Hello Jose",
      react: EmailTemplate({ firstName: "Jose" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
