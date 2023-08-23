import Loader from "@/components/Loader";

const Loading = () => {
  return (
    <section className="flex h-[calc(100vh-60px)] items-center justify-center">
      <Loader />
    </section>
  );
};

export default Loading;
