import Countdown from "./Countdown";
import Separator from "./Separator";

const Hero = () => (
  <>
    <section className="hero" id="inicio">
      <h1>Karinne & Victor</h1>
      <h2>Estamos nos casando!</h2>
      <div className="date">28 de Junho de 2025</div>
      <Countdown />
    </section>
    <Separator />
  </>
);

export default Hero;
