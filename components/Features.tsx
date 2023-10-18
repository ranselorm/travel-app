import Image from "next/image";
import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 md:px-[100px] h-full">
      <h2 className="lg:text-[30px] text-[20px] bold-52  mb-[40px]">
        Our Features
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start">
        <div className="relative w-[440px] h-[800px] -mt-[50px] hidden xl:flex">
          <Image
            src="/phone.png"
            alt="phone"
            fill
            className="object-contain feature-phone"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-wrap justify-between items-center ml-[50px]">
            {FEATURES.map((feature, index) => (
              <div
                className="xl:max-w-[350px] w-full flex flex-col gap-y-4 mb-10"
                key={index}
              >
                <div
                  className={`w-[80px] h-[80px] rounded-full bg-green-50 flex items-center justify-center`}
                >
                  <Image src={feature.icon} alt="icon" width={35} height={35} />
                </div>
                <h2 className="lg:text-[30px] text-[20px] font-bold capitalize leading-9">
                  {feature.title}
                </h2>
                <p className="text-gray-30">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
