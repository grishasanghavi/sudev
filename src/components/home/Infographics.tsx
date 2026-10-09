import { Breaker } from "../common/Breaker";
import { NumberTicker } from "../magicui/number-ticker";

export default function Inforgraphics() {
  return (
    <section
      id="info"
      className="mx-auto grid max-w-6xl grid-cols-1 divide-neutral-200 dark:divide-neutral-800 max-md:divide-y md:grid-cols-3 md:divide-x"
    >
      <Part number={25} unit="+" type="years of experience" />
      <Part number={100} unit="+" type="Happy Clients" />
      <Part number={110} unit="+" type="Projects Completed" />
    </section>
  );
}

interface PartProps {
  number: number;
  unit: string;
  type: string;
}

function Part({ number, unit, type }: PartProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <p className="text-5xl font-bold text-neutral-900 dark:text-neutral-100 md:text-6xl">
        <NumberTicker value={number} />
        {unit}
      </p>
      <Breaker className="my-4" />
      <p className="text-xl font-medium uppercase text-neutral-600 dark:text-neutral-400">
        {type}
      </p>
    </div>
  );
}
