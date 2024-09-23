import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardComponent = ({ data }) => {
  const router = useRouter();
  const handleReadMore = () => {
    router.push(`/work/${data._id}`);
  };

  return (
    <div className="max-w-sm min-w-[260px] p-2 md:min-w-[250px] lg:min-w-[400px] min-h-[400px] bg-gray-50 rounded-lg shadow-lg">
      <a href="#">
        {data.images[0] ? <Image src={data.images[0]} width={800} height={0} className="h-auto min-h-[200px] md:max-h-[200px] rounded-t-lg border-2" alt="image" /> : <Image src="/icons/placeholder.webp" width={800} height={0} className="h-auto md:max-h-[200px] rounded-t-lg border-2" alt="image" />}
        
      </a>
      <div className="flex flex-col justify-between gap-10 p-5">
        <a href="#">
          <h5 className="mb-2 text-lg lg:text-2xl font-bold tracking-tight text-black line-clamp-2">
            {data.title}
          </h5>
        </a>

        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 w-2/5"
          onClick={handleReadMore}
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
