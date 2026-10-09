"use client";
import { NAV_LINKS } from "@/constants/NavLink";
import { motion } from "framer-motion";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";

export function NavBar() {
  return (
    <motion.nav
      initial={{
        y: -80
      }}
      animate={{
        y: 0
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8
      }}
      className="fixed inset-x-0 top-4 z-50 mx-auto w-[95%] max-w-6xl lg:w-full"
    >
      <div className="hidden w-full lg:block">
        <DesktopNavbar navItems={NAV_LINKS} />
      </div>
      <div className="flex h-full w-full items-center lg:hidden">
        <MobileNavbar navItems={NAV_LINKS} />
      </div>
    </motion.nav>
  );
}

{
  /* <div className="hidden md:block ">
        <DesktopNavbar />
      </div>
      <div className="flex h-full w-full items-center md:hidden ">
        <MobileNavbar navItems={navItems} />
      </div> */
}
