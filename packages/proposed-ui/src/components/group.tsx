import { cn } from "@/lib/utils";
import React from "react";

const Group = ({
  children,
  className,
  attached,
  prefix,
  suffix,
}: {
  children: React.ReactNode;
  className?: string;
  attached?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}) => {
  const content = React.Children.toArray(children)
    .filter((child) => React.isValidElement(child))
    .map((child, index) => {
      if (!attached) return child;

      const isFirst = index === 0;
      const isLast = index === React.Children.count(children) - 1;

      return React.cloneElement(child as React.ReactElement, {
        className: cn(
          child.props.className,
          isFirst && "rounded-r-none",
          isLast && "rounded-l-none"
        ),
      });
    });

  return (
    <div className={cn("flex items-end gap-1.5 w-full", className)}>
      {prefix}
      <div className={cn("flex items-center w-full", !attached && "gap-1.5")}>
        {content}
      </div>
      {suffix}
    </div>
  );
};

export { Group };
