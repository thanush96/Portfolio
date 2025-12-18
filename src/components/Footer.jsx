import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} py-8 sm:py-12 md:py-16 flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 sm:mb-10 w-full gap-8 md:gap-0`}>
      <div className="flex-[1] flex flex-col justify-start md:mr-10 mr-0">
        <h2 className="font-poppins font-semibold text-[18px] sm:text-[22px] md:text-[24px] leading-[26px] sm:leading-[30px] md:leading-[32px] text-white mb-4 sm:mb-5">
          THANUSHKANTH PATHMANATHAN
        </h2>
        <div className="space-y-3 sm:space-y-4">
          <p className="font-poppins font-normal text-dimWhite max-w-[312px] text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px]">
            <span className="text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">Address:</span><br />
            31/4B, Melder PL<br />
            Nugegoda, Colombo<br />
            Sri Lanka
          </p>
          <p className="font-poppins font-normal text-dimWhite max-w-[312px] text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px]">
            <span className="text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">Email:</span><br />
            <a href="mailto:thanushkanth96@icloud.com" className="hover:text-secondary transition-colors break-all">
              thanushkanth96@icloud.com
            </a>
          </p>
          <p className="font-poppins font-normal text-dimWhite max-w-[312px] text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px]">
            <span className="text-white font-medium text-[14px] sm:text-[15px] md:text-[16px]">Phone:</span><br />
            <a href="tel:+94756738889" className="hover:text-secondary transition-colors">
              +94 756 738 889
            </a>
          </p>
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap gap-6 sm:gap-8 md:gap-0">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col min-w-[140px] sm:min-w-[160px]`}
          >
            <h4 className="font-poppins font-medium text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[27px] text-white mb-3 sm:mb-4">
              {footerlink.title}
            </h4>
            <ul className="list-none space-y-2.5 sm:space-y-3">
              {footerlink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[22px] sm:leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors"
                >
                  <a 
                    href={link.link}
                    target={link.link.startsWith('http') ? '_blank' : '_self'}
                    rel={link.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="inline-block py-1"
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

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 sm:pt-7 md:pt-8 border-t-[1px] border-t-[#3F3E45] gap-4">
      <p className="font-poppins font-normal text-center md:text-left text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[20px] sm:leading-[24px] text-dimWhite">
        Copyright Ⓒ 2025 Thanushkanth Pathmanathan. All Rights Reserved.
      </p>

      <div className="flex flex-row gap-4 md:mt-0">
        {socialMedia.map((social) => (
          <div
            key={social.id}
            className="w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] rounded-full bg-dimBlue hover:bg-blue-gradient flex items-center justify-center cursor-pointer transition-all hover:scale-110"
            onClick={() => window.open(social.link)}
          >
            <img
              src={social.icon}
              alt={social.id}
              className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
