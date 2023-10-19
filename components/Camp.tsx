import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Campsite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-5xl rounded-r-5xl`}
    >
      <div className="flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="bg-green-50 p-4 rounded-full">
            <Image src="folded-map.svg" width={28} height={28} alt="map" />
          </div>
          <div className="text-white">
            <h4 className="bold-18">{title}</h4>
            <p className="regular-16">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <div className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt="persons"
                width={52}
                height={52}
                className="inline-block h-10 w-10 rounded-full"
              />
            ))}
          </div>
          <span className="bold-18 text-white">{peopleJoined}</span>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:py-20 xl:mb-20 lg:mb-10 lg:px-10 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px] xl:h-[640px] overflow-x-auto">
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <Campsite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 lg:-mt-60 px-6 lg:mr-6 ">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 w-full relative overflow-hidden rounded-3xl text-white">
          <h2 className="text-[32px]">
            <span className="font-bold">Feeling Lost </span>And Not Knowing The
            Way?
          </h2>
          <p className="regular-16 mt-10">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;
