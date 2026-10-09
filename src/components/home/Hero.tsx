"use client";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";
export default function Hero({
  gradientFade = true
}: {
  gradientFade?: boolean;
}) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center p-10"
    >
      <div className="absolute inset-0 h-full w-full bg-black"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 0.3]
        }}
        transition={{
          duration: 2
        }}
        className="absolute inset-0 h-full w-full"
      >
        <BlurImage
          src="/hero-bg.avif"
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full select-none object-cover",
            gradientFade &&
              "[mask-image:radial-gradient(200px_at_center,transparent,black)]"
          )}
          width={1000}
          height={1000}
          alt="Sudev Industries Hero Background"
        />
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black to-transparent"></div>
      </motion.div>
      <h2 className="relative z-10 max-w-5xl text-balance bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-center text-4xl font-bold uppercase tracking-tight text-transparent md:text-7xl md:leading-tight">
        Build and Protect Better with Sudev Industries
      </h2>
      <p className="relative z-10 mt-6 max-w-2xl text-center text-lg text-neutral-200 md:text-2xl">
        Leading manufacturer of premium rolling shutters, steel windows, and
        custom fabrication services in Nagpur. Quality products at affordable
        prices.
      </p>

      <div className="z-10 mt-6 flex flex-col gap-4 sm:flex-row">
        <Link href={"/products"} className="block">
          <InteractiveHoverButton>View Products</InteractiveHoverButton>
        </Link>
      </div>
    </section>
  );
}

export const Button = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "simple";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "no-underline flex space-x-2 group cursor-pointer relative border-none transition duration-200 rounded-full p-px text-xs font-semibold leading-6 px-4 py-2";

  const variantStyles = {
    primary:
      "w-full sm:w-44 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 bg-black  text-white",
    secondary:
      "relative z-20 text-sm bg-white  text-black  w-full sm:w-44 h-10  flex items-center justify-center rounded-lg hover:-translate-y-0.5 ",
    simple:
      "relative z-20 text-sm bg-transparent  text-white  w-full sm:w-44 h-10  flex items-center justify-center rounded-lg hover:-translate-y-0.5 "
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

import Image from "next/image";
import Link from "next/link";

export const BlurImage = (props: React.ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true);

  const { src, width, height, alt, layout, ...rest } = props;
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "opacity-0" : "opacity-100",
        props.className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src as string}
      layout={layout}
      alt={alt ? alt : "Avatar from Sudev Industries"}
      {...rest}
    />
  );
};
