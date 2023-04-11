/* eslint-disable tailwindcss/no-custom-classname */
import { ANCHORS } from "../utils/anchors";

const About = () => (
  <div
    className="grid h-screen w-screen grid-flow-row grid-cols-1 md:grid-cols-3 xl:grid-cols-2"
    id={ANCHORS.about}
  >
    <div className="px-8 font-normal text-gray-100 md:col-span-2 lg:mt-32 lg:px-16 xl:col-span-1">
      <h1 className="text-primary-100 mb-4 mt-16 text-2xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl">
        Club de plongée associatif à{" "}
        <span className="text-yellow-400">Marseille </span>
      </h1>
      <p className="my-2 lg:text-lg">
        Les <em>Chevaliers des Mers</em> est une association de plongeurs basée
        au port de <b className="text-primary-200">Corbières</b> (Estaque). Nous
        plongeons toute l&apos;année sur les tombants et épaves de la{" "}
        <b className="text-primary-200">Côte Bleue</b> et du{" "}
        <b className="text-primary-200">Parc National des Calanques</b>.
      </p>
      <p className="my-2 lg:text-lg">
        Nous sommes principalement un club de plongeurs{" "}
        <b className="text-primary-200">autonomes</b> et équipés, mais nous
        organisons ponctuellement des formations lorsqu&apos;un encadrement est
        disponible.
      </p>
      <p className="my-2 lg:text-lg">
        Une partie des chevaliers pratique également la plongée en{" "}
        <b className="text-primary-200">circuit fermé</b> (recycleurs ♻️)
      </p>
      <img
        src={"/jellyfish.png"}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="animate-spin-slow opacity-8 m-auto w-1/3 max-w-md py-32"
      />
    </div>

    <div className="m-auto">
      <img src="/turtle.gif" className="m-auto object-cover py-16" />

      <img src="/fish.png" className="w-1/4 skew-y-2 px-4" />
    </div>
  </div>
);

export default About;
