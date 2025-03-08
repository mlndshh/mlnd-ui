import React, { ReactNode } from "react";

export type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeaderProps = {
  /**
   * The heading level (1-6) corresponding to h1-h6 HTML elements
   */
  level: HeaderLevel;
  /**
   * The content of the header
   */
  children: ReactNode;
  /**
   * Additional CSS classes to apply to the header
   */
  className?: string;
};

/**
 * Header component that renders h1-h6 elements based on the level prop
 */
const Header: React.FC<HeaderProps> = ({
  level = 1,
  children,
  className = "",
  ...props
}) => {
  // Base styling for all header levels
  const baseClasses = "font-bold";

  // Size-specific classes based on header level
  const sizeClasses = {
    1: "text-4xl mb-6",
    2: "text-3xl mb-5",
    3: "text-2xl mb-4",
    4: "text-xl mb-3",
    5: "text-lg mb-2",
    6: "text-base mb-2",
  };

  const combinedClassName = `${baseClasses} ${sizeClasses[level]} ${className}`;

  // Dynamically render the appropriate heading level
  switch (level) {
    case 1:
      return (
        <h1 className={combinedClassName} {...props}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className={combinedClassName} {...props}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className={combinedClassName} {...props}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className={combinedClassName} {...props}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className={combinedClassName} {...props}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className={combinedClassName} {...props}>
          {children}
        </h6>
      );
    default:
      return (
        <h1 className={combinedClassName} {...props}>
          {children}
        </h1>
      );
  }
};

export default Header;
