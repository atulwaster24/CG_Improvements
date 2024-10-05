import React from "react";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div className="relative bottom-0 w-full flex lg:justify-around bg-CG_Blue lg:p-6 p-4 mt-8 min-h-[320px]">
      <div className="flex flex-col w-full md:gap-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 lg:justify-around items-start p-10">
          <div className="">
            <h2 className="text-white font-bold text-xl lg:text-3xl">
              {" "}
              Please feel free to get in{" "}
            </h2>
            <h2 className="text-white font-bold text-xl lg:text-3xl">
              {" "}
              touch with us{" "}
            </h2>
          </div>
          <div className="flex gap-2">
            <div>
              <Image
                src="/icons/location.svg"
                width={24}
                height={24}
                className="pt-1"
                alt="Location Icon"
              />
            </div>
            <div>
              <div className="text-white">
                <p className="font-bold text-lg">Our Location</p>
              </div>
              <div className="pt-1">
                <a
                  href="https://maps.app.goo.gl/aLauuyR7E7o3PZ7t8"
                  target="_blank"
                  className="hover:text-white text-gray-400"
                >
                  <p className="">Mithalal Jain Bunglow, </p>
                  <p className="">Mira Bhayandar, Thane 401107</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/icons/mail.svg"
                  width={30}
                  height={30}
                  className=""
                  alt="Email Icon"
                />
              </div>
              <div>
                <div>
                  <p className="font-bold text-lg text-white">
                    How can we help?
                  </p>
                </div>
                <div>
                  <a
                    href="mailto:geetajainoffice@gmail"
                    className="hover:text-white text-gray-400"
                  >
                    Mail : geetajainoffice@gmail.com
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+917400402834"
                    className="hover:text-white text-gray-400"
                  >
                    Phone : +917400402834
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-around ">
          <div className="hidden md:block">
            <Image
              src="/logos/CG_logo.png"
              width={225}
              height={100}
              className=""
              alt="Email Icon"
            />
          </div>
          <div className="my-auto order-1 pt-12 md:pt-0 md:order-0 mx-auto md:mx-0">
            <p className="text-gray-200 font-medium text-sm">
              &copy; 2024 ConnectGeeta | All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-2 my-auto pl-10 md:pl-0 md:pr-24 order-0 md:order-1">
            <a href="https://www.facebook.com/connectGEETA/" target="_blank">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={30}
                height={25}
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="https://www.instagram.com/connectgeeta/" target="_blank">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={30}
                height={25}
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="https://www.youtube.com/@ConnectGeeta" target="_blank">
              <Image
                src="/icons/youtube.svg"
                alt="Youtube"
                width={30}
                height={25}
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
            <a href="https://x.com/mlageetajain" target="_blank">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={30}
                height={25}
                className="hover:scale-125 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
