import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold"
      aria-label="Sudev Industries - Home"
    >
      <Image
        src="/sudev-logo.svg"
        alt="Sudev Industries - Premium Steel Products & Fabrication Services in Nagpur"
        width={32}
        height={32}
        className="h-8 w-auto"
        priority
        title="Sudev Industries - Leading Manufacturer of Rolling Shutters & Steel Windows"
      />
    </Link>
  );
};
