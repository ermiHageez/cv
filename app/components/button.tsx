"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-xl disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  default:
    "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5",
  outline:
    "border border-border text-foreground hover:bg-white/[0.03] hover:border-white/10",
  ghost:
    "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]",
  glass:
    "glass hover:glass-hover text-foreground",
};

const sizes: Record<string, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
  icon: "p-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
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