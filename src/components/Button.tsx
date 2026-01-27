import React from "react";

export const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}: any) => {
  const baseStyle =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-brand-blue text-white hover:bg-brand-darkBlue shadow-lg hover:shadow-brand-blue/30",
    donate:
      "bg-brand-green text-white hover:bg-[#007a99] shadow-lg hover:shadow-brand-green/30 text-lg",
    outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5",
    ghost: "text-gray-600 hover:text-brand-blue hover:bg-gray-100",
    white: "bg-white text-brand-blue hover:bg-gray-100 shadow-lg",
    salmon:
      "bg-[#E98888] text-white hover:bg-[#D67777] shadow-lg shadow-[#E98888]/30",
  };
  return (
    <button
      className={`${baseStyle} ${variants[variant as keyof typeof variants] || variants.primary} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
