import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn-shine inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[var(--shadow-sm)] hover:bg-solar-blue hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
        accent:
          "bg-accent text-accent-foreground shadow-[var(--shadow-glow)] hover:bg-solar-gold hover:-translate-y-0.5",
        outline:
          "border border-primary/20 bg-white/80 text-primary backdrop-blur-sm hover:border-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-solar-mist hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-muted hover:text-solar-navy",
        link: "rounded-md text-primary underline-offset-4 hover:underline",
        white:
          "bg-white text-solar-navy shadow-[var(--shadow-sm)] hover:bg-solar-cream hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]",
        soft:
          "bg-solar-green-soft text-solar-green hover:bg-solar-green hover:text-white",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-[3.35rem] min-h-[3.35rem] rounded-2xl px-8 text-[0.95rem]",
        icon: "h-11 w-11 rounded-xl",
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
