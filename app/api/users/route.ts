import users from "../../json/users.json";
import { NextResponse } from "next/server";
import { applyImage } from "../utils";

export async function GET() {
  const usersList = users.map((items) => applyImage(items));

  return NextResponse.json(usersList, { status: 200 });
}
