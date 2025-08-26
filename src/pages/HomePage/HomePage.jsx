import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Pets from "../../components/Pets/Pets";
import Reviews from "../../components/Reviews/Reviews";
import Accordion from "../../components/HomeAccordion/Accordion";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Pets />
      <Reviews />
      <Accordion />
    </>
  );
}
