import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/utils/apiRquest";

const Page = async () => {
  const blogs = await getBlogs();

  return (
    <main>
      <div className="bg-[url('/blog-top.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 py-16 sm:py-20">
          <h2 className="text-center font-source_serif text-3xl font-bold text-white sm:text-4xl">
            Blog
          </h2>
        </div>
      </div>
      <section className="container py-12 md:py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
