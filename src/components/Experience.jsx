import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, duration, content, index }) => (
  <div
    className={`flex sm:flex-row flex-col p-5 sm:p-6 rounded-[16px] sm:rounded-[20px] ${
      index !== features.length - 1 ? "mb-5 sm:mb-6" : "mb-0"
    } bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#33bbcf]/20 hover:border-[#5ce1e6]/50 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(92,225,230,0.3)] cursor-pointer`}
  >
    <div
      className={`w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4 sm:mb-0 flex-shrink-0`}
    >
      <img src={icon} alt="star" className="w-[75%] h-[75%] sm:w-[80%] sm:h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col sm:ml-4 ml-0">
      <h4 className="font-poppins font-semibold text-white text-[15px] sm:text-[17px] md:text-[18px] leading-[22px] sm:leading-[24px] mb-2">
        {title}
      </h4>

      <p className="font-poppins font-normal text-dimWhite text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] mb-3">
        {duration}
      </p>

      {content.map((item, idx) => {
        return (
          <div key={idx} className="mt-3 sm:mt-4">
            <h4 className="font-poppins font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] leading-[20px] sm:leading-[22px] mb-2">
              {item.title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[13px] sm:text-[14.5px] md:text-[16px] leading-[21px] sm:leading-[23px] md:leading-[24px] mb-3">
              {item.description}
            </p>

            <div
              className="flex flex-wrap gap-2 mt-2"
            >
              {item.technology.map((tech, techIdx) => {
                return (
                  <div
                    key={techIdx}
                    className="text-[11px] sm:text-[12px] md:text-[13px] font-poppins font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-[6px] bg-dimBlue text-secondary border border-secondary/20 hover:bg-secondary hover:text-primary transition-all"
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Experiences = () => (
  <dev>
    {/* <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        EXPERIENCE
      </h4>
    </div> */}

    <section
      id="experience"
      className={layout.section}
      style={{ alignItems: "flex-start" }}
    >
      <div className={layout.sectionInfo}>
        {features.map((feature, index) => {
          if (feature.id <= 2) {
            return <FeatureCard key={feature.id} {...feature} index={index} />;
          }
          return null;
        })}
      </div>

      <div
        className={`${layout.sectionImg} flex-col`}
        style={{ alignItems: "flex-start" }}
      >
        {features.map((feature, index) => {
          if (feature.id >= 3) {
            return <FeatureCard key={feature.id} {...feature} index={index} />;
          }
          return null;
        })}
      </div>
    </section>
  </dev>
);

export default Experiences;
