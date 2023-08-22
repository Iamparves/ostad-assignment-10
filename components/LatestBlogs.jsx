import { getBlogs } from "@/utils/apiRquest";
import Link from "next/link";
import BlogCard from "./BlogCard";

const LatestBlogs = async () => {
  const blogs = await getBlogs(6);

  return (
    <section className="py-12 md:py-14 lg:py-20" id="blogs">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center font-source_serif text-secondary">
          <h2 className="mb-4 text-4xl font-bold">
            Latest from <span className="text-primary">LuminaLore</span>
          </h2>
          <p className="text-lg font-medium">
            Dive into our diverse collection of articles that explore topics
            ranging from philosophy to science, inviting you to ponder, learn,
            and grow.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            className="inline-block rounded-full bg-primary px-5 py-3 font-josefin text-lg font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
            href="/blog"
          >
            Read More Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
