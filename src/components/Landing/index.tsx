import { useParallax } from "react-scroll-parallax";
import boat from "/boat.jpeg";
import decor1 from "/decor1.png";
import Hero from "../Hero";
import About from "../About";

const Landing = () => {
  const { ref } = useParallax<HTMLImageElement>({ speed: 200 });
  return (
    <div className="bg-[#020024]">
      <div
        className="h-screen w-screen bg-cover bg-bottom bg-blend-darken"
        style={{ backgroundImage: `url(${boat})` }}
      >
        <Hero />
      </div>
      <About />
      <div className="relative h-screen  bg-[#020024]">
        <h1 className="text-white">Lalala</h1>

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
