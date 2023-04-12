/* eslint-disable tailwindcss/no-custom-classname */
import { MdScubaDiving, MdPlayArrow } from "react-icons/md";
import { ANCHORS } from "../utils/anchors";

const Hero = () => (
  <section className="h-screen" id={ANCHORS.home}>
    <div className="mx-auto px-4 py-16 text-center lg:px-12 lg:py-28">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
        Le Graal est <span className="text-primary-600">sous l&apos;eau</span> à{" "}
        <span className="text-yellow-500">Marseille</span>
      </h1>
      <div className="absolute bottom-0 m-auto">
        <p className="mb-8 text-xl font-medium text-gray-100  sm:px-16 lg:text-3xl xl:px-48">
          Les Chevaliers des Mers - Club de plongée associatif à Marseille
        </p>
        <p className="mb-8 text-lg font-normal text-gray-100  sm:px-16 lg:text-2xl xl:px-48">
          Plongeurs autonomes et enthousiastes, nous explorons les fonds
          mediterranéens et à la découverte de leurs trésors. Rejoignez nos
          aventures.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <a
            href={`#${ANCHORS.about}`}
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Qui sommes nous
            <MdPlayArrow />
          </a>
          <a
            href={`#${ANCHORS.join}`}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-300 px-5 py-3 text-center text-base font-medium text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
          >
            <MdScubaDiving className="mr-2" />
            Plonger avec nous
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
