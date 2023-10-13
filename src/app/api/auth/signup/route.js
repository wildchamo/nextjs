import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const { nombre, password, identificacion, ciudad } = await request.json();


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

    const user = new User({
      nombre,
      password,
      identificacion,
      ciudad,
    });

    const savedUser = await user.save();

    console.log(savedUser);
 
 
    return NextResponse.json(savedUser);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
