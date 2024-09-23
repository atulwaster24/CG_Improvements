"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ children }) {
  const [menuOn, setMenuOn] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  const NavItems = ["Home", "Work", "About", "Contact", "News"];

  const getPath = (item) => {
    switch (item) {
      case "Home":
        return "/";
      case "Work":
        return "/work";
      case "About":
        return "/about";
      case "Contact":
        return "/contact";
      case "News":
        return "/news";
      default:
        return "/";
    }
  };

  const isCurrentPathActive = (item) => {
    const basePath = getPath(item);
    
    // Special handling for Home: exact match only
    if (item === "Home") {
      return currentPath === basePath;
    }

    // For other paths, check if the current path starts with the basePath
    return currentPath.startsWith(basePath);
  };

  return (
    <nav className="absolute z-50 sticky top-0 lg:border-2 bg-white">
      <div className="flex justify-between p-4 items-center border py-4 rounded-md lg:px-2">
        <div className="flex justify-center lg:basis-1/3 basis-1/2 ">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logos/CG.png"
              alt="Logo"
              width={250}
              height={0}
              className="w-[250px] h-auto drop-shadow-lg"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex justify-center basis-1/3">
          {NavItems.map((item, i) => (
            <Link key={i} href={getPath(item)}>
              <p
                className={`px-4 text-lg font-bold cursor-pointer ${
                  isCurrentPathActive(item)
                    ? "text-CG_Orange scale-110 underline"
                    : "text-black hover:scale-105 duration-300 hover:text-orange-300 ease-in-out transition-transform"
                }`}
              >
                {item}
              </p>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex justify-center basis-1/3">
          <Link href="/" className="">
            <Image
              src="/logos/Golden-wheel.png"
              alt="Wheel"
              width={45}
              height={0}
              className="hidden w-[45px] h-auto lg:block transform transition:transform hover:rotate-180 duration-500"
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <Image
          src={menuOn ? "/icons/close.svg" : "/icons/menu-svg.svg"}
          alt={menuOn ? "Close" : "Menu"}
          width={35}
          height={0}
          className="h-auto lg:hidden cursor-pointer"
          onClick={() => setMenuOn(!menuOn)}
        />
      </div>

      <div
        className={`lg:hidden transition-max-height duration-500 ease-in-out ${
          menuOn ? "h-60 overflow-auto border-2 border-CG_Blue" : "h-0"
        }`}
      >
        <hr
          className={menuOn ? "border w-[60%] mx-auto border-white" : "hidden"}
        />
        <div className={menuOn ? "flex justify-center" : "hidden"}>
          <div className="flex flex-col justify-center gap-4 py-4 ">
            {NavItems.map((item, i) => (
              <Link
                key={i}
                href={getPath(item)}
                onClick={() => setMenuOn(false)}
              >
                <p
                  className={`text-lg font-bold cursor-pointer transform transition-transform duration-200 hover:scale-110 hover:drop-shadow text-center ${
                    isCurrentPathActive(item)
                      ? "text-CG_Orange scale-110 underline"
                      : "text-black transition-colors transition-transform duration-500 hover:underline"
                  }`}
                >
                  {item}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
