import { cn } from "@/lib/utils";
import React from "react";

const Group = ({
  children,
  className,
  attached,
}: {
  children: React.ReactNode;
  className?: string;
  attached?: boolean;
}) => {
  const content = React.Children.toArray(children)
    .filter((child) => React.isValidElement(child))
    .map((child, index) => {
      if (!attached) return child;

      const isFirst = index === 0;
      const isLast = index === React.Children.count(children) - 1;
      const isMiddle = index > 0 && index < React.Children.count(children) - 1;

      return React.cloneElement(child as React.ReactElement, {
        className: cn(
          child.props.className,
          isFirst && "rounded-r-none",
          isLast && "rounded-l-none",
          isMiddle && "rounded-none",
        ),
        "data-group-position": isFirst ? "first" : isLast ? "last" : isMiddle ? "middle" : undefined,
      });
    });

  return <div className={cn("flex items-end w-full", !attached && "gap-1.5", className)}>{content}</div>;
};

export { Group };
