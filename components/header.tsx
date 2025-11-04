"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { cn } from "@/libs/utils";

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
      <div className="m-auto w-7xl flex justify-between">
        <Image src="/logo.png" alt="logo" width={80} height={60} />
        <Button className="text-white">551 600060</Button>
      </div>
    </header>
  );
};

export default header;
