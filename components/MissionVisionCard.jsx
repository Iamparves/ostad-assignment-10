import Image from "next/image";

const MissionVisionCard = ({ missionVision }) => {
  const { title, description, icon } = missionVision;
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-md bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md lg:max-w-none lg:flex-row lg:items-start">
      <div className="shrink-0 rounded-full border-[8px] border-[#F9F9FE] p-2">
        <Image src={icon} width={60} height={60} alt="" />
      </div>
      <div className="text-center font-source_serif text-secondary lg:text-left">
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default MissionVisionCard;
