/* eslint-disable tailwindcss/no-custom-classname */
import { ANCHORS } from "../utils/anchors";
import { MdScubaDiving } from "react-icons/md";

const DiveWithUs = () => (
  <div
    className="grid h-screen w-screen grid-flow-row grid-cols-1 md:grid-cols-3 xl:grid-cols-2"
    id={ANCHORS.join}
  >
    <div className="m-auto max-md:hidden">
      <img src="/turtle.gif" className="m-auto object-cover py-16" />

      <img src="/fish.png" className="w-1/4 skew-y-2 px-4" />
    </div>
    <div className="px-8 font-normal text-gray-100 md:col-span-2 lg:mt-32 lg:px-16 xl:col-span-1">
      <h1 className="text-primary-100 mb-4 mt-16 text-2xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl">
        Rejoignez nos <span className="text-yellow-400 ">aventures </span>
      </h1>
      <p className="my-2 lg:text-lg">
        Plongeur invétéré ou bien du dimanche, vous êtes{" "}
        <b className="text-primary-200">bienvenu(e) aux Chevaliers des Mers</b>.
      </p>
      <h2 className="text-xl font-bold text-gray-100">
        Conditions d&apos;accès
      </h2>
      <ul className="list-inside list-disc">
        <li>licence FFESSM ou équivalent ;</li>
        <li>
          Certificat d&apos;Aptitude ou de non-Contre-Indication (CACI) de moins
          d&apos;un an ;
        </li>
        <li>Cotisation au club à partir de 3 plongées</li>
      </ul>

      <a
        href="https://airtable.com/shr0UPW6i0ofH9Y5P"
        target="_blank"
        className="mt-16 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-300 px-5 py-3 text-center text-base font-medium text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 "
        rel="noreferrer"
      >
        <MdScubaDiving className="mr-2" />
        Inscription
      </a>

      <img
        src={"/corgy.png"}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="m-auto w-1/3 max-w-md py-32"
      />
    </div>
  </div>
);

export default DiveWithUs;
