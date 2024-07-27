/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <div>
      <p className="border-t px-6 border-gray-400 w-full"></p>
      <div className="flex justify-between items-center">
        <p className="text-xs mt-3 mb-10 text-gray-400 px-4">
          &copy; 2024 Darshil Gajul.
        </p>
        <p className="flex gap-3 px-4 -mt-3">
          {socialMedia.map(({ img, id, link }) => (
            <img src={img} alt={img} key={id} height={23} width={23} />
          ))}
        </p>
      </div>
    </div>
  );
};
export default Footer;
