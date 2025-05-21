import Countdown from "./Countdown";
import DateTimeDisplay from "./DateTimeDisplay";
import logo from "../assets/Logo_verde_dourado.png";

const Hero = () => (
  <>
    <section className="hero" id="inicio">
      <img src={logo} alt="Logo" className="hero-image" />

      <DateTimeDisplay />
      <Countdown />
    </section>
  </>
);

export default Hero;
