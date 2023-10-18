import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-green-300 h-[80vh] max-container padding-container relative z-30 py-[100px]">
      <div className="flex flex-col lg:flex-row gap-y-10 justify-between items-start">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="Hilink" width={80} height={80} />
        </Link>
        {FOOTER_LINKS.map((link) => {
          return (
            <div>
              <h2 className="mb-5 text-black font-bold text-[18px]">
                {link.title}
              </h2>
              {link.links.map((link) => (
                <Link
                  href="#"
                  key={link}
                  className="flex flex-col mb-4 text-gray-30"
                >
                  {link}
                </Link>
              ))}
            </div>
          );
        })}

        <div>
          <h2 className="mb-5 text-black font-bold text-[18px]">
            {FOOTER_CONTACT_INFO.title}
          </h2>
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <p className="regular-16 mb-4">
              {link.label}:<span className=" ml-10">{link.value}</span>
            </p>
          ))}
        </div>
        <div>
          <h2 className="mb-5 text-black font-bold text-[18px]">
            {SOCIALS.title}
          </h2>
          <div className="flex gap-x-4">
            {SOCIALS.links.map((link) => (
              <Link href="#">
                <Image src={link} alt="Icon" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
