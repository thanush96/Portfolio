import styles from "../style";
import { discount, robot1 } from "../assets";
import GetStarted from "./GetStarted";
import { socialMedia } from "../constants";

// export default function App() {
//   return (
//     <div className="App">
//       <Typewriter text="This is a default text without any extra props" />
//       <br />
//       <Typewriter text="This is looping text" loop={true} />
//       <br />
//       <Typewriter text="This is looping slow text" loop={true} speed={500} />
//       <br />
//       <Typewriter
//         speed={200}
//         text={["this", "is", "text", "in", "array"]}
//         loop={true}
//       />
//       <br />
//       <Typewriter
//         speed={200}
//         text={["no", "cursor", ":)"]}
//         loop={true}
//         random={300}
//         cursor={false}
//       />
//     </div>
//   );
// }

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingTop} min-h-[calc(100vh-80px)]`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 md:py-0 py-4`}
      >
        <div className="flex flex-row items-center py-2 px-3 sm:py-[6px] sm:px-4 bg-discount-gradient rounded-[10px] mb-3 sm:mb-2">
          <img src={discount} alt="discount" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
          <p className="ml-2 text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal text-white">
            <span className="text-white">Full Stack </span> Developer
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] sm:text-[52px] text-[32px] text-white ss:leading-[100.8px] sm:leading-[68px] leading-[42px]">
            <span className="text-gradient">THANUSHKANTH</span>{" "}
            <br className="sm:block hidden" />
            <span className="text-gradient">PATHMANATHAN</span>
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h2 className="font-poppins font-medium ss:text-[32px] sm:text-[24px] text-[18px] text-white ss:leading-[45px] sm:leading-[36px] leading-[28px] mt-2">
          Full Stack Developer
        </h2>
        <p className="font-poppins font-normal text-dimWhite max-w-[470px] mt-4 sm:mt-5 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[28px] md:leading-[30.8px]">
          I am a highly motivated Full Stack Software Engineer with 5+ years of experience in
          developing and maintaining software applications, specializing in both frontend
          and backend development. Experienced in Angular, React, Next.js, Flutter, Node.js,
          and cloud platforms (GCP, AWS).
        </p>

        <div className="flex flex-row flex-wrap gap-4 md:mt-6 mt-5">
          {socialMedia.map((social) => (
            <div
              key={social.id}
              className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full bg-dimBlue hover:bg-blue-gradient flex items-center justify-center cursor-pointer transition-all hover:scale-110"
              onClick={() => window.open(social.link)}
            >
              <img
                src={social.icon}
                alt={social.id}
                className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot1}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
