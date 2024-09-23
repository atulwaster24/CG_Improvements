"use client";
import HeroSection from "./ui/home/hero-section";
import CarousalSection from "./ui/home/carousal-section";
import YoutubeSection from "./ui/home/youtube-section";
import NewsSection from "./ui/home/news-section";
import ContactSection from "./ui/home/contact-section";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <hr className="h-1 bg-gray-100 w-[50%] mx-auto" />
      <CarousalSection />
      <YoutubeSection />
      <hr className="h-1 bg-gray-100 w-[50%] mx-auto" />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
