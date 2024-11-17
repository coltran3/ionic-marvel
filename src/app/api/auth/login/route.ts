import { createSession } from "@/app/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data: { email?: string } = await request.json();

    if (!data.email) {
      return NextResponse.json(
        { error: "Informe o email para entrar na aplicação" },
        { status: 400 }
      );
    }

    await createSession(data.email);

    return NextResponse.json({ message: "Login Efetuado" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Um erro inesperado aconteceu" },
      { status: 500 }
    );
  }
}
