import works from "@/app/utils/database/models/works";
import connectToDB from "@/app/utils/database/route";

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDB();
    const data = await request.json();
    const result = await works.create(data);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log("Error creating works:", error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: `Following work already exists: ${error.keyValue.title}` },
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
