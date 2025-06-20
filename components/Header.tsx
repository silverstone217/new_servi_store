"use client";
import { ANTON } from "@/lib/fonts";
import { LinksPage, ServiApps } from "@/utils";
import { AlignJustify, House, PhoneCall } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className=" fixed top-4  right-4 left-4 text-white">
      {/* container */}
      <div
        className="mx-auto w-full  max-w-7xl px-4 py-2 rounded flex  
      items-center justify-between gap-4  transition-all duration-500 ease-in-out

      "
      >
        {/* Home link */}
        <Link
          href={"/"}
          className={`${ANTON.className} text-lg tracking-wide flex 
          items-center justify-center gap-1.5 `}
        >
          SERVI <span>apps.</span>
        </Link>
        {/* Nav links big screen*/}
        <nav
          className="hidden md:flex items-center gap-3 px-6 py-2 rounded
        justify-center border-2 backdrop-blur-2xl shadow"
        >
          {LinksPage.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              className={`text-base font-bold px-2 py-1
              transition-all duration-500 ease-in-out
              hover:bg-black/50 rounded-full hover:shadow 
              ${pathname === link.path ? "bg-black/50 shadow" : ""}
              `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={"/"}
          className="hidden md:flex items-center gap-1.5 bg-black/50 
          p-1.5 rounded-full shadow text-sm px-3 py-2"
        >
          <PhoneCall className="size-5" />
          <span>Contact</span>
        </Link>

        {/* menu small screen */}
        <div className="md:hidden">
          <SmallScreenMenuNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

const SmallScreenMenuNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent
        className="w-[90%] bg-blue-600 text-white border-blue-600 
      shadow-2xl h-full overflow-y-auto pb-4
      transition-all duration-500 ease-in-out
      "
      >
        <SheetHeader>
          <SheetTitle className={`${ANTON.className} tracking-wide text-lg`}>
            SERVI <span>apps.</span>
          </SheetTitle>
          <SheetDescription className="text-gray-200">
            Retrouver ettélécharger toutes les applications mobiles de SERVI.
          </SheetDescription>
        </SheetHeader>

        <div className="flex w-full px-4 flex-col gap-2 flex-1 py-4 border-y">
          {/* links */}
          <Link
            href={"/"}
            className={`text-base font-bold px-3 py-2
              transition-all duration-500 ease-in-out
              hover:bg-black/50 rounded-lg hover:shadow 
              ${pathname === "/" ? "bg-black/50 shadow" : ""}
              flex items-center gap-4
              `}
          >
            <House />
            <span>{`Accueil`}</span>
          </Link>

          {/* ?apps */}
          {ServiApps.map((app, idx) => (
            <SheetClose key={idx} asChild>
              <Link
                href={app.path}
                className={`text-base font-bold px-3 py-2
              transition-all duration-500 ease-in-out
              hover:bg-black/50 rounded-lg hover:shadow 
              ${pathname === app.path ? "bg-black/50 shadow" : ""}
              flex items-center gap-4
              `}
              >
                <Image
                  src={app.logo}
                  alt={app.name}
                  width={24}
                  height={24}
                  className="rounded-full size-6"
                />
                <span>{app.name}</span>
              </Link>
            </SheetClose>
          ))}
        </div>

        <div className="px-4 flex items-center justify-end">
          <SheetClose asChild>
            <Link
              href={"/"}
              className="flex items-center gap-1.5 bg-black/50 
          p-1.5 rounded-lg shadow text-sm px-3 py-2 w-fit"
            >
              <PhoneCall className="size-5" />
              <span>Contact</span>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
