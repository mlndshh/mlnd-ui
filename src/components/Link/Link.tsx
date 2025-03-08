import React, { ReactNode } from "react";

export type LinkProps = {
  /**
   * The URL the link points to
   */
  href: string;
  /**
   * The content of the link
   */
  children: ReactNode;
  /**
   * Additional CSS classes to apply to the link
   */
  className?: string;
  /**
   * Target attribute for the anchor tag
   */
  target?: string;
  /**
   * Rel attribute for the anchor tag
   */
  rel?: string;
};

/**
 * Link component that renders an anchor tag with customizable styling
 * By default, it displays an underline that disappears on hover, and changes text color to gray
 */
const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = "",
  target,
  rel,
  ...props
}) => {
  // Default styling for the link - underlined with color transition
  const baseClasses =
    "underline decoration-1 transition-all duration-200 hover:no-underline hover:text-gray-500";

  // Combine base classes with any custom classes
  const combinedClassName = `${baseClasses} ${className}`;

  // Automatically set rel="noopener noreferrer" for security when target="_blank"
  const safeRel = target === "_blank" && !rel ? "noopener noreferrer" : rel;

  return (
    <a
      href={href}
      className={combinedClassName}
      target={target}
      rel={safeRel}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
