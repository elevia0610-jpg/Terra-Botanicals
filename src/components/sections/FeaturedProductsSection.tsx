import { useScrollReveal } from "@/hooks/useScrollReveal";
import productCream from "@/assets/product-cream.png";
import productSerum from "@/assets/product-serum.png";
import productOil from "@/assets/product-oil.png";

const products = [
  {
    name: "Velvet Cream",
    description: "Deep hydration with rosehip & squalane",
    price: "$128",
    image: productCream,
  },
  {
    name: "Golden Serum",
    description: "Brightening elixir with vitamin C & turmeric",
    price: "$98",
    image: productSerum,
  },
  {
    name: "Midnight Oil",
    description: "Overnight repair with bakuchiol & jojoba",
    price: "$112",
    image: productOil,
  },
];

const FeaturedProductsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="products" className="bg-pure py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <p className="reveal font-sans text-sm tracking-[0.3em] uppercase text-stone mb-4">
            The Collection
          </p>
          <h2 className="reveal reveal-delay-1 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-hickory">
            Curated Essentials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`reveal reveal-delay-${i + 1} group cursor-pointer`}
            >
              <div className="bg-moon p-8 mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-hickory">{product.name}</h3>
                  <span className="font-sans text-sm tracking-wider text-stone">{product.price}</span>
                </div>
                <p className="font-sans text-sm text-walnut">{product.description}</p>
                <button className="w-full bg-hickory text-primary-foreground font-sans text-sm tracking-widest uppercase py-4 hover:bg-walnut transition-colors duration-300 mt-4">
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
