import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { identificacion, password } = await request.json();

    const user = await User.findOne({ identificacion });

    if (!user)
      return NextResponse.json(
        {
          message: "No existe un usuario con este número de identificación",
        },
        {
          status: 400,
        }
      );

    console.log(user, password);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        {
          message: "Contraseña incorrecta",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
