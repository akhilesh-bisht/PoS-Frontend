import React, { lazy, Suspense } from "react";

// Lazy loading Card component
const Card = React.memo(
  ({ title, value, description, icon, indicator, indicatorColor }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-600 text-xs md:text-sm font-medium">
          {title}
        </h3>
        <span className={`text-${indicatorColor}-500 text-xs`}>
          {indicator}
        </span>
      </div>
      <p className="text-base md:text-2xl font-semibold mt-2">{value}</p>
      <div className="mt-4 text-[10px] md:text-sm text-gray-500">
        <span className="flex items-center w-auto ">
          {icon}
          {description}
        </span>
      </div>
    </div>
  )
);

const MemoizedCard = React.memo(Card);

export default MemoizedCard;
