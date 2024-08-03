/* eslint-disable @next/next/no-img-element */
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <div>
      <p className="border-t px-6 border-gray-400 mx-3"></p>
      <div className="flex justify-between items-center">
        <p className="text-xs mt-3 mb-10 text-gray-400 px-4">
          &copy; 2024 Darshil Gajul.
        </p>
        <p className="flex gap-4 px-4 -mt-3">
          {socialMedia.map(({ img, id, link }) => (
             <a href={link} key={id} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={img} key={id} height={21} width={21} />
            </a>
            
          ))}
        </p>
      </div>
    </div>
  );
};
export default Footer;
