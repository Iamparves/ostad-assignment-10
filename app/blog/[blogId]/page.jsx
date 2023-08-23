import { getBlogDetails } from "@/utils/apiRquest";
import formatDate from "@/utils/formatDate";
import Image from "next/image";

const Page = async ({ params: { blogId } }) => {
  const blog = await getBlogDetails(blogId);
  const { img, title, created_at, content } = blog;

  return (
    <section className="py-12 md:py-12 lg:py-14">
      <div className="container">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-white">
          <div className="relative h-[240px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src={`${img}?strip=all&lossy=1&resize=360%2C200&ssl=1`}
              fill
              className="object-cover"
              alt={title}
              sizes="(max-width: 1200px) 50vw"
            />
          </div>
          <div className="px-5 pt-7 text-center sm:px-7">
            <h3 className="mb-2 font-siliguri text-xl font-bold text-secondary sm:text-2xl">
              {title}
            </h3>
            <p className="font-source_serif font-medium text-secondary/80">
              Posted at: {formatDate(created_at)}
            </p>
          </div>
          <div className="p-5 sm:p-7">
            <p className="text-justify font-siliguri leading-relaxed text-gray-500 md:text-lg md:leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
