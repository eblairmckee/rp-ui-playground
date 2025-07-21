import { type SlotProps, useSlots } from "@/lib/slot-utils";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Loader } from "lucide-react";
import type { ComponentProps } from "react";
import * as React from "react";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
);

type InputProps = ComponentProps<"input"> & SlotProps;

function Input({ className, type, start, end, loading, renderLoading, ...props }: InputProps) {
  const { paddingClass, startPositionClass, endPositionClass } = useSlots({
    start,
    end,
    loading,
    size: "default", // Input only has one size
  });

  return (
    <div className="relative">
      <input type={type} data-slot="input" className={cn(inputVariants(), paddingClass, className)} {...props} />
      {start && (
        <span className={startPositionClass} data-slot="start">
          {start}
        </span>
      )}
      {(end || loading) && (
        <span className={endPositionClass} data-slot="end">
          {loading ? (renderLoading?.(loading) ?? <Loader size={15} />) : end}
        </span>
      )}
    </div>
  );
}

export { Input };
