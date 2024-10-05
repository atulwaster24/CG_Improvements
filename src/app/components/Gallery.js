"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = ({ images }) => {
  const [featuredImageIdx, setFeaturedImageIdx] = useState(null);

  useEffect(() => {
    setFeaturedImageIdx(1);
  }, [images]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-gray-50 drop-shadow rounded-lg p-6">
      <div className="min-h-[300px] lg:min-h-[500px] max-w-[100%] flex items-center">
        <Image
          src={images?.[featuredImageIdx] ? images[featuredImageIdx] : '/icons/placeholder.webp'}
          width={720}
          height={100}
          alt="Featured Image"
          className="rounded-md max-w-[100%] border border-black"
        />
      </div>
      <div className="flex gap-4 p-4 overflow-x-scroll">
        {images?.map((img, i) =>
          i != featuredImageIdx ? (
            <Image
              src={img ? img : "/icons/placeholder.webp"}
              width={150}
              key={i}
              height={100}
              alt="Work Image"
              onClick={() => setFeaturedImageIdx(i)}
              className="rounded-sm transition-transform duration-300 border-2 border-transparent opacity-65 hover:border-black/60 hover:scale-105 cursor-pointer"
            />
          ) : (
            <Image
              src={img}
              width={150}
              key={i}
              height={100}
              alt="Featured"
              className="rounded-sm transition-transform duration-300 border-2 hover:border-black cursor-pointer hover:scale-105"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
