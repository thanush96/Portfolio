import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden ">
    <div
      className={`${styles.paddingX} ${styles.flexCenter}`}
      style={{
        overflow: "hidden",
        position: "fixed",
        top: 0,
        width: "100%",
        background: "rgb(1 6 12 / 70%)",
        backdropFilter: "blur(9px)",
        transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        zIndex: 10,
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
        <Clients />
        <Business />
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        <Stats />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
