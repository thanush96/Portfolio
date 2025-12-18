import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} my-8 sm:my-12 md:my-16 px-4 py-8 sm:px-8 sm:py-10 md:px-16 md:py-12 sm:flex-row flex-col bg-black-gradient-2 rounded-[16px] sm:rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col text-center sm:text-left">
      <h2 className="font-poppins font-semibold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] text-white leading-[38px] sm:leading-[48px] md:leading-[58px] lg:leading-[66px]">
        Let's Work Together!
      </h2>
      <p className="font-poppins font-normal text-dimWhite max-w-[470px] mt-4 sm:mt-5 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30.8px]">
        I'm available for freelance projects and full-time opportunities.
        Let's build something amazing together!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-8 w-full sm:w-auto`}>
      <a
        href="mailto:thanushkanth96@icloud.com"
        className="py-4 px-8 sm:py-4 sm:px-8 md:py-5 md:px-10 font-poppins font-medium text-[15px] sm:text-[16px] md:text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-center whitespace-nowrap"
      >
        Get In Touch
      </a>
    </div>
  </section>
);

export default CTA;
