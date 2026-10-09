import SectionHead from "@/components/common/Heading";
import { Products } from "@/constants/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Steel Products & Fabrication Solutions | Sudev Industries",
  description:
    "Sudev Industries - Your trusted manufacturer of high-quality steel products including rolling shutters, steel windows, door frames, and custom fabrication solutions. Established in 1999, offering durable, precise, and affordable steel products in Nagpur.",
  keywords:
    "rolling shutters, steel windows, door frames, fabrication solutions, steel products, custom fabrication, rolling shutter suppliers, steel window manufacturers, fabrication services, Nagpur steel products"
};

export default function ProductsPage() {
  return (
    <>
      <header className="relative">
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white">
          Premium Steel Products & Fabrication Solutions
        </h1>
        <Image
          src="/product-bg.avif"
          alt="Sudev Industries Steel Products and Fabrication Solutions"
          width={1000}
          height={1000}
          className="h-96 w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/50" />
      </header>
      <main>
        <article className="mx-auto max-w-6xl px-4">
          <section className="py-20">
            <SectionHead title="Our Products" />
            <div className="mt-20 space-y-10">
              {Object.entries(Products).map(([key, product]) => (
                <ProductCard
                  key={key}
                  image={`/product/${product.image}`}
                  name={product.name}
                  price={product.price}
                  id={key}
                  unit={product.unit || "kg"}
                >
                  {product.description}
                </ProductCard>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

function ProductCard({
  image,
  name,
  price,
  id,
  unit,
  children
}: {
  image: string;
  name: string;
  price: number;
  id: string;
  unit: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="flex flex-col gap-6 sm:flex-row">
      <Image
        src={image}
        alt={`${name} product image`}
        width={600}
        height={400}
        className="h-auto w-full sm:w-96 lg:w-[30rem]"
      />
      <div>
        <h3 className="pt-2 text-left text-xl font-bold uppercase text-neutral-900 dark:text-neutral-100">
          {name}
        </h3>
        <p className="mt-2 flex items-baseline gap-x-2">
          <span className="text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-300">
            ₹{price}
          </span>
          <span className="text-base uppercase text-neutral-600 dark:text-neutral-300">
            /{unit}
          </span>
        </p>
        <p className="mt-6">{children}</p>
      </div>
    </div>
  );
}
