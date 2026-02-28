import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useRef } from "react";
import ingVideo from "@/assets/ingVideo.mp4";
const ingredients = [
  {
    name: "Bakuchiol",
    description: "A natural retinol alternative that smooths fine lines without irritation.",
    icon: "🌿",
  },
  {
    name: "Rosehip",
    description: "Rich in vitamins A & C, deeply nourishes and restores skin elasticity.",
    icon: "🌹",
  },
  {
    name: "Squalane",
    description: "Plant-derived moisture that mimics your skin's natural oils.",
    icon: "💧",
  },
  {
    name: "Turmeric",
    description: "Ancient anti-inflammatory that brightens and evens skin tone.",
    icon: "🫚",
  },
  {
    name: "Jojoba",
    description: "Balances oil production while creating a protective barrier.",
    icon: "🫒",
  },
  {
    name: "Chamomile",
    description: "Calms sensitive skin and reduces redness with gentle potency.",
    icon: "🌼",
  },
];

const IngredientsSection = () => {
  const ref = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const videoRef = useRef(null);
    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.75;
      }
    }, []);
  return (
    <section id="ingredients" className="relative overflow-hidden py-24 md:py-32" ref={ref}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[5%] z-0 opacity-0 animate-fade-in"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={ingVideo} type="video/mp4" />
      </video>
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <p className="reveal font-sans text-sm tracking-[0.3em] uppercase text-sand mb-4">
            Pure Ingredients
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-moon">
            Nature's Finest
          </h2>
        </div>

        <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ingredients.map((ingredient, i) => (
            <div
              key={ingredient.name}
              className="group relative flex flex-col items-center cursor-pointer"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="w-20 h-20 md:w-20 md:h-20 rounded-full bg-sand flex items-center justify-center text-4xl mb-4 group-hover:bg-soft-stone transition-colors duration-300">
                {ingredient.icon}
              </div>
              <h3 className="font-serif text-xl text-moon mb-2">{ingredient.name}</h3>
              <p
                className={`font-sans text-xs text-center text-pure max-w-[180px] transition-all duration-300 ${
                  activeIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
