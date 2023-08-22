import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const { id, img, title, short } = blog;

  return (
    <Link
      href={`/blog/${id}`}
      className="mx-auto max-w-[380px] bg-white text-center shadow-md transition-shadow duration-300 hover:shadow-sm"
    >
      <div className="relative h-48 w-full">
        <Image
          src={`${img}?strip=all&lossy=1&resize=360%2C200&ssl=1`}
          fill
          className="object-cover"
          alt={title}
          sizes="(max-width: 1200px) 50vw"
        />
      </div>
      <div className="space-y-4 p-5">
        <h2 className="text-secondary-2 font-siliguri font-semibold md:text-lg">
          {title}
        </h2>
        <p className="text-secondary-3 font-siliguri font-medium">{short}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
