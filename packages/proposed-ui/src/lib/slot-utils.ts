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
  },
  compoundVariants: [
    // Small size padding
    { size: "sm", hasStart: false, hasEnd: false, class: "px-3" },
    { size: "sm", hasStart: true, hasEnd: false, class: "pl-7 pr-3" },
    { size: "sm", hasStart: false, hasEnd: true, class: "pl-3 pr-7" },
    { size: "sm", hasStart: true, hasEnd: true, class: "pl-7 pr-7" },
    
    // Default size padding
    { size: "default", hasStart: false, hasEnd: false, class: "px-4" },
    { size: "default", hasStart: true, hasEnd: false, class: "pl-8 pr-4" },
    { size: "default", hasStart: false, hasEnd: true, class: "pl-4 pr-8" },
    { size: "default", hasStart: true, hasEnd: true, class: "pl-8 pr-8" },
    
    // Large size padding
    { size: "lg", hasStart: false, hasEnd: false, class: "px-6" },
    { size: "lg", hasStart: true, hasEnd: false, class: "pl-9 pr-6" },
    { size: "lg", hasStart: false, hasEnd: true, class: "pl-6 pr-9" },
    { size: "lg", hasStart: true, hasEnd: true, class: "pl-9 pr-9" },
    
    // Icon size padding (typically no padding for square icons)
    { size: "icon", hasStart: false, hasEnd: false, class: "" },
    { size: "icon", hasStart: true, hasEnd: false, class: "" },
    { size: "icon", hasStart: false, hasEnd: true, class: "" },
    { size: "icon", hasStart: true, hasEnd: true, class: "" },
  ],
  defaultVariants: {
    size: "default",
    hasStart: false,
    hasEnd: false,
  },
});

/**
 * Generic slot positioning variants - handles absolute positioning of start/end elements
 */
export const slotPositionVariants = cva("absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none", {
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
    },
  },
  compoundVariants: [
    { size: "sm", position: "start", class: "left-2" },
    { size: "sm", position: "end", class: "right-2" },
    { size: "default", position: "start", class: "left-3" },
    { size: "default", position: "end", class: "right-3" },
    { size: "lg", position: "start", class: "left-3" },
    { size: "lg", position: "end", class: "right-3" },
    { size: "icon", position: "start", class: "left-2" },
    { size: "icon", position: "end", class: "right-2" },
  ],
  defaultVariants: {
    size: "default",
    position: "start",
  },
});

/**
 * Helper function to create slot-enabled component props
 */
export interface SlotProps {
  start?: React.ReactNode;
  end?: React.ReactNode;
  loading?: boolean;
  renderLoading?: (loading: boolean) => React.ReactNode;
}

/**
 * Hook to get slot states and classes
 */
export function useSlots({
  start,
  end,
  loading,
  size = "default",
}: SlotProps & { size?: SlotSize }) {
  const hasStart = Boolean(start);
  const hasEnd = Boolean(end || loading);

  const paddingClass = slotPaddingVariants({ size, hasStart, hasEnd });
  const startPositionClass = slotPositionVariants({ size, position: "start" });
  const endPositionClass = slotPositionVariants({ size, position: "end" });

  return {
    hasStart,
    hasEnd,
    paddingClass,
    startPositionClass,
    endPositionClass,
  };
}