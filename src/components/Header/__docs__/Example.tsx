import React, { FC } from "react";
import Header, { HeaderProps } from "../Header";

const Example: FC<HeaderProps> = ({
  level = 1,
  children = "Heading Text",
  className = "",
}) => {
  // Describe the current header level
  const levelDescription = `Heading level ${level} (h${level})`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
        width: "100%",
      }}
    >
      <div className="text-sm text-gray-500 mb-4">{levelDescription}</div>
      <div className="w-full border-b pb-3 mb-3">
        <Header level={level} className={className}>
          {children}
        </Header>
      </div>
      <div className="text-xs text-gray-400 mt-1">
        Font size and spacing scale with heading level
      </div>
    </div>
  );
};

export default Example;
