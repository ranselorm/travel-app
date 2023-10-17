import Image from "next/image";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-16 xl:max-w-[520px] text-gray-30">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  width={24}
                  height={24}
                  alt="ratings"
                  key={index}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 underline ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />

          <Button
            type="button"
            title="How We Work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex-1 flex items-start">
        <div className="relative z-20 w-[268px] gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flex justify-between mb-10">
              <p className="regular-16 text-gray-20 flex-col flex">
                Location
                <span className="text-white bold-20">Aguas Calientes</span>
              </p>
              <AiOutlineClose className="text-white regular-16" />
            </div>
            <div className="flexBetween">
              <p className="regular-16 text-gray-20 flex-col flex">
                Distance <span className="text-white bold-20">173.28 mi</span>
              </p>
              <p className="regular-16 text-gray-20 flex-col flex">
                Elevation <span className="text-white bold-20">2.040 km</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
