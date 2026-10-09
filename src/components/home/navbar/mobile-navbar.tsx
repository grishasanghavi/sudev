"use client";
import { Logo } from "@/components/common/Logo";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiMiniBars2, HiXMark } from "react-icons/hi2";
import { ModeToggle } from "./mode-toggle";

export const MobileNavbar = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

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
        "flex w-full items-center justify-between rounded-full bg-transparent px-2.5 py-3 transition duration-200",
        showBackground && "bg-neutral-600 dark:bg-neutral-900"
      )}
    >
      <Logo />
      <button onClick={() => setOpen(!open)}>
        <HiMiniBars2 className="h-6 w-6 text-white" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-start justify-start space-y-10 bg-white pt-5 text-xl text-zinc-600 transition duration-200 hover:text-zinc-800 dark:bg-black">
          <div className="flex w-full items-center justify-between px-5">
            <Logo />
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <button onClick={() => setOpen(!open)}>
                <HiXMark className="h-8 w-8 text-black dark:text-white" />
              </button>
            </div>
          </div>
          <ul className="flex flex-col items-start justify-start gap-[14px] px-8 uppercase">
            {navItems.map((navItem: any, idx: number) => (
              <li key={`nav-item-${idx}`}>
                {navItem.children && navItem.children.length > 0 ? (
                  <>
                    {navItem.children.map((childNavItem: any, idx: number) => (
                      <Link
                        key={`link-${idx}`}
                        href={childNavItem.link}
                        onClick={() => setOpen(false)}
                        className="relative max-w-[15rem] text-left text-2xl"
                      >
                        <span className="block text-black">
                          {childNavItem.title}
                        </span>
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    onClick={() => setOpen(false)}
                    className="relative"
                  >
                    <span className="block text-[26px] text-black dark:text-white">
                      {navItem.title}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
