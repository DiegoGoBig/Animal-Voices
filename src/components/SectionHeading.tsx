import React from "react";

export const SectionHeading = ({ title, subtitle, centered = true }: any) => (
  <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div
      className={`h-1 w-20 bg-brand-green mt-4 rounded-full ${centered ? "mx-auto" : ""}`}
    ></div>
  </div>
);
