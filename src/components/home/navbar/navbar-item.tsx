"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  active?: boolean;
  className?: string;
  target?: "_blank";
};

export function NavBarItem({ children, href, target, className }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium uppercase leading-[110%] text-neutral-100 transition-colors duration-200 hover:bg-neutral-100 hover:text-black",
        className
      )}
      target={target}
    >
      {children}
    </Link>
  );
}
