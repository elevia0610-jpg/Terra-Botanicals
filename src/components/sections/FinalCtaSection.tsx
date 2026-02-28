import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalCtaSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-glow py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-8 md:px-16 text-center">
        <h2 className="reveal font-serif text-4xl md:text-6xl lg:text-7xl font-light text-hickory leading-tight mb-8">
          Your Skin Deserves
          <br />
          <em>the Extraordinary</em>
        </h2>
        <p className="reveal reveal-delay-1 font-sans text-base text-walnut max-w-lg mx-auto mb-12 leading-relaxed">
          Begin your journey with Térra. Discover formulas crafted with intention, 
          powered by nature, and designed to reveal your most radiant self.
        </p>
        <a
          href="#products"
          className="reveal reveal-delay-2 inline-block bg-hickory text-primary-foreground font-sans text-sm tracking-widest uppercase px-12 py-5 hover:bg-walnut transition-colors duration-300"
        >
          Shop the Collection
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
