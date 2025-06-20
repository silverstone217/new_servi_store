import { ANTON } from "@/lib/fonts";
import React from "react";
import img from "@/public/images/phone1.png";
import Image from "next/image";
import { ServiApps } from "@/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Download } from "lucide-react";

const Hero_section = () => {
  return (
    <div
      className="full h-full flex items-center justify-center 
    bg-gradient-to-b from-blue-800 via-blue-700 to-blue-500
     transition-all duration-500 ease-in-out
    "
    >
      {/* Cercle en bas avec un dégradé radial */}

      {/* Contenu de la page ici */}
      <div className="relative z-10 p-8 text-white">
        <h1
          className={`${ANTON.className} text-4xl font-bold mb-4 max-w-lg text-center`}
        >
          Retrouver et <span className="text-[#2f95dc]">télécharger</span>{" "}
          toutes les applications mobiles de SERVI
        </h1>

        {/* image */}
        <div className="relative">
          <Image
            src={img}
            alt="image"
            width={1200}
            height={1200}
            className="w-full object-cover max-w-lg h-auto z-10"
            priority
          />
          <div
            className="absolute w-full h-44  bottom-5 -z-10
           rounded-t-full bg-gradient-to-b
           from-blue-900  to-blue-800
           "
          />
        </div>
      </div>

      {/* Apps */}
      <div
        className="w-full flex items-center gap-3 justify-center px-4  
        mt-4 overflow-x-auto overflow-y-hidden absolute bottom-4 text-white
         transition-all duration-500 ease-in-out
        "
      >
        {ServiApps.map((app, idx) => (
          <Popover key={idx}>
            <PopoverTrigger asChild>
              <div
                className="py-2 px-3 flex items-center gap-1.5 border backdrop-blur-lg cursor-pointer
              bg-black/50 p-1.5 rounded-full shadow transition-all duration-500 ease-in-out"
              >
                <Image
                  src={app.logo}
                  alt={app.name + " logo"}
                  width={100}
                  height={100}
                  className="w-9 h-9 object-cover rounded-full border-black"
                  priority
                />
                <span
                  className="text-sm font-bold 
              
              "
                >
                  {app.name}
                </span>
              </div>
            </PopoverTrigger>
            <PopoverContent className="bg-white border-white shadow-2xl">
              <div className="flex flex-col gap-4">
                <span
                  className={`text-bas font-bold ${ANTON.className} tracking-wider uppercase`}
                >
                  {app.name}
                </span>
                <p className="line-clamp-[8] text-gray-700">
                  {app.description}
                </p>

                <Link
                  href={app.path}
                  className="bg-blue-600 px-4 py-2 flex items-center justify-center gap-2 text-white
                  group shadow
                  "
                >
                  <span>Telecharger</span>
                  <Download
                    className="size-5 group-hover:text-green-400
                  transition-all duration-500 ease-in-out
                  "
                  />
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export default Hero_section;
