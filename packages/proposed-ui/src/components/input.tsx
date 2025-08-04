import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { createContext, useEffect, useState, type ComponentProps } from "react";
import * as React from "react";

type InputProps = {
  children: React.ReactNode;
  loading?: boolean;
  renderLoading?: (loading: boolean) => React.ReactNode;
  "data-group-position"?: "first" | "last" | "middle" | undefined;
  className?: string;
};

const inputEndClassNames = "absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none right-2";

const InputContext = createContext<{
  setStartWidth: (width: number) => void;
  setEndWidth: (width: number) => void;
  startWidth: number | undefined;
  endWidth: number | undefined;
  loading: boolean;
  renderLoading: ((loading: boolean) => React.ReactNode) | undefined;
  groupPosition: "first" | "last" | "middle" | undefined;
}>({
  setStartWidth: () => {},
  setEndWidth: () => {},
  startWidth: undefined,
  endWidth: undefined,
  loading: false,
  renderLoading: () => null,
  groupPosition: undefined,
});

const useInputContext = () => {
  const context = React.useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within an InputContextProvider");
  }
  return context;
};

function InputRoot({
  loading = false,
  renderLoading,
  children,
  "data-group-position": groupPosition,
  className,
}: InputProps) {
  const [startWidth, setStartWidth] = useState<number | undefined>();
  const [endWidth, setEndWidth] = useState<number | undefined>();

  return (
    <InputContext.Provider
      value={{
        startWidth,
        setStartWidth,
        endWidth,
        setEndWidth,
        loading,
        renderLoading,
        groupPosition,
      }}
    >
      <div className={cn("flex", className)}>{children}</div>
    </InputContext.Provider>
  );
}

const Input = ({ children, type, className, ...props }: ComponentProps<"input">) => {
  const { startWidth, endWidth, loading, groupPosition, renderLoading } = useInputContext();

  return (
    <div className="flex items-center relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "rounded-md file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 border bg-transparent py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          groupPosition === "first"
            ? "rounded-r-none"
            : groupPosition === "last"
              ? "rounded-l-none"
              : groupPosition === "middle"
                ? "rounded-none"
                : "rounded-md",
          "px-3",
          className,
        )}
        style={{
          paddingLeft: startWidth ? startWidth + 16 : undefined,
          paddingRight: endWidth ? endWidth + 16 : undefined,
        }}
        {...props}
      />
      {children}
      {loading ? (
        <div className={inputEndClassNames}>{renderLoading?.(loading) ?? <Loader size={15} />}</div>
      ) : (
        children
      )}
    </div>
  );
};

const InputStart = ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
  const { setStartWidth } = useInputContext();
  const startRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setStartWidth(startRef.current?.offsetWidth ?? 0);
  }, [setStartWidth]);

  return (
    <span
      className={cn("absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none left-2", className)}
      ref={startRef}
      {...props}
    >
      {children}
    </span>
  );
};

const InputEnd = ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
  const { setEndWidth, loading } = useInputContext();
  const endRef = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setEndWidth(endRef.current?.offsetWidth ?? 0);
  }, [setEndWidth]);

  if (loading) return null;
  return (
    <span className={cn(inputEndClassNames, className)} ref={endRef} {...props}>
      {children}
    </span>
  );
};

export { InputRoot, Input, InputStart, InputEnd };
