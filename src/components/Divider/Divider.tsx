import React from "react";

export type DividerProps = {
  size?: "small" | "medium" | "large";
};

const Divider: React.FC<DividerProps> = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "h-px",
    medium: "h-1",
    large: "h-2",
  };

  return (
    <div className={`w-full ${sizeClasses[size]} rounded-md bg-gray-400`} />
  );
};

export default Divider;
