import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const { identificacion, password } = await request.json();

    const userfound = await User.findOne({ identificacion });

    if (!userfound)
      return NextResponse.json(
        {
          message: "No existe un usuario con este número de identificación",
        },
        {
          status: 400,
        }
      );

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        {
          message: "Contraseña incorrecta",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(userfound);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
