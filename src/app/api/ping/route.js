import { NextResponse } from "next/server";
import { connectDB } from "@/app/utils/mongoose";
import User from "@/models/users";

export async function GET() {
  connectDB();

  const users = await User.find();

  return NextResponse.json(users);
}


export async function POST(request) {

  const data= await request.json();
  console.log(data);
  
  return NextResponse.json("hola");
}
