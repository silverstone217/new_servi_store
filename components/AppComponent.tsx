"use client";
import { ANTON } from "@/lib/fonts";
import { ServiApps } from "@/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// interface AppProps {
//   app: {
//     name: string;
//     logo: StaticImageData;
//     path: string;
//     description: string;
//     DataUtilities: {
//       title: string;
//       description: string;
//     }[];
//   };
// }

const AppComponent = () => {
  const appUrl = usePathname();

  const app = ServiApps.find((a) => a.path.toLowerCase().includes(appUrl));

  if (!app || appUrl === "/")
    return (
      <div>
        <h2>404!</h2>
        <p>Aucune application trouvée</p>
      </div>
    );

  const fileUrl = app.apkUrl; // `/files${appUrl}.apk`;

  //   console.log({ fileUrl });

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 p-8 pt-4 lg:pt-0 lg:h-full w-full gap-8">
      {/* contents */}
      <div className=" w-full flex flex-col justify-center gap-4">
        <div className="flex items-center gap-3 w-full ">
          <h2
            className={`${ANTON.className} text-4xl  tracking-wide uppercase`}
          >
            {app.name}
          </h2>
          <Image
            src={app.logo}
            alt={app.name + " logo"}
            width={150}
            height={150}
            className="rounded-full size-12 border-black shadow"
            priority
          />
        </div>

        {/* BTN DOWNLOAD */}
        <Link
          href={fileUrl}
          className="bg-blue-900 px-4 py-2 flex items-center justify-center gap-2 text-white
            group shadow hover:text-green-600 transition-all duration-500 ease-in-out 
            border-blue-600 
            "
        >
          <span>Telecharger</span>
          <Download
            className="size-5 
            transition-all duration-500 ease-in-out
            "
          />
        </Link>

        {/* desc */}
        <p className="text-gray-200 text-sm">{app.description}</p>

        {/* utilities */}
        <div className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg ">
          {app.DataUtilities.map((util, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-blue-50 rounded-lg p-3 hover:bg-blue-100 transition-colors"
            >
              <span className="shrink-0 font-semibold text-blue-700 text-sm">
                {util.title}:
              </span>
              <span className="text-gray-700 text-sm">{util.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* images */}
      <div className="w-full bg-blue-600 rounded"></div>
    </div>
  );
};

export default AppComponent;
