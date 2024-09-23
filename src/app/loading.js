import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-CG_Blue">
      <div>
        <Image
          src="/logos/Golden-wheel.png"
          alt="Wheel"
          width={100}
          height={100} 
          className="animate-spin"  
        />
      </div>
    </div>
  );
};

export default Loading;
