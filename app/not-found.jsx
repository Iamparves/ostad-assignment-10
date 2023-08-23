import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex h-[calc(100vh-60px)] items-center justify-center">
      <div className="w-[350px] rounded-lg bg-white pb-9 pt-4 text-center shadow-sm">
        <h2 className="mb-3 font-source_serif text-9xl font-bold text-primary/90">
          404
        </h2>
        <h3 className="mb-5 text-4xl font-bold text-primary/70">
          Page Not Found
        </h3>
        <Link
          className="mx-auto block w-36 rounded-full bg-primary/70 pb-2 pt-3 text-lg text-white transition-all duration-300 hover:bg-primary/90"
          href="/"
        >
          Go to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
