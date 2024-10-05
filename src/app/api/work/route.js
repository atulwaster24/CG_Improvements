import works from "@/app/utils/database/models/works";
import connectToDB from "@/app/utils/database/route";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectToDB();
        const data = await works.find().sort({ date: -1 });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.log("Error fetching works:", error);
        return NextResponse.json(
            { error: "Failed to fetch works." },
            { status: 500 }
        );
    }
}