import styles from "../style";

const GetInTouch = () => (
  <section
    className={`${styles.flexCenter} my-4 sm:my-6 md:my-8 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 sm:flex-row flex-col bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#33bbcf]/20 rounded-[12px] sm:rounded-[16px] shadow-lg hover:shadow-[0_0_30px_rgba(92,225,230,0.2)] transition-all`}
  >
    <div className="flex-1 flex flex-col text-center sm:text-left">
      <h2 className="font-poppins font-semibold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-white leading-[30px] sm:leading-[38px] md:leading-[42px] lg:leading-[48px]">
        Let's Work Together!
      </h2>
      <p className="font-poppins font-normal text-dimWhite max-w-[450px] mt-2 sm:mt-3 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] leading-[20px] sm:leading-[22px] md:leading-[24px]">
        I'm available for freelance projects and full-time opportunities.
        Let's build something amazing together!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-8 ml-0 sm:mt-0 mt-5 w-full sm:w-auto`}>
      <a
        href="mailto:thanushkanth96@icloud.com"
        className="py-3 px-6 sm:py-3.5 sm:px-7 md:py-4 md:px-8 font-poppins font-medium text-[13px] sm:text-[14px] md:text-[15px] text-primary bg-blue-gradient rounded-[8px] outline-none hover:scale-105 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(92,225,230,0.4)] w-full sm:w-auto text-center whitespace-nowrap"
      >
        Get In Touch
      </a>
    </div>
  </section>
);

export default GetInTouch;
