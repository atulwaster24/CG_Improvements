import videos from "@/app/utils/database/models/videos";
import connectToDB from "@/app/utils/database/route";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDB();
    const data = await request.json();
    console.log(data);
    const result = await videos.create(data);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log("Error adding video to database:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: `Following Youtube video is already added: ${error.keyValue.title}`},
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to create works." },
        { status: 500 }
      );
    }
  }
}