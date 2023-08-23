const Subscribe = () => {
  return (
    <section className="pb-12 md:pb-14 lg:pb-20">
      <div className="container">
        <div className="mx-auto max-w-4xl grid-cols-2 overflow-hidden rounded-lg bg-white shadow-xl shadow-black/5 md:grid">
          <div className="hidden bg-[url(/subscribe.jpg)] bg-cover bg-center bg-no-repeat md:block"></div>
          <div className="px-5 py-8 text-center sm:px-8 sm:py-12 md:text-left">
            <h2 className="mb-3 font-source_serif text-2xl font-bold text-secondary">
              Stay Informed and Inspired
            </h2>
            <p className="mb-10 font-source_serif text-secondary/80">
              Subscribe to our newsletter and be the first to receive fresh
              insights, exclusive content, and updates from LuminaLore.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-md border p-2 text-secondary outline-0"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="rounded-md border p-2 text-secondary outline-0"
              />
              <button
                type="submit"
                className="rounded-full bg-secondary p-2 font-semibold text-white transition-all duration-300 hover:bg-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
