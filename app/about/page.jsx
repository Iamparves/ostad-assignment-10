import MissionVisionCard from "@/components/MissionVisionCard";
import Image from "next/image";

const missionVisions = [
  {
    id: 1,
    title: "Empower Through Insights",
    description:
      "Empowering through profound insights, we kindle curiosity and drive lifelong learning, fostering personal and societal change.",
    icon: "/insight.png",
  },
  {
    id: 2,
    title: "Inspire Minds, Illuminate Paths",
    description:
      "Inspiring minds, our curated content sparks discussions, broadens perspectives, and guides readers to enlightened understanding.",
    icon: "/path.png",
  },
  {
    id: 3,
    title: "A World of Engaged Minds",
    description:
      "Envisioning an engaged world, we foster exploration, inquiry, and learning among diverse voices, contributing to a rich tapestry of wisdom.",
    icon: "/mind.png",
  },
  {
    id: 4,
    title: "Unity Through Wisdom",
    description:
      "Dreaming of global unity, we bridge cultures, generations, and disciplines, connecting a community driven by the pursuit of wisdom.",
    icon: "/unity.png",
  },
];

const Page = () => {
  return (
    <main>
      <div className="bg-[url('/about-top.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 py-16 sm:py-20">
          <h2 className="text-center font-source_serif text-3xl font-bold text-white sm:text-4xl">
            About
          </h2>
        </div>
      </div>
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <div className="mx-auto flex max-w-md flex-col-reverse items-center gap-7 text-center sm:max-w-none sm:flex-row sm:gap-5 sm:text-left md:gap-6 lg:gap-20">
            <div className="relative h-64 w-full overflow-hidden rounded-md sm:w-1/2 lg:h-80">
              <Image
                src="/about.jpg"
                fill
                className="object-cover"
                alt=""
                sizes="(max-width: 1200px) 50vw"
              />
            </div>
            <div className="font-source_serif sm:w-1/2">
              <h2 className="mb-5 text-3xl font-bold text-secondary">
                About Us
              </h2>
              <p className="text-secondary sm:text-[17px]">
                LuminaLore is more than a collection of words; it's a journey
                through ideas, insights, and stories that illuminate the mind.
                Get to know the minds behind the words and the passion that
                fuels our pursuit of wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center font-source_serif text-secondary">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Our Mission and <span className="text-primary">Vision</span>
            </h2>
            <p className="text-base font-medium sm:text-lg">
              Our vision is to create a global community of thinkers, learners,
              and explorers united by a thirst for wisdom.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {missionVisions.map((missionVision) => (
              <MissionVisionCard
                missionVision={missionVision}
                key={missionVision.id}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
