import React from "react";

type TitleVariant = "primary" | "secondary";

interface TitleProps {
  variant: TitleVariant;
  children: React.ReactNode;
}

export default function Title({ variant, children }: TitleProps) {
  const variants: Record<TitleVariant, string> = {
    primary: "text-2xl md:text-5xl font-bold mb-4",
    secondary: "text-xl md:text-4xl font-bold"
  };

  return (
    <h1 className={variants[variant]}>
      {children}
    </h1>
  );
}