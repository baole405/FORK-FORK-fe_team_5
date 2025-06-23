"use client";

import { Button } from "@/components/Shadcn/ui/button";
import { cn } from "@/utils/utils";
import * as React from "react";

type SortDirection = "asc" | "desc" | "none";

interface SortButtonProps extends Omit<React.ComponentProps<typeof Button>, "onChange"> {
  onChange?: (direction: SortDirection) => void;
  direction?: SortDirection;
  label?: string;
}

// Custom Sort Icon với kích thước lớn hơn
const CustomSortIcon = ({ direction, className }: { direction?: SortDirection; className?: string }) => {
  const baseSize = 6; // Tăng kích thước lên 1.5 lần so với size-4 (4px)
  const opacityUp = direction === "desc" ? 0.3 : 1;
  const opacityDown = direction === "asc" ? 0.3 : 1;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={className} width={baseSize} height={baseSize} fill="currentColor">
      <path d="M5 6 L8 2 L11 6 Z" opacity={opacityUp} />
      <path d="M5 10 L8 14 L11 10 Z" opacity={opacityDown} />
    </svg>
  );
};

// Tách function để render icon
const renderSortIcon = (direction: SortDirection) => {
  return <CustomSortIcon direction={direction} className="size-6" />; // Tăng size-4 thành size-6
};

// Tách function để get aria label
const getSortAriaLabel = (direction: SortDirection) => {
  if (direction === "none") return "Sort";
  if (direction === "asc") return "Sort ascending";
  return "Sort descending";
};

// Tách function để tính next direction
const getNextDirection = (currentDirection: SortDirection): SortDirection => {
  if (currentDirection === "none") return "asc";
  if (currentDirection === "asc") return "desc";
  return "none";
};

export function SortButton({ onChange, direction: externalDirection, label, className, ...props }: SortButtonProps) {
  const [internalDirection, setInternalDirection] = React.useState<SortDirection>("none");

  // Use external direction if provided, otherwise use internal state
  const direction = externalDirection !== undefined ? externalDirection : internalDirection;

  const handleClick = () => {
    const newDirection = getNextDirection(direction);
    setInternalDirection(newDirection);
    onChange?.(newDirection);
  };

  return (
    <Button variant="ghost" size={label ? "sm" : "icon"} className={cn(label ? "gap-1" : "size-8", className)} onClick={handleClick} {...props}>
      {label && <span>{label}</span>}
      {renderSortIcon(direction)}
      <span className="sr-only">{getSortAriaLabel(direction)}</span>
    </Button>
  );
}
