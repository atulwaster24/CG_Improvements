import works from "@/app/utils/database/models/works";
import connectToDB from "@/app/utils/database/route";

import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectToDB();
    const data = await works.findOne({ _id: id });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("Error fetching work:", error);
    return NextResponse.json(
      { error: "Failed to fetch work." },
      { status: 500 }
    );
  }
}
