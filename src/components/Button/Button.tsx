import React from "react";
import { Button as ButtonRAC } from "react-aria-components";

export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  text,
  primary = false,
  disabled = false,
  size = "medium",
  ...props
}) => {
  // Base classes for all buttons
  const baseClasses =
    "rounded-md border text-center transition-all focus:outline-none duration-200";

  // Size-specific classes
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-sm",
    large: "py-3 px-6 text-base font-medium",
  };

  // Styling based on primary vs secondary
  const styleClasses = primary
    ? "bg-slate-800 border-transparent text-white shadow-md focus:bg-gray-100 focus:text-gray-800 focus:border-gray-100 active:bg-slate-700 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-100 active:shadow-none"
    : "bg-gray-100 border-gray-100 text-gray-800 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-800 focus:bg-gray-800 focus:text-gray-100 focus:border-gray-800 active:bg-gray-800 active:text-gray-100 active:border-gray-800";

  // Add width class separately since only large should be full width
  const widthClass = size === "large" ? "w-full" : "";

  // Disabled styling
  const disabledClasses = disabled
    ? "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    : "";

  const className = `${baseClasses} ${sizeClasses[size]} ${styleClasses} ${disabledClasses} ${widthClass}`;

  return (
    <ButtonRAC className={className} isDisabled={disabled} {...props}>
      {text}
    </ButtonRAC>
  );
};

export default Button;
