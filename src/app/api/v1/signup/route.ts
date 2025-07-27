import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/app/lib/db";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { username, password } = data;
  const user = await prismaClient.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  return NextResponse.json(user);
}
