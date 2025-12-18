import { freelanceProjects } from "../constants";
import styles, { layout } from "../style";

const FreelanceCard = ({ icon, title, duration, content, index }) => (
  <div
    className={`flex sm:flex-row flex-col p-5 sm:p-6 rounded-[16px] sm:rounded-[20px] ${
      index !== freelanceProjects.length - 1 ? "mb-5 sm:mb-6" : "mb-0"
    } bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#33bbcf]/20 hover:border-[#5ce1e6]/50 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(92,225,230,0.3)] cursor-pointer`}
  >
    <div
      className={`w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4 sm:mb-0 flex-shrink-0`}
    >
      <img src={icon} alt="freelance" className="w-[75%] h-[75%] sm:w-[80%] sm:h-[80%] object-contain" />
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

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-poppins font-medium text-secondary text-[13px] sm:text-[14px] hover:text-white cursor-pointer mt-2 mb-3 py-2 px-4 rounded-[8px] bg-dimBlue hover:bg-secondary hover:text-primary transition-all"
              >
                View on Google Play →
              </a>
            )}

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

const Freelance = () => (
  <section id="freelance" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Freelance & <br className="sm:block hidden" /> Personal Projects
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In addition to my professional work, I've developed various freelance and
        personal projects that showcase my full-stack development capabilities and
        passion for creating innovative mobile applications.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {freelanceProjects.map((project, index) => (
        <FreelanceCard key={project.id} {...project} index={index} />
      ))}
    </div>
  </section>
);

export default Freelance;
