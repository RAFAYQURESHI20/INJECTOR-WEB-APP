import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display uppercase tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(160_100%_50%/0.5)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(160_100%_50%/0.3)]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-[0_0_20px_hsl(200_100%_50%/0.5)]",
        ghost: 
          "hover:bg-primary/10 hover:text-primary",
        link: 
          "text-primary underline-offset-4 hover:underline",
        cyber:
          "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-[0_0_30px_hsl(160_100%_50%/0.6)] hover:scale-105 hover-lift relative overflow-hidden animate-shimmer bg-[length:200%_100%]",
        glow:
          "bg-transparent border-2 border-primary text-primary relative overflow-hidden before:absolute before:inset-0 before:bg-primary/20 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300 hover:shadow-[0_0_25px_hsl(160_100%_50%/0.4)] hover-tilt",
        magnetic:
          "relative overflow-hidden transition-all duration-300 hover-glow magnetic cursor-pointer",
        holographic:
          "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground relative overflow-hidden animate-gradient-x bg-[length:400%_400%] hover:shadow-[0_0_40px_hsl(280_100%_60%/0.5)]",
        morphing:
          "relative overflow-hidden bg-card hover:animate-morph border border-border/50 hover:border-primary/50 transition-all duration-500 hover-glow",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
