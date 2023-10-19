import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDB();
    const {
      nombre,
      identificacion,
      ciudad,
      celular,
      isActive,
      vencimientoLicencia,
      fechaNacimiento,
      direccion,
      email,
      password,
      rol,
    } = await request.json();

    const userfound = await User.findOne({ identificacion });

    if (userfound)
      return NextResponse.json(
        {
          message: "Ya existe un usuario con este número de identificación",
        },
        {
          status: 400,
        }
      );

    const hashedPassword = await bcrypt.hash(password || identificacion, 12);

    const user = new User({
      nombre,
      identificacion,
      ciudad,
      celular,
      isActive,
      fechaVencimientoLicencia: vencimientoLicencia,
      fechaNacimiento,
      direccion,
      email,
      password: hashedPassword,
      rol,
    });

    const savedUser = await user.save();

    return NextResponse.json(savedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
