import { cva } from "class-variance-authority";

/**
 * Reusable slot utilities for components with start/end slot functionality
 */

export type SlotSize = "sm" | "default" | "lg" | "icon" | null | undefined;

/**
 * Generic slot padding variants - handles padding for components with start/end slots
 */
export const slotPaddingVariants = cva("", {
  variants: {
    size: {
      sm: "",
      default: "",
      lg: "",
      icon: "",
    },
    hasStart: {
      true: "",
      false: "",
    },
    hasEnd: {
      true: "",
      false: "",
    },
    hasPrefix: {
      true: "",
      false: "",
    },
    hasSuffix: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // Small size padding - no prefix/suffix
    {
      size: "sm",
      hasStart: false,
      hasEnd: false,
      hasPrefix: false,
      hasSuffix: false,
      class: "px-3",
    },
    {
      size: "sm",
      hasStart: true,
      hasEnd: false,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-7 pr-3",
    },
    {
      size: "sm",
      hasStart: false,
      hasEnd: true,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-3 pr-7",
    },
    {
      size: "sm",
      hasStart: true,
      hasEnd: true,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-7 pr-7",
    },

    // Small size padding - with prefix (no left padding)
    {
      size: "sm",
      hasPrefix: true,
      hasEnd: false,
      hasSuffix: false,
      class: "pr-3",
    },
    {
      size: "sm",
      hasPrefix: true,
      hasEnd: true,
      hasSuffix: false,
      class: "pr-7",
    },

    // Small size padding - with suffix (no right padding)
    {
      size: "sm",
      hasStart: false,
      hasSuffix: true,
      hasPrefix: false,
      class: "pl-3",
    },
    {
      size: "sm",
      hasStart: true,
      hasSuffix: true,
      hasPrefix: false,
      class: "pl-7",
    },

    // Small size padding - with both prefix and suffix (no horizontal padding)
    { size: "sm", hasPrefix: true, hasSuffix: true, class: "" },

    // Default size padding - no prefix/suffix
    {
      size: "default",
      hasStart: false,
      hasEnd: false,
      hasPrefix: false,
      hasSuffix: false,
      class: "px-4",
    },
    {
      size: "default",
      hasStart: true,
      hasEnd: false,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-8 pr-4",
    },
    {
      size: "default",
      hasStart: false,
      hasEnd: true,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-4 pr-8",
    },
    {
      size: "default",
      hasStart: true,
      hasEnd: true,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-8 pr-8",
    },

    // Default size padding - with prefix (no left padding)
    {
      size: "default",
      hasPrefix: true,
      hasEnd: false,
      hasSuffix: false,
      class: "pr-4",
    },
    {
      size: "default",
      hasPrefix: true,
      hasEnd: true,
      hasSuffix: false,
      class: "pr-8",
    },

    // Default size padding - with suffix (no right padding)
    {
      size: "default",
      hasStart: false,
      hasSuffix: true,
      hasPrefix: false,
      class: "pl-4",
    },
    {
      size: "default",
      hasStart: true,
      hasSuffix: true,
      hasPrefix: false,
      class: "pl-8",
    },

    // Default size padding - with both prefix and suffix (no horizontal padding)
    { size: "default", hasPrefix: true, hasSuffix: true, class: "" },

    // Large size padding - no prefix/suffix
    {
      size: "lg",
      hasStart: false,
      hasEnd: false,
      hasPrefix: false,
      hasSuffix: false,
      class: "px-6",
    },
    {
      size: "lg",
      hasStart: true,
      hasEnd: false,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-9 pr-6",
    },
    {
      size: "lg",
      hasStart: false,
      hasEnd: true,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-6 pr-9",
    },
    {
      size: "lg",
      hasStart: true,
      hasEnd: true,
      hasPrefix: false,
      hasSuffix: false,
      class: "pl-9 pr-9",
    },

    // Large size padding - with prefix (no left padding)
    {
      size: "lg",
      hasPrefix: true,
      hasEnd: false,
      hasSuffix: false,
      class: "pr-6",
    },
    {
      size: "lg",
      hasPrefix: true,
      hasEnd: true,
      hasSuffix: false,
      class: "pr-9",
    },

    // Large size padding - with suffix (no right padding)
    {
      size: "lg",
      hasStart: false,
      hasSuffix: true,
      hasPrefix: false,
      class: "pl-6",
    },
    {
      size: "lg",
      hasStart: true,
      hasSuffix: true,
      hasPrefix: false,
      class: "pl-9",
    },

    // Large size padding - with both prefix and suffix (no horizontal padding)
    { size: "lg", hasPrefix: true, hasSuffix: true, class: "" },

    // Icon size padding (typically no padding for square icons)
    { size: "icon", hasStart: false, hasEnd: false, class: "" },
    { size: "icon", hasStart: true, hasEnd: false, class: "" },
    { size: "icon", hasStart: false, hasEnd: true, class: "" },
    { size: "icon", hasStart: true, hasEnd: true, class: "" },
    { size: "icon", hasPrefix: true, class: "" },
    { size: "icon", hasSuffix: true, class: "" },
  ],
  defaultVariants: {
    size: "default",
    hasStart: false,
    hasEnd: false,
    hasPrefix: false,
    hasSuffix: false,
  },
});

/**
 * Generic slot positioning variants - handles absolute positioning of start/end/prefix/suffix elements
 */
export const slotPositionVariants = cva(
  "absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none",
  {
    variants: {
      size: {
        sm: "",
        default: "",
        lg: "",
        icon: "",
      },
      position: {
        start: "",
        end: "",
        prefix: "",
        suffix: "",
      },
    },
    compoundVariants: [
      // Start positioning (absolute positioned)
      { size: "sm", position: "start", class: "left-2" },
      { size: "sm", position: "end", class: "right-2" },
      { size: "default", position: "start", class: "left-2" },
      { size: "default", position: "end", class: "right-2" },
      { size: "lg", position: "start", class: "left-3" },
      { size: "lg", position: "end", class: "right-3" },
      { size: "icon", position: "start", class: "left-2" },
      { size: "icon", position: "end", class: "right-2" },

      // Prefix positioning (flows with content, left side)
      { size: "sm", position: "prefix", class: "left-2" },
      { size: "default", position: "prefix", class: "left-2" },
      { size: "lg", position: "prefix", class: "left-3" },
      { size: "icon", position: "prefix", class: "left-2" },

      // Suffix positioning (flows with content, right side)
      { size: "sm", position: "suffix", class: "right-2" },
      { size: "default", position: "suffix", class: "right-2" },
      { size: "lg", position: "suffix", class: "right-3" },
      { size: "icon", position: "suffix", class: "right-2" },
    ],
    defaultVariants: {
      size: "default",
      position: "start",
    },
  }
);

/**
 * Helper function to create slot-enabled component props
 */
export interface SlotProps {
  start?: React.ReactNode;
  end?: React.ReactNode;
  loading?: boolean;
  renderLoading?: (loading: boolean) => React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

/**
 * Hook to get slot states and classes
 */
export function useSlots({
  start,
  end,
  loading,
  size = "default",
  prefix,
  suffix,
  startWidth,
  endWidth,
}: SlotProps & { size?: SlotSize } & {
  startWidth?: number;
  endWidth?: number;
}) {
  const hasStart = Boolean(start);
  const hasEnd = Boolean(end || loading);
  const hasPrefix = Boolean(prefix);
  const hasSuffix = Boolean(suffix);

  // Determine if we have dynamic widths available
  const hasDynamicStart = hasStart && startWidth;
  const hasDynamicEnd = hasEnd && endWidth;

  // Only use base padding classes when we don't have dynamic widths
  const basePaddingClass =
    hasDynamicStart || hasDynamicEnd
      ? ""
      : slotPaddingVariants({
          size,
          hasStart,
          hasEnd,
          hasPrefix,
          hasSuffix,
        });

  // Calculate dynamic padding styles when width is available
  const getDynamicPaddingStyle = () => {
    const style: React.CSSProperties = {};

    // Handle left padding (start or prefix take priority over static padding)
    if (hasDynamicStart) {
      style.paddingLeft = `${startWidth + 16}px`;
    } else if (hasPrefix) {
      // No left padding for prefix
    } else if (!basePaddingClass) {
      // Use default padding based on size when not using class-based padding
      const defaultLeftPadding = size === "sm" ? 12 : size === "lg" ? 24 : 16; // px-3, px-6, px-4
      style.paddingLeft = `${defaultLeftPadding}px`;
    }

    // Handle right padding (end or suffix take priority over static padding)
    if (hasDynamicEnd) {
      style.paddingRight = `${endWidth + 16}px`;
    } else if (hasSuffix) {
      // No right padding for suffix
    } else if (!basePaddingClass) {
      // Use default padding based on size when not using class-based padding
      const defaultRightPadding = size === "sm" ? 12 : size === "lg" ? 24 : 16; // px-3, px-6, px-4
      style.paddingRight = `${defaultRightPadding}px`;
    }

    return style;
  };

  const startPositionClass = slotPositionVariants({ size, position: "start" });
  const endPositionClass = slotPositionVariants({ size, position: "end" });
  const prefixPositionClass = slotPositionVariants({
    size,
    position: "prefix",
  });
  const suffixPositionClass = slotPositionVariants({
    size,
    position: "suffix",
  });

  return {
    hasStart,
    hasEnd,
    hasPrefix,
    hasSuffix,
    paddingClass: basePaddingClass,
    paddingStyle: getDynamicPaddingStyle(),
    startPositionClass,
    endPositionClass,
    prefixPositionClass,
    suffixPositionClass,
  };
}
