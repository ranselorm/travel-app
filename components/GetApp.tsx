import Image from "next/image";
import Button from "./Button";
const GetApp = () => {
  return (
    <section className="lg:h-[90vh] max-w-[1440px] w-full h-[100vh] bg-pattern xl:bg-cover bg-center bg-no-repeat">
      <div className="flex items-center flex-col xl:flex-row h-full text-white px-5 lg:px-10">
        <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
          <h2 className=" text-[40px] xl:text-[60px] leading-[60px] font-bold w-full lg:w-1/2">
            Get for free now!
          </h2>
          <p className="regular-18">Available on iOS and Android</p>
          <div className="flex flex-col xl:flex-row items-center gap-10 ">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green"
              full
            />
          </div>
        </div>
        <div className="xl:w-1/2 flex justify-center mt-[100px] xl:mt-0">
          <Image src="/phones.png" alt="Phones" width={500} height={1000} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
