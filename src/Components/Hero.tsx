import Countdown from "./Countdown";
import DateTimeDisplay from "./DateTimeDisplay";

const Hero = () => (
  <>
    <section className="hero" id="inicio">
      <h1>Karinne & Victor</h1>
      <h2>Estamos nos casando!</h2>
      <DateTimeDisplay />
      <Countdown />
    </section>
  </>
);

export default Hero;
