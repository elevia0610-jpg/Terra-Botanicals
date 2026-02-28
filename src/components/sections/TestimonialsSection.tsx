import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Térra transformed my skincare routine. My skin has never felt this luminous and alive.",
    author: "Camille D.",
    title: "Verified Buyer",
  },
  {
    quote: "The Golden Serum is pure magic. I've tried everything, and nothing compares to this.",
    author: "Sophia R.",
    title: "Beauty Editor",
  },
  {
    quote: "Finally, a brand that delivers on its promise. Clean, effective, and truly luxurious.",
    author: "Maren L.",
    title: "Verified Buyer",
  },
];

const TestimonialsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="testimonials" className="bg-hickory py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <p className="reveal font-sans text-sm tracking-[0.3em] uppercase text-glow mb-4">
            Testimonials
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-pure">
            In Their Words
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.author}
              className={`reveal reveal-delay-${i + 1} text-center space-y-6`}
            >
              <div className="text-glow text-3xl font-serif">"</div>
              <p className="font-serif text-xl md:text-2xl font-light text-pure leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-sans text-sm tracking-wider text-glow">{testimonial.author}</p>
                <p className="font-sans text-xs tracking-wider text-stone">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
