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
        "fixed left-0 w-full py-4 z-50 transition-all duration-200 px-4",
        isScrolled ? "top-0 backdrop-blur-md" : "bg-transparent top-4 blur-none"
      )}
    >
      <div className="m-auto w-7xl flex justify-between">
        <Image src="/logo.png" alt="logo" width={80} height={60} />
        <Link
          className="text-white flex-center gap-x-2 border-2 border-white rounded-xl px-5 py-2"
          href="https://wa.me/"
          target="_blank"
        >
          <TbBrandWhatsapp className="text-[#25d366] text-3xl" />
          551 600060
        </Link>
      </div>
    </header>
  );
};

export default header;
