import { cn } from "@/lib/utils";

interface BreakerProps {
  className?: string;
}

export const Breaker = ({ className }: BreakerProps) => (
  <div
    className={cn(
      "h-1 w-20 rounded-full bg-neutral-200 dark:bg-neutral-800",
      className
    )}
  />
);
