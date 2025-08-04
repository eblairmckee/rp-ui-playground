import { useGroupContext } from "@/lib/group-context";
import { Slot as SlotPrimitive } from "radix-ui";
import { type SlotProps, useSlots } from "@/lib/slot-utils";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

const buttonVariants = cva(
  "flex justify-center text-center items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-rp-ring focus-visible:ring-rp-ring/50 focus-visible:ring-[3px] aria-invalid:ring-rp-destructive/20 dark:aria-invalid:ring-rp-destructive/40 aria-invalid:border-rp-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-rp-primary text-rp-primary-foreground shadow-xs hover:bg-rp-primary/90",
        destructive:
          "bg-rp-destructive text-white shadow-xs hover:bg-rp-destructive/90 focus-visible:ring-rp-destructive/20 dark:focus-visible:ring-rp-destructive/40 dark:bg-rp-destructive/60",
        outline:
          "border bg-rp-background shadow-xs hover:bg-rp-accent hover:text-rp-accent-foreground dark:bg-rp-input/30 dark:border-rp-input dark:hover:bg-rp-input/50",
        secondary:
          "bg-rp-secondary text-rp-secondary-foreground shadow-xs hover:bg-rp-secondary/80",
        ghost:
          "hover:bg-rp-accent hover:text-rp-accent-foreground dark:hover:bg-rp-accent/50",
        link: "text-rp-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 py-2",
        sm: "h-8 gap-1.5",
        lg: "h-10",
        icon: "size-9",
      },
      isPrefix: {
        true: "rounded-l-md rounded-r-none",
        false: "rounded-r-md",
      },
      isSuffix: {
        true: "rounded-r-md rounded-l-none",
        false: "rounded-l-md",
      },
    },
    compoundVariants: [
      {
        isPrefix: false,
        isSuffix: false,
        class: "rounded-md",
      },
      {
        isPrefix: true,
        isSuffix: true,
        class: "rounded-none",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      isPrefix: false,
      isSuffix: false,
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  } & SlotProps;

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
  const { isPrefix, isSuffix } = useGroupContext();
  const Comp = asChild ? SlotPrimitive.Slot : "button";
  const { paddingClass, startPositionClass, endPositionClass } = useSlots({
    start,
    end,
    loading,
    size,
  });

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, isPrefix, isSuffix }),
        paddingClass,
        "relative",
        className
      )}
      {...props}
    >
      {start && (
        <span className={startPositionClass} data-slot="start">
          {start}
        </span>
      )}
      {children}
      {(end || loading) && (
        <span className={endPositionClass} data-slot="end">
          {loading ? renderLoading?.(loading) ?? loading : end}
        </span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
