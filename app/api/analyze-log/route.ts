import { NextResponse } from "next/server";

const BASE_URL = "https://resume-ai-vw3t.onrender.com";

export async function GET() {
  try {
    const response = await fetch(`${BASE_URL}/logs`, {
        method: "GET",
        cache: "no-store",
      });

    const data = await response.json();

    return NextResponse.json(
        {
            total: data.total_requests ?? 0,
            logs: Array.isArray(data.logs) ? data.logs : [],
        },
        { status: 200 }
      );
  } catch (error) {
      return NextResponse.json(
        {
            total: 0,
            logs: [],
          },
        { status: 200 }
      );
  }
}
