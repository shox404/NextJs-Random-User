import users from "../../../json/users.json";
import { NextRequest, NextResponse } from "next/server";
import { applyImage } from "../../utils";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = users
    .map((user) => applyImage(user))
    .find((user) => user.id === parseInt(params.id));

  return NextResponse.json(user, { status: 200 });
}
