import { cn } from "@/libs/utils";
import React from "react";

const Tagline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      )}
    >
      {children}
    </p>
  );
};

export default Tagline;
