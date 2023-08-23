import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";
import Subscribe from "@/components/Subscribe";

const page = () => {
  return (
    <main>
      <Hero />
      <LatestBlogs />
      <Subscribe />
    </main>
  );
};

export default page;
