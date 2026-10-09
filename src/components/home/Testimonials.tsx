import { Marquee } from "@/components/magicui/marquee";
import type { Rating } from "@/constants/Rating";
import { Ratings } from "@/constants/Rating";
import { cn } from "@/lib/utils";
import { HiMiniStar } from "react-icons/hi2";
import SectionHead from "../common/Heading";

export default function Testimonials() {
  return (
    <section id="customers" className="mx-auto max-w-6xl py-24">
      <div className="px-4">
        <SectionHead title="What Our customers say" />
      </div>
      <MarqueeDemo />
    </section>
  );
}

const firstRow = Ratings.slice(0, Ratings.length / 2);
const secondRow = Ratings.slice(Ratings.length / 2);

const ReviewCard = ({
  title,
  reviewer,
  location,
  review,
  rating
}: {
  title: string;
  reviewer: string;
  location: string;
  review: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden border p-6",
        "border-neutral-950/[.1] bg-neutral-950/[.01] hover:bg-neutral-950/[.05]",
        "dark:border-neutral-100/[.1] dark:bg-neutral-500/[.10] dark:hover:bg-neutral-50/[.15]"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <figcaption className="text-lg font-semibold dark:text-white">
              {reviewer}
            </figcaption>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {location}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <HiMiniStar key={"i" + i} className="text-amber-400" />
            ))}
          </div>
        </div>
        <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
          {title}
        </h3>
        <blockquote className="text-sm text-neutral-600 dark:text-neutral-400">
          {review}
        </blockquote>
      </div>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-24">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review: Rating, index: number) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review: Rating, index: number) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review: Rating, index: number) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-neutral-100 dark:from-neutral-950"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-neutral-100 dark:from-neutral-950"></div>
    </div>
  );
}
