import React, { useEffect, useState } from "react";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";

const YoutubeSection = () => {
  const [videosData, setVideosData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/home?requestedData=videos");
      const data = await response.json();
      setVideosData(data);
    };
    
    fetchData();
  }, []);

  return (
    <section className="w-full lg:p-10">
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-700 py-12">
        Recent Videos
      </h1>
      <div className="flex lg:flex-row flex-col justify-stretch items-center gap-6">
        {videosData ? (
          videosData.map((data, i) => (
            <div
              key={i}
              className="w-3/4 lg:w-2/5 h-full mx-auto flex flex-col gap-4 lg:p-6 rounded-xl hover:shadow-xl hover:bg-gray-200"
            >
              <div className="">
                <YoutubeEmbed videoId={data.videoID} />
              </div>
              <h1 className="lg:font-semibold md:text-xl text-red-500 p-2 line-clamp-2">
                <b>Title</b>: {data.title}
              </h1>
            </div>
          ))
        ) : (
          <>
            <div className="w-3/4 lg:w-2/5 h-full mx-auto flex flex-col gap-4 lg:p-6 rounded-xl hover:shadow-xl hover:bg-gray-200">
              <div className="">
                <YoutubeEmbed videoId="iUlDett5DM8" />
              </div>
              <h1 className="lg:font-semibold md:text-xl text-red-500 p-2 line-clamp-2">
                <b>Title</b>: गीता जैन के प्रयत्नों से उत्तन में सुरक्षा भीत को
                सरकार से 9 करोड़ मंजूर
              </h1>
            </div>
            <div className="w-3/4 lg:w-2/5 h-full mx-auto flex flex-col gap-4 lg:p-6 rounded-xl hover:shadow-xl hover:bg-gray-200">
              <div className="">
                <YoutubeEmbed videoId="XF5M77G3RwM" />
              </div>
              <h1 className="lg:font-semibold md:text-xl text-red-500 p2 line-clamp-2">
                <b>Title</b>: केशव सृष्टि में प्लास्टिक रीसाइक्लिंग मशीन का
                उद्घाटन
              </h1>
            </div>
            <div className="hidden lg:flex w-2/5 h-full mx-auto flex-col gap-4 lg:p-6 rounded-xl hover:shadow-xl hover:bg-gray-200">
              <div className="">
                <YoutubeEmbed videoId="iLXEilsTohg" />
              </div>
              <h1 className="font-semibold text-xl text-red-500 p-2 line-clamp-2">
                <b>Title</b>: Temba Hospital में Geeta Jain का दौरा, देखिये क्या
                है मामला!
              </h1>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center py-12">
        <button className="border w-max px-4 py-2 text-white rounded-full font-bold bg-red-600 cursor-pointer hover:bg-white hover:text-red-600 hover:border-red-600">
          <a
            href="https://www.youtube.com/results?search_query=geeta+bharat+jain"
            className="decoration-none"
            target="_blank"
          >
            Visit YouTube
          </a>
        </button>
      </div>
    </section>
  );
};

export default YoutubeSection;
