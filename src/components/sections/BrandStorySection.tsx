import { useScrollReveal } from "@/hooks/useScrollReveal";
import brandStory from "@/assets/brand-story.png";

const BrandStorySection = () => {
  const ref = useScrollReveal();

  return (
    <section id="story" className="bg-sand py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="reveal overflow-hidden">
            <img
              src={brandStory}
              alt="Botanical ingredients used in Térra formulations"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="reveal font-sans text-sm tracking-[0.3em] uppercase text-stone">
              Our Story
            </p>
            <h2 className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-hickory leading-tight">
              Rooted in
              <br />
              <em>Tradition</em>
            </h2>
            <div className="reveal reveal-delay-2 w-16 h-px bg-soft-stone" />
            <p className="reveal reveal-delay-2 font-sans text-base text-walnut leading-relaxed max-w-lg">
              Born from generations of botanical knowledge, Térra blends 
              time-honored herbal remedies with cutting-edge dermatological 
              science. Every ingredient is ethically sourced, every formula 
              meticulously crafted.
            </p>
            <p className="reveal reveal-delay-3 font-sans text-base text-walnut leading-relaxed max-w-lg">
              We believe your skin deserves the purest form of nature — 
              uncompromised, undiluted, and unapologetically luxurious.
            </p>
            <a
              href="#ingredients"
              className="reveal reveal-delay-4 inline-block font-sans text-sm tracking-widest uppercase text-hickory border-b border-hickory pb-1 hover:text-walnut hover:border-walnut transition-colors duration-300"
            >
              Explore Ingredients
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
