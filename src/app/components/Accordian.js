"use client";
import React, { useEffect, useState } from "react";
import CardComponent from "./Card";
import Loading from "../work/loading";

const Accordian = () => {
  const [workData, setWorkData] = useState([]);
  const [open, setOpen] = useState([]); // Initialize as an empty array to track each item's open state
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/work");
        const data = await response.json();
        setWorkData(data);
        setOpen(Array(data.length).fill(false)); // Set initial state with all items closed
        setLoading(false); // Loading complete
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleDiv = (index) => {
    setOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="lg:container flex flex-col gap-12 lg:p-4 lg:p-12 pt-6 lg:pt-0">
      <div className="lg:mt-12 bg-CG_Blue rounded-lg lg:px-6 md:p-6 px-4 lg:w-8/12 w-full mx-auto">
        <h1 className="text-center lg:text-4xl text-2xl p-4 lg:p-0 lg:leading-9 leading-7 text-white font-bold">
          Our Recent Work
        </h1>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-4 lg:grid-cols-3 place-items-center gap-y-24">
          {workData.map((data, index) => (
            <div key={index}>
              <div onClick={() => toggleDiv(index)}>
                <CardComponent data={data} isOpen={open[index]} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordian;
