import React from "react";
import Divider, { DividerProps } from "../Divider";

const Example: React.FC<DividerProps> = ({ size = "medium" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-sm text-gray-500 mb-2">{size} divider</div>
      <Divider size={size} />
    </div>
  );
};

export default Example;
