"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { TbBrandWhatsapp } from "react-icons/tb";

const header = () => {
  const [isScrolled, setisScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 w-full py-4 z-50 transition-all duration-200",
        isScrolled ? "top-0 backdrop-blur-md" : "bg-transparent top-4 blur-none"
      )}
    >
      <div className="m-auto xl:w-[1312px] px-4 flex justify-between">
        <div className="w-22 h-auto">
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={60}
            className="w-full h-full"
          />
        </div>
        <Link
          className={cn(
            "text-white flex-center gap-x-2 border-2 border-white rounded-xl px-5 py-2 transition-all duration-300",
            isScrolled
              ? "bg-[#25d366] border-[#25d366]"
              : "bg-transparent border-white"
          )}
          href="https://wa.me/+995551008057"
          target="_blank"
        >
          <TbBrandWhatsapp
            className={cn(
              " text-3xl",
              isScrolled ? "text-white" : "text-[#25d366]"
            )}
          />
          551 600060
        </Link>
      </div>
    </header>
  );
};

export default header;
