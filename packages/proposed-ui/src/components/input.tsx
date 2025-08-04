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
  children,
  ...props
}: InputProps) {
  const startRef = React.useRef<HTMLSpanElement>(null);
  const endRef = React.useRef<HTMLSpanElement>(null);
  const [startWidth, setStartWidth] = React.useState<number | undefined>();
  const [endWidth, setEndWidth] = React.useState<number | undefined>();

  React.useEffect(() => {
    setStartWidth(startRef.current?.offsetWidth);
    setEndWidth(endRef.current?.offsetWidth);
  }, [startRef.current, endRef.current]);

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
    <div className={cn("flex items-center w-full", inputWrapperClassName)}>
      {prefix && (
        <GroupContextProvider value={{ isPrefix: true }}>
          {prefix}
        </GroupContextProvider>
      )}
      <div className="relative flex items-center w-full">
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
        {children}
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
      </div>
      {suffix && (
        <GroupContextProvider value={{ isSuffix: true }}>
          {suffix}
        </GroupContextProvider>
      )}
    </div>
  );

  return label ? (
    <div className={cn("flex flex-col gap-1.5 w-full", labelWrapperClassName)}>
      {<Label className={labelClassName}>{label}</Label>}
      {inputElement}
    </div>
  ) : (
    inputElement
  );
}

const InputStart = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <span className={cn("absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none left-2", className)}>{children}</span>;
};

export { Input, InputStart };



{/* <Input start={<Search className="size-4" />} end={<X className="size-4" />} /> */}

{/* <Input value="Hello">
  <InputStart >
    <Search className="size-4" />
  </InputStart>
  <InputEnd>
    <X className="size-4" />
  </InputEnd> */}
// </Input>