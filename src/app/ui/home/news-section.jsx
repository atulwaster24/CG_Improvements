import React, { useState, useEffect } from "react";
import NewsBlock from "@/app/components/NewsBlock";
import Link from "next/link";

const NewsSection = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/home?requestedData=news");
      const data = await response.json();
      setNewsData(data);
    };

    fetchData();
  }, []);
  return (
    <section className="news-section flex justify-center items-center py-10 flex-col gap-8 lg:gap-6 lg:py-20 ">
      <div>
        <h1 className="text-center text-2xl lg:text-3xl text-gray-700 pb-6 lg:pb-12 font-bold">
          Recent News
        </h1>
      </div>
      {newsData ? (
        newsData.map((data, i) => (
          <NewsBlock
            key={i}
            headline={data.headline}
            content={data.content}
            published_info={data.published_On}
            image_path={data.image}
          />
        ))
      ) : (
        <>
          <NewsBlock
            headline={
              "Relieving Traffic with Elevated Bridges: Inspired by the Nagpur Metro Model"
            }
            content={
              "Geeta Bharat Jain's innovative approach to urban planning is further exemplified by her efforts to reduce traffic congestion in Mira Bhayander. Drawing inspiration from the Nagpur Metro model, she has initiated the construction of three elevated bridges on Chhatrapati Shivaji Maharaj Road. These bridges, a critical component of the metro project, are designed to alleviate the pressure on the city’s traffic system.Jain’s involvement in this project reflects her deep understanding of the city’s infrastructure needs and her ability to translate that understanding into actionable plans. By overseeing the construction of these elevated bridges, she is directly addressing one of the most pressing issues facing Mira Bhayander: traffic congestion. Her proactive measures will ensure that the city’s roads remain functional and efficient as the population continues to grow."
            }
            published_info={"Jan 01, 2023, 5:00 PM"}
            image_path={"https://cg-website-storage.s3.ap-south-1.amazonaws.com/assets/bridge.jpg"}
          />
          <NewsBlock
            headline={
              "Nalasopara's Ajinkya Tara Dahi Handi Team Became the First Winner"
            }
            content={
              "Recognizing the importance of diverse transportation options in a growing city, Geeta Bharat Jain has also played a key role in enhancing Mira Bhayander’s connectivity through water transport. By securing joint funding from both the central and state governments, she has facilitated the introduction of a Ro-Ro (Roll-on/Roll-off) service between Mira Bhayander and Vasai. This water transport service represents a significant improvement in the city’s transportation infrastructure, offering residents a convenient and efficient alternative to road travel. Jain’s foresight in developing this service highlights her commitment to creating a city that is not only well-connected but also innovative in its approach to solving transportation challenges."
            }
            published_info={"Jan 01, 2023, 5:00 PM"}
            image_path={"https://cg-website-storage.s3.ap-south-1.amazonaws.com/assets/rowing.jpg"}
          />
        </>
      )}

      <button className="bg-CG_Blue border-2 hover:bg-white hover:text-CG_Blue hover:border-CG_Blue text-white font-bold py-2 px-4 rounded-md">
        <Link href="/news">Go to News</Link>
      </button>
    </section>
  );
};

export default NewsSection;
