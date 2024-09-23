import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="transition-opacity py-12 duration-500 opacity-100">
        <div className="flex flex-col lg:flex-row justify-around items-center lg:py-20 px-4 lg:px-0">
          <div className="hidden lg:block pl-10">
            <h1 className="text-4xl font-extrabold leading-normal">
              मीरा भाईंदर का सम्मान
              <br /> यही है गीता जैन की पहचान
            </h1>
            <br />
            <h2 className="text-lg font-semibold">
              <div className="flex rounded-3xl border border-black w-full h-2">
                <div className="basis-1/3 bg-CG_Orange"></div>
                <div className="basis-1/3 bg-CG_White"></div>
                <div className="basis-1/3 bg-CG_Green"></div>
              </div>
            </h2>
          </div>
          <div className="">
            <Image
              src="/assets/Header_Banner.png"
              alt="Banner"
              width={720}
              height={0}
              className='width-[720px] height-auto'
            />
          </div>
        </div>
      </section>
  )
}

export default HeroSection;