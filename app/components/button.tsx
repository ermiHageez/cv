"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils"; // utility to merge classNames

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-md";

    const variants: Record<string, string> = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline:
        "border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950",
      ghost: "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800",
    };

    const sizes: Record<string, string> = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
      icon: "p-2",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";