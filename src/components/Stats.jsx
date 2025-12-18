import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-8 gap-4 sm:gap-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-col sm:flex-row min-w-[140px] sm:min-w-[200px] p-4 sm:p-3 rounded-[12px] bg-black-gradient-2 hover:scale-105 transition-transform`} >
        <h4 className="font-poppins font-semibold text-[36px] xs:text-[40px] sm:text-[44px] leading-[46px] xs:leading-[52px] sm:leading-[56px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal text-[13px] xs:text-[16px] sm:text-[18px] leading-[20px] xs:leading-[24px] sm:leading-[26px] text-gradient uppercase sm:ml-3 mt-1 sm:mt-0 text-center sm:text-left">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
