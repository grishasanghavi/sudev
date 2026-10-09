import SectionHead from "../common/Heading";

const whyUsData = [
  {
    title: "Customization",
    description:
      "Every product and service can be tailored to match your specific requirements."
  },
  {
    title: "Uncompromising Quality",
    description:
      "We adhere to stringent quality standards, ensuring our products meet and exceed your expectations."
  },
  {
    title: "Affordable Solutions",
    description:
      "Superior quality doesn't have to come at a high cost—our offerings are competitively priced."
  },
  {
    title: "Timely Delivery",
    description:
      "We understand the value of time, which is why we ensure timely completion and delivery of every order."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="mx-auto max-w-6xl py-24">
      <div className="px-4">
        <SectionHead title="Why Choose Us?" />
      </div>
      <div className="mt-24 divide-y">
        {whyUsData.map((item, index) => (
          <section
            key={index}
            className="flex flex-col items-start justify-between border-t py-10 max-md:px-4 md:flex-row md:items-center"
          >
            <h3 className="text-2xl font-bold uppercase max-md:mb-4">
              {item.title}
            </h3>
            <p className="max-w-lg text-lg text-neutral-600 dark:text-neutral-300">
              {item.description}
            </p>
          </section>
        ))}
      </div>
    </section>
  );
}
