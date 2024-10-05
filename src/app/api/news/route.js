import connectToDB from "@/app/utils/database/route";
import news from "@/app/utils/database/models/news";

export async function GET() {
  try {
    await connectToDB();
    const newsData = await news.find().sort({ date: -1 }).limit(2)

    return new Response(JSON.stringify(newsData), {
      status: 200,
    });
  } catch (error) {
    console.log("Error getting news:", error);
    return new Response(JSON.stringify({ error: "Failed to get news." }), {
      status: 500,
    });
  }
}
