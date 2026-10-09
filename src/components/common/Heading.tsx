"use client";
import { motion } from "framer-motion";

export default function SectionHead({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <Header>
        <h2 className="text-bold mx-auto w-fit text-center text-4xl font-bold uppercase tracking-tight text-neutral-800 dark:text-neutral-100 md:text-5xl">
          {title}
        </h2>
      </Header>
      {description && (
        <p className="mx-auto mt-4 max-w-lg text-center text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </>
  );
}
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto flex w-fit items-center justify-center p-4">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0
        }}
        whileInView={{
          width: "100%",
          height: "100%"
        }}
        style={{
          transformOrigin: "top-left"
        }}
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
        className="absolute inset-0 h-full w-full border border-neutral-200 dark:border-neutral-800"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -left-1 -top-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -right-1 -top-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 bg-neutral-200 dark:bg-neutral-800"
        />
      </motion.div>
      {children}
    </div>
  );
};
