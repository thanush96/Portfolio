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
      className={`flex md:flex-row flex-col ${styles.paddingTop}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            {/* <span className="text-white">20%</span> Discount For{" "} */}
            <span className="text-white">Software </span> Engineer
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            {/* THANUSHKANTH <br className="sm:block hidden" />{" "} */}
            <span className="text-gradient">THANUSHKANTH</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1> */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I am a highly motivated software engineer with 3 of experience in
          developing and maintaining software applications, with a focus on
          fullstack development.
        </p>

        <div className="flex flex-row md:mt-6 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
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
