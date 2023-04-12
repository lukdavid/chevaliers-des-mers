import boat from "/boat.jpeg";
import decor1 from "/decor1.png";
import Hero from "../Hero";
import About from "../About";
import DiveWithUs from "../DiveWithUs";

const Landing = () => {
  return (
    <div className="bg-[#020024] ">
      {/* -mt-16 */}
      <div
        className="h-screen w-screen bg-cover bg-bottom bg-blend-darken"
        style={{ backgroundImage: `url(${boat})` }}
      >
        <Hero />
      </div>
      <About />
      <DiveWithUs />
      <div className="relative h-screen  bg-[#020024]">
        <img src={decor1} className="absolute bottom-0 left-0 w-2/5" />

        <img
          src={decor1}
          className="absolute bottom-0 right-0 w-2/5"
          style={{ transform: "rotateY(180deg)" }}
        />
      </div>
    </div>
  );
};

export default Landing;
