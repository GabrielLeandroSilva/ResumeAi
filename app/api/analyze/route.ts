import { NextResponse } from "next/server";

const BASE_URL = "https://resume-ai-vw3t.onrender.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao processar análise" },
      { status: 500 }
    );
  }
}
