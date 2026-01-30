import { NextResponse } from "next/server";

const BASE_URL = "https://resume-ai-vw3t.onrender.com";

export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}/`, {
        method: "GET",
        cache: "no-store",
      });

    const data = await response.json();

    return NextResponse.json(
        {
          ok: response.ok,
          status: response.status,
        },
        { status: 200 }
      );
  } catch (error) {
    return NextResponse.json(
        { ok: false },
        { status: 200 }
      );
  }
}
