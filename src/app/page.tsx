import About from "@/components/home/About";
import Contact from "@/components/home/contact/Contact";
import Hero from "@/components/home/Hero";
import Inforgraphics from "@/components/home/Infographics";
import Products from "@/components/home/Products";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/Why";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="sr-only">
          Sudev Industries - Premium Rolling Shutters & Steel Products in Nagpur
        </h1>
      </header>
      <main>
        <article>
          <Hero />
          <About />
          <Products />
          <Inforgraphics />
          <WhyUs />
          <Testimonials />
          <Contact />
        </article>
      </main>
    </>
  );
}
