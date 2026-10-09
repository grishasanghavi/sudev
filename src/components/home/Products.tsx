"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Products as ProductsData } from "@/constants/Products";
import { useRouter } from "next/navigation";
import SectionHead from "../common/Heading";

export default function Products() {
  const router = useRouter();

  const cards = Object.entries(ProductsData).map(([id, product]) => (
    <Card
      key={id}
      card={{
        src: product.image,
        title: product.name,
        category: product.description
      }}
      onClick={() => router.push(`/products#${id}`)}
    />
  ));

  return (
    <section className="h-full w-full py-20">
      <div className="px-4">
        <SectionHead title="Our Products" />
      </div>
      <Carousel items={cards} />
    </section>
  );
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14"
//           >
//             <p className="mx-auto max-w-3xl text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="/"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="mx-auto h-full w-full object-contain md:h-1/2 md:w-1/2"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
