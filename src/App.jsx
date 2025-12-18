import styles from "./style";
import {
  Experiences,
  Skills,
  GetInTouch,
  Footer,
  Navbar,
  Hero,
  AppShowcase,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div
      className="px-4 sm:px-8 md:px-16 flex justify-center items-center"
      style={{
        overflow: "hidden",
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgb(1 6 12 / 85%)",
        backdropFilter: "blur(12px)",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        zIndex: 50,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Skills />
        <Experiences />
        <AppShowcase />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
