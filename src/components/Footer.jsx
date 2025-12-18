import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} py-4 sm:py-6 md:py-8 flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-4 sm:mb-6 w-full gap-4 md:gap-0`}>
      <div className="flex-[1] flex flex-col justify-start md:mr-8 mr-0">
        <h2 className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[26px] text-white mb-2 sm:mb-3">
          THANUSHKANTH PATHMANATHAN
        </h2>
        <div className="space-y-1.5 sm:space-y-2">
          <p className="font-poppins font-normal text-dimWhite text-[11px] sm:text-[12px] md:text-[13px] leading-[18px] sm:leading-[20px]">
            <span className="text-white font-medium">Address:</span> 31/4B, Melder PL, Nugegoda, Colombo, Sri Lanka
          </p>
          <p className="font-poppins font-normal text-dimWhite text-[11px] sm:text-[12px] md:text-[13px] leading-[18px] sm:leading-[20px]">
            <span className="text-white font-medium">Email:</span>{" "}
            <a href="mailto:thanushkanth96@icloud.com" className="hover:text-secondary transition-colors">
              thanushkanth96@icloud.com
            </a>
          </p>
          <p className="font-poppins font-normal text-dimWhite text-[11px] sm:text-[12px] md:text-[13px] leading-[18px] sm:leading-[20px]">
            <span className="text-white font-medium">Phone:</span>{" "}
            <a href="tel:+94756738889" className="hover:text-secondary transition-colors">
              +94 756 738 889
            </a>
          </p>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap gap-4 sm:gap-6 md:gap-0">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col min-w-[120px] sm:min-w-[140px]`}
          >
            <h4 className="font-poppins font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] text-white mb-2">
              {footerlink.title}
            </h4>
            <ul className="list-none space-y-1 sm:space-y-1.5">
              {footerlink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[11px] sm:text-[12px] md:text-[13px] leading-[18px] sm:leading-[20px] text-dimWhite hover:text-secondary cursor-pointer transition-colors"
                >
                  <a 
                    href={link.link}
                    target={link.link.startsWith('http') ? '_blank' : '_self'}
                    rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-3 sm:pt-4 border-t-[1px] border-t-[#3F3E45] gap-3">
      <p className="font-poppins font-normal text-center md:text-left text-[10px] sm:text-[11px] md:text-[12px] leading-[16px] sm:leading-[18px] text-dimWhite">
        Copyright Ⓒ 2025 Thanushkanth Pathmanathan. All Rights Reserved.
      </p>

      <div className="flex flex-row gap-2.5 sm:gap-3">
        {socialMedia.map((social) => (
          <div
            key={social.id}
            className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full bg-dimBlue hover:bg-blue-gradient flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            onClick={() => window.open(social.link)}
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
