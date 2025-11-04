import { cn } from "@/libs/utils";
import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "border border-gray-500 rounded-lg px-4 py-2 cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
