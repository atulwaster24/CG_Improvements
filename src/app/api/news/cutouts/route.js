import connectToDB from "@/app/utils/database/route";
import images from "@/app/utils/database/models/images";

export async function GET() {
  try {
    await connectToDB();
    const fetchedCutouts = await images.find({
      tags: { $all: ["news", "Cutout"] },
    });
    return new Response(JSON.stringify(fetchedCutouts), { status: 200 });
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
