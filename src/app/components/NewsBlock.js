import React from 'react'
import Image from 'next/image'

const formatData = (inputDate) => {
  let date = new Date(inputDate);
  const options = { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };

  const formattedDate = date.toLocaleDateString('en-US', options);
  return formattedDate;
}

const NewsBlock = ({headline, content, published_info, image_path}) => {
  const formattedDate = formatData(published_info);
  return (
    <div className="opacity-0 transition-all lg:-translate-x-1/2 duration-500 flex flex-col lg:flex-row rounded-lg border-2 border-slate-200 bg-slate-50 w-[90%] lg:w-[80%] justify-center items-center lg:px-6 opacity-100 lg:translate-x-0" >
          <div className="p-4 lg:p-12 flex justify-end order-2 basis-1/2">
            <div className="flex flex-col lg:p-8 lg:basis-3/3 gap-6">
              <h1 className="font-bold text-2xl">{headline}</h1>
              <div className="flex justify-center flex-col gap-4">
                <p className="">
                  {content}
                </p>
                <h3>
                  <b className="font-semibold">Published: &nbsp;</b><i>{formattedDate}</i>
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-start order-1 p-8 basis-1/2">
            <Image
              src={image_path}
              alt="Image 1"
              width={750}
              height={0}
              className="width-[500px] h-auto rounded-lg "
            />
          </div>
        </div>
  )
}

export default NewsBlock