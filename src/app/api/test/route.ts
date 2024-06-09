import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("Cron Job Ran at: ", new Date());

  return new NextResponse("cron ran", { status: 200 });
}
