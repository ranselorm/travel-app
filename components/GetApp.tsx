import Image from "next/image";
import Button from "./Button";
const GetApp = () => {
  return (
    <section className="h-[90vh] bg-pattern bg-cover bg-center bg-no-repeat ">
      <div className="flex items-center h-full text-white overflow-hidden">
        <div className="w-1/2 pl-10 flex flex-col gap-y-10">
          <h2 className="text-[60px] leading-[60px] font-bold w-1/2">
            Get for free now!
          </h2>
          <p className="regular-18">Available on iOS and Android</p>
          <div className="flex items-center gap-10">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green"
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image src="/phones.png" alt="Phones" width={500} height={1000} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
