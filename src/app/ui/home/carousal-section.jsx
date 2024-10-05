"use client";
import React, { useState, useEffect } from "react";
import Carousel from "@/app/components/Carousal";

const CarousalSection = () => {
  const [carouselImages, setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const response = await fetch(
          "/api/home?requestedData=carousal-images",
          { cache: "no-store" }
        );
        const data = await response.json();
        setCarouselImages(data);
      } catch (err) {
        setError("Failed to fetch carousel images");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCarouselImages();
  }, []); // Empty dependency array ensures the fetch runs only once on component mount

  return (
    <section className="">
      <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-700 py-12">
        Gallery
      </h1>
      <div className="flex items-center justify-center p-2 md:p-0 w-full lg:h-[600px]">
        <Carousel slides={carouselImages} loading={loading}/>
      </div>
    </section>
  );
};

export default CarousalSection;
