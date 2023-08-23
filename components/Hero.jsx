const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed">
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary/40 to-black/40">
        <div className="max-w-4xl space-y-5 px-3 text-center text-white md:space-y-7">
          <h1 className="font-josefin text-2xl font-bold sm:text-4xl md:text-5xl">
            Discover Insights and Knowledge
          </h1>
          <p className="text-base text-white/90 md:text-xl md:leading-relaxed">
            Welcome to LuminaLore, your source for thought-provoking articles,
            inspiring narratives, and a journey through the realm of wisdom and
            ideas.
          </p>
          <a
            className="inline-block rounded-full bg-secondary px-6 py-3 font-josefin text-lg font-medium transition-colors duration-300 hover:bg-primary"
            href="#blogs"
          >
            Explore Blogs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
