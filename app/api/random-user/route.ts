import users from "../../json/users.json";
import { NextResponse } from "next/server";
import { applyImage } from "../utils";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * users.length);

  const randomUser = users[randomNumber];

  return NextResponse.json(applyImage(randomUser), { status: 200 });
}
