import connectToDB from "@/app/utils/database/route";
import images from "@/app/utils/database/models/images";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;
  try {
    await connectToDB();
    const fetchedCutouts = await images
      .find({
        tags: { $all: ["news", "Cutout"] },
      })
      .collation({ locale: "en", numericOrdering: true })
      .sort({ title: 1 })
      .skip(skip)
      .limit(limit);

    const totalCutouts = await images.countDocuments({
      tags: { $all: ["news", "Cutout"] },
    });
    return new Response(JSON.stringify({ fetchedCutouts, totalCutouts }), {
      status: 200,
    });
  } catch (error) {
    console.log("Error fetching new cutouts:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch new cutouts." }),
      {
        status: 500,
      }
    );
  }
}
