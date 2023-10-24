/* eslint-disable tailwindcss/no-custom-classname */
import { ANCHORS } from "../utils/anchors";
import { GiScubaTanks } from "react-icons/gi/index";

const OFFERS: { desc: string; price: string }[] = [
  { desc: "Cotisation annuelle", price: "52€" },
  { desc: "License FFESSM", price: "43€" },
  { desc: "Plongée CO (membre)", price: "20€ (gonflage +3€)" },
  { desc: "Plongée CO (partenaire)", price: "22€ (gonflage +3€)" },
  { desc: "Plongée CO (externe)", price: "30€ (<70min) ou 50€ (≥70min)" },
  { desc: "Plongée CCR (membre)", price: "30€ (<70min) ou 50€ (≥70min)" },
  {
    desc: "Plongée CCR (externe)",
    price: "35€ (<70min) ou 60€ (≥70 min) ou 80€ (≥90min)",
  },
];

const DiveWithUs = () => (
  <section
    className="grid min-h-screen w-full grid-flow-row grid-cols-1 items-center pt-[70px] md:grid-cols-3 md:pt-[120px] xl:grid-cols-2"
    id={ANCHORS.join}
  >
    <div className="col-span-3 px-8 font-normal text-gray-100 md:col-span-2 lg:px-16">
      <h1 className="text-primary-100 mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-5xl">
        Rejoignez nos <span className="text-yellow-400">aventures</span>
      </h1>
      <p className="my-2 lg:text-lg">
        Plongeur invétéré ou bien du dimanche, vous êtes{" "}
        <b className="text-primary-200">bienvenu(e) aux Chevaliers des Mers</b>.
      </p>
      <h2 className="py-4 text-xl font-bold text-gray-100 md:text-2xl">
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
        className="ml-32 mt-16 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-300 px-5 py-3 text-center text-base font-medium text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
        rel="noreferrer"
      >
        <GiScubaTanks className="mr-2 h-12 w-6" />
        <span>Inscription au club</span>
      </a>
    </div>

    <img
      src="/jellyfish.png"
      className="animate-spin-slow m-auto w-1/3 max-w-[500px] max-md:hidden"
    />

    <div className="col-span-3 mx-2 my-4 max-w-[900px] overflow-x-auto md:mx-8 lg:col-span-2">
      <h2 className="py-4 text-xl font-bold text-gray-100 md:text-2xl">
        Tarifs 2023
      </h2>
      <table className="w-full rounded-xl text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="rounded-tl-lg px-6 py-3">
              Prestation
            </th>
            <th scope="col" className="rounded-tr-lg px-6 py-3">
              Tarif TTC
            </th>
          </tr>
        </thead>
        <tbody>
          {OFFERS.map(({ desc, price }) => (
            <tr
              key={desc}
              className="border-b bg-white last:border-b-0 dark:border-gray-700 dark:bg-gray-800"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {desc}
              </th>
              <td
                className="px-6 py-4 "
                dangerouslySetInnerHTML={{
                  __html: price
                    .replace(/€/g, "&thinsp;€")
                    .replace(/≥/g, "&ge;&thinsp;")
                    .replace(/</g, "&lt;&thinsp;")
                    .replace(/(?<=\d)min/g, "&thinsp;min"),
                }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <img
      src="/turtle.gif"
      className="col-span-3 mx-auto h-auto w-96"
      alt="tortue"
    />
  </section>
);

export default DiveWithUs;
