"use client";
import Breadcrumbs from "@/app/components/Breadcrump";
import Gallery from "@/app/components/Gallery";
import Image from "next/image";
import { useEffect, useState } from "react";

const formatData = (inputDate) => {
  let date = new Date(inputDate);
  const options = { year: 'numeric', month: 'short', day: '2-digit' };

  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

export default function Page({ params }) {
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const formattedDate = formatData(data?.date);
  //   const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/work/${params.id}`, {cache: "no-store"});
      const data = await response.json();
      setData(data);
      setImages(data?.images);
    };
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumbs title={data?.title}/>
      <h4 className="lg:font-bold  w-full relative pb-5 md:pb-0"><span className="absolute right-10 md:right-20">Published Date: {formattedDate}</span></h4>
      <div className="h-auto w-full p-4  mx-auto lg:p-12">
        <div className="flex gap-4 flex-col justify-center items-center">
          <div className="md:w-3/4 p-4">
            <h1 className="text-xl md:text-4xl text-center mb-6 md:mb-12 font-bold italic ">
              {data?.title}
            </h1>
            <div className="w-full ">
              <Image
                src={data?.images?.[0] ? data?.images?.[0] : "/icons/placeholder.webp"}
                width={800}
                height={100}
                className="h-auto w-[70%] mx-auto rounded-sm"
                alt="image"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <p className="w-[80%] md:w-[70%] text-center text-sm md:text-lg text-justify">
              {data?.description}
            </p>
          </div>
          <div className="max-w-full"><Gallery images={data?.images}/></div>
        </div>
      </div>
    </>
  );
}
