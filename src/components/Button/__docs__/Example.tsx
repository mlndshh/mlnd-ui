import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "small",
  text = "Button",
}) => {
  // Determine container width based on button size
  const containerWidth = size === "large" ? "max-w-md w-full" : "w-auto";

  // Add a descriptive text above the button to show what variant it is
  const variantDescription = `${size} ${primary ? "primary" : "secondary"} button${disabled ? " (disabled)" : ""}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="text-sm text-gray-500 mb-2">{variantDescription}</div>
      <div className={containerWidth}>
        <Button
          size={size}
          text={text}
          disabled={disabled}
          onClick={onClick}
          primary={primary}
        />
      </div>
      <div className="text-xs text-gray-400 mt-3">
        Hover to see color inversion effect
      </div>
    </div>
  );
};

export default Example;
