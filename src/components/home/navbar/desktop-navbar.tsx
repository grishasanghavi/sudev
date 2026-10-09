"use client";
import { Logo } from "@/components/common/Logo";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from "framer-motion";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { NavBarItem } from "./navbar-item";

type Props = {
  navItems: {
    link: string;
    title: string;
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();

  const [showBackground, setShowBackground] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });
  return (
    <div
      className={cn(
        "relative flex w-full justify-between rounded-full bg-transparent px-4 py-2 transition duration-200",
        showBackground && "bg-neutral-600 dark:bg-neutral-900"
      )}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1
            }}
            className="pointer-events-none absolute inset-0 h-full w-full rounded-full"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row items-center gap-5">
        <Logo />
        <ul className="flex flex-row items-center gap-5">
          {navItems.map((item) => (
            <li key={item.title}>
              <NavBarItem href={item.link} target={item.target}>
                {item.title}
              </NavBarItem>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
      </div>
    </div>
  );
};
