import { cva, type VariantProps } from "class-variance-authority";
import { Slot as SlotPrimitive } from "radix-ui";
import type { ComponentProps, ReactNode } from "react";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-rp-ring focus-visible:ring-rp-ring/50 focus-visible:ring-[3px] aria-invalid:ring-rp-destructive/20 dark:aria-invalid:ring-rp-destructive/40 aria-invalid:border-rp-destructive",
  {
    variants: {
      variant: {
        default: "bg-rp-primary text-rp-primary-foreground shadow-xs hover:bg-rp-primary/90",
        destructive:
          "bg-rp-destructive text-white shadow-xs hover:bg-rp-destructive/90 focus-visible:ring-rp-destructive/20 dark:focus-visible:ring-rp-destructive/40 dark:bg-rp-destructive/60",
        outline:
          "border bg-rp-background shadow-xs hover:bg-rp-accent hover:text-rp-accent-foreground dark:bg-rp-input/30 dark:border-rp-input dark:hover:bg-rp-input/50",
        secondary: "bg-rp-secondary text-rp-secondary-foreground shadow-xs hover:bg-rp-secondary/80",
        ghost: "hover:bg-rp-accent hover:text-rp-accent-foreground dark:hover:bg-rp-accent/50",
        link: "text-rp-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & {
    start?: ReactNode;
    end?: ReactNode;
    loading?: boolean;
    renderLoading?: (loading: boolean) => ReactNode;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  start,
  end,
  loading,
  renderLoading,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? SlotPrimitive.Slot : "button";
  const hasStart = Boolean(start);
  const hasEnd = Boolean(end || loading);

  // Calculate padding adjustments based on presence of start/end elements
  const paddingClass = cn(
    hasStart && "pl-3", // Add extra left padding when start element is present
    hasEnd && "pr-3", // Add extra right padding when end element is present
  );

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        "relative", // Make button itself the positioning context
        paddingClass,
        className,
      )}
      {...props}
    >
      {start && (
        <span className="absolute left-1.5 top-1/2 -translate-y-1/2 z-10 pointer-events-none" data-slot="start">
          {start}
        </span>
      )}
      {children}
      {(end || loading) && (
        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 z-10 pointer-events-none" data-slot="end">
          {loading ? (renderLoading?.(loading) ?? loading) : end}
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
