import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, duration, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[80%] h-[80%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>

      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px]">
        {duration}
      </p>

      {content.map((item) => {
        return (
          <dev className={`${styles.marginCap}`}>
            <h4 className="font-poppins font-semibold text-white text-[14.5px] leading-[23.4px] mb-1">
              {item.title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              {item.description}
            </p>

            <dev
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {item.technology.map((tech) => {
                return (
                  <dev
                    style={{
                      color: "#5edae2",
                      fontSize: 14,
                      background: "#ffffff3d",
                      padding: "0.5px 10px",
                      margin: "0 5px 6px 0",
                      borderRadius: "4.5px",
                    }}
                  >
                    {tech}
                  </dev>
                );
              })}
            </dev>
          </dev>
        );
      })}
    </div>
  </div>
);

const Business = () => (
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

export default Business;
