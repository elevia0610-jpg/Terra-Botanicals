const FooterSection = () => {
  return (
    <footer className="bg-walnut py-16 md:py-20">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-semibold tracking-wide text-sand">
              TÉRRA
            </span>
            <p className="font-sans text-sm text-stone mt-4 leading-relaxed">
              Botanical skincare rooted in tradition, refined by science.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-soft-stone mb-6">Shop</h4>
            <ul className="space-y-3">
              {["Serums", "Creams", "Oils", "Sets"].map((item) => (
                <li key={item}>
                  <a href="#products" className="font-sans text-sm text-sand hover:text-glow transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-soft-stone mb-6">About</h4>
            <ul className="space-y-3">
              {["Our Story", "Ingredients", "Sustainability", "Press"].map((item) => (
                <li key={item}>
                  <a href="#story" className="font-sans text-sm text-sand hover:text-glow transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-soft-stone mb-6">Connect</h4>
            <ul className="space-y-3">
              {["Instagram", "Pinterest", "Newsletter", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-sans text-sm text-sand hover:text-glow transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-stone">
            © 2026 Térra Botanicals. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-sans text-xs text-stone hover:text-glow transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-stone hover:text-glow transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
