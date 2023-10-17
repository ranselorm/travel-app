import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="max-container padding-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="text-green-50">WE ARE HERE FOR YOU</p>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h2 className="text-[50px] bold-52 lg:bold-88 my-5 lg:mb-0 xl:max-w-[550px]">
            Guide You to Easy Path
          </h2>
          <p className="xl:max-w-[500px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="relative flexCenter max-container w-full lg:px-8 ">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center lg:rounded-5xl"
        />
        <div className="absolute bg-white flex py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src={"/meter.svg"}
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col">
              <div className="flex">
                <p className="text-gray-20 mr-10">Destination</p>
                <p className="text-green-50 font-bold">48 mins</p>
              </div>
              <p className="bold-20">Aguas Calientes</p>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="text-gray-20 mr-10">Start Track</p>
              </div>
              <p className="bold-20">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
