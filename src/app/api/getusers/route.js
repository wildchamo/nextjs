import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();
    const users = await User.find();
    console.log(users);
    return NextResponse.json( users );
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
