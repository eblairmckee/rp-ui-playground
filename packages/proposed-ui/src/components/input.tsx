import { GroupContextProvider } from "@/lib/group-context";
import { type SlotProps, useSlots } from "@/lib/slot-utils";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Loader } from "lucide-react";
import type { ComponentProps } from "react";
import * as React from "react";
import { Label } from "./label";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      hasPrefix: {
        true: "rounded-r-md rounded-l-none",
        false: "rounded-l-md",
      },
      hasSuffix: {
        true: "rounded-l-md rounded-r-none",
        false: "rounded-r-md",
      },
    },
    compoundVariants: [
      {
        hasPrefix: false,
        hasSuffix: false,
        class: "rounded-md",
      },
      {
        hasPrefix: true,
        hasSuffix: true,
        class: "rounded-none",
      },
    ],
    defaultVariants: {
      hasPrefix: false,
      hasSuffix: false,
    },
  }
);

type InputProps = ComponentProps<"input"> &
  SlotProps & {
    label?: React.ReactNode;
    labelClassName?: string;
    labelWrapperClassName?: string;
    inputWrapperClassName?: string;
  };

function Input({
  className,
  type,
  start,
  end,
  loading,
  renderLoading,
  prefix,
  suffix,
  label,
  labelClassName,
  labelWrapperClassName,
  inputWrapperClassName,
  ...props
}: InputProps) {
  const startRef = React.useRef<HTMLSpanElement>(null);
  const endRef = React.useRef<HTMLSpanElement>(null);
  const startWidth = startRef.current?.offsetWidth;
  const endWidth = endRef.current?.offsetWidth;

  const {
    paddingClass,
    paddingStyle,
    startPositionClass,
    endPositionClass,
    hasPrefix,
    hasSuffix,
  } = useSlots({
    start,
    end,
    loading,
    size: "default", // Input only has one size,
    prefix,
    suffix,
    startWidth,
    endWidth,
  });

  const inputElement = (
    <div className={cn("relative flex items-center", inputWrapperClassName)}>
      {prefix && (
        <GroupContextProvider value={{ isPrefix: true }}>
          {prefix}
        </GroupContextProvider>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({ hasPrefix, hasSuffix }),
          paddingClass,
          className
        )}
        style={paddingStyle}
        {...props}
      />
      {start && (
        <span className={startPositionClass} data-slot="start" ref={startRef}>
          {start}
        </span>
      )}
      {(end || loading) && (
        <span className={endPositionClass} data-slot="end" ref={endRef}>
          {loading ? renderLoading?.(loading) ?? <Loader size={15} /> : end}
        </span>
      )}
      {suffix && (
        <GroupContextProvider value={{ isSuffix: true }}>
          {suffix}
        </GroupContextProvider>
      )}
    </div>
  );

  return label ? (
    <div className={cn("flex flex-col gap-1.5", labelWrapperClassName)}>
      {<Label className={labelClassName}>{label}</Label>}
      {inputElement}
    </div>
  ) : (
    inputElement
  );
}

export { Input };
