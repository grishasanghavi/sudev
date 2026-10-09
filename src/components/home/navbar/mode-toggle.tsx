"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import * as React from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  if (isClient)
    return (
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-neutral-800 outline-none transition-colors hover:bg-neutral-100 hover:text-neutral-800 focus:outline-none focus:ring-0 active:outline-none active:ring-0 dark:text-neutral-100 hover:dark:text-neutral-800 lg:text-white"
      >
        {theme === "light" && (
          <motion.div
            key={theme}
            initial={{
              x: 40,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <HiMoon className="h-5 w-5 flex-shrink-0" />
          </motion.div>
        )}

        {theme === "dark" && (
          <motion.div
            key={theme}
            initial={{
              x: 40,
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 1
            }}
            transition={{
              ease: "easeOut",
              duration: 0.3
            }}
          >
            <HiSun className="h-5 w-5 flex-shrink-0" />
          </motion.div>
        )}

        <span className="sr-only">Toggle theme</span>
      </button>
    );
}
