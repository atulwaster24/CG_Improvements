import connectToDB from "@/app/utils/database/route";
import news from "@/app/utils/database/models/news";

import images from "@/app/utils/database/models/images";

import { NextResponse } from "next/server";

import videos from "@/app/utils/database/models/videos";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const requestedData = searchParams.get("requestedData");
  try {
    await connectToDB();
    if (requestedData === "news") {
      const fetchedData = await news.find().sort({ _id: -1 }).limit(2);
      return NextResponse.json(fetchedData, { status: 200 });
    } else if (requestedData === "carousal-images") {
      const fetchedData = await images.find({tags: {$all: ['homepage', 'carousal']}}).sort({ _id: -1 }).limit(5);
      return NextResponse.json(fetchedData, { status: 200 });
    } else {
      const fetchedData = await videos.find().sort({ _id: -1 });
      return NextResponse.json(fetchedData, { status: 200 });
    }
  } catch (error) {
    console.error(`Error fetching ${requestedData}:`, error);
    return NextResponse.json(
      { error: `Failed to fetch ${requestedData} data.`},
      { status: 500 }
    );
  }
}
