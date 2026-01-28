import { NextResponse } from "next/server";

const BASE_URL = "https://resume-ai-vw3t.onrender.com";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const response = await fetch(`${BASE_URL}/chat/pdf`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao processar PDF" },
      { status: 500 }
    );
  }
}
