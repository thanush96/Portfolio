import { skills } from "../constants";
import styles from "../style";

const Skills = () => (
  <section className={`${styles.flexCenter} my-6 sm:my-8`}>
    <div className={`grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-3 w-full px-2 sm:px-4`}>
      {skills.map((skill) => (
        <div 
          key={skill.id} 
          className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-[12px] bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#33bbcf]/20 hover:border-[#5ce1e6]/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(92,225,230,0.3)] cursor-pointer`}
        >
          <img src={skill.logo} alt={skill.name} className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] object-contain mb-1.5 sm:mb-2" />
          <p className="font-poppins font-medium text-[9px] sm:text-[10px] md:text-[11px] text-white text-center leading-tight">
            {skill.name}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
