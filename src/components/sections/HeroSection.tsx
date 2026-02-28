import heroProduct from "@/assets/hero-product.png";
import productVideo from "@/assets/prodVideo.mp4";
import { useEffect, useRef } from "react";
const HeroSection = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 animate-fade-in"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={productVideo} type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0 bg-moon/80 z-0" /> */}

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 py-8">
        <span className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-hickory">
          TÉRRA
        </span>
        <div className="hidden md:flex items-center gap-10 font-sans text-sm tracking-widest uppercase text-walnut">
          <a href="#story" className="hover:text-hickory transition-colors duration-300">Story</a>
          <a href="#products" className="hover:text-hickory transition-colors duration-300">Collection</a>
          <a href="#ingredients" className="hover:text-hickory transition-colors duration-300">Ingredients</a>
          <a href="#testimonials" className="hover:text-hickory transition-colors duration-300">Reviews</a>
        </div>
        <a
          href="#products"
          className="font-sans text-sm tracking-widest uppercase bg-hickory text-primary-foreground px-6 py-3 hover:bg-walnut transition-colors duration-300"
        >
          Shop
        </a>
      </nav>

      <div className="relative z-10 container mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-12 items-center pt-32 pb-20">
        
        {/* Left content */}
        <div className="space-y-8 animate-fade-up">
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-stone">
            Botanical Skincare
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-hickory">
            Nature's
            <br />
            <em className="font-light">Alchemy</em>
          </h1>
          <p className="font-sans text-base md:text-lg text-walnut max-w-md leading-relaxed">
            Where ancient botanical wisdom meets modern science. 
            Formulated for skin that radiates from within.
          </p>
          <a
            href="#products"
            className="inline-block bg-glow text-accent-foreground font-sans text-sm tracking-widest uppercase px-10 py-4 hover:shadow-card-hover transition-all duration-300"
          >
            Discover the Collection
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-fade-in" style={{ animationDelay: "1s" }}>
        {/* <span className="font-sans text-xs tracking-widest uppercase text-stone">Scroll</span> */}
        {/* <div className="w-px h-10 bg-soft-stone" /> */}
      </div>
    </section>
  );
};

export default HeroSection;