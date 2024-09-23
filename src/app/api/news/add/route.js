import news from "@/app/utils/database/models/news";
import connectToDB from "@/app/utils/database/route";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDB();
    const data = await request.json();
    const result = await news.create(data);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log("Error creating news:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: `Following news already exists: ${error.keyValue.headline}` },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to create news." },
        { status: 500 }
      );
    }
  }
}
