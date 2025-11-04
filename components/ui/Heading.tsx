"use client";
import { cn } from "@/libs/utils";
import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-2xl md:text-4xl font-les-regular font-bold mb-4 text-foreground"
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
