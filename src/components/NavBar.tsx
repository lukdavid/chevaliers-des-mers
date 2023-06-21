/* eslint-disable tailwindcss/no-custom-classname */
import { ANCHORS } from "../utils/anchors";
import { Fragment } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaCalendarDay,
  FaCloudSun,
} from "react-icons/fa/index";

const LINKS = [
  {
    url: "https://www.team-planning.com/?url=Q0sxNTY5MDg2OTM4MTU2OTY4ODg5OTczNjgkMnkkMTAkM0hQYnE3eGdKUFdmcndFYS8vQjJ4T3ZyS3dpYmFPbFQwdG9ISVpYS3RWU1hqaldIdTE3bi4%3D",
    icon: <FaCalendarDay size="1.5em" className="text-white" />,
    title: "Team Planning",
  },
  {
    url: "https://marine.meteoconsult.fr/meteo-marine/bulletin-detaille/port-78/previsions-meteo-l-estaque-aujourdhui",
    icon: <FaCloudSun size="1.5em" className="text-white" />,
    title: "Météo",
  },
  {
    url: "https://www.instagram.com/chevaliersdesmers/",
    icon: <FaInstagram size="1.5em" className="text-white" />,
    title: "Instagram",
  },
  {
    url: "https://www.facebook.com/people/Chevaliers-des-Mers/100092363448201/",
    icon: <FaFacebook size="1.5em" className="text-white" />,
    title: "Facebook",
  },
];

const NavBar = () => (
  <nav className="fixed z-40 w-screen border-b-[1px] border-gray-200 bg-[#02002415] bg-none drop-shadow-xl backdrop-blur-lg">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-8 py-2 md:py-4">
      <a href="#" className="flex items-center">
        <img
          src="/logo_casque.svg"
          className="mr-3 h-6 invert md:h-12"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-lg font-semibold text-white md:text-2xl">
          Chevaliers des Mers
        </span>
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4  font-medium dark:border-gray-700 max-md:bg-gray-400 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0">
          <li>
            <a
              href={`#${ANCHORS.about}`}
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 md:text-blue-700"
              aria-current="page"
            >
              À propos
            </a>
          </li>
          <li>
            <a
              href={`#${ANCHORS.join}`}
              className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Plonger
            </a>
          </li>
          <li>
            <a
              href={`#${ANCHORS.gallery}`}
              className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Galerie
            </a>
          </li>
          <li>
            <a
              href={`#${ANCHORS.contact}`}
              className="block rounded py-2 pl-3 pr-4 text-gray-100 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Contact
            </a>
          </li>
          <li className=" flex w-48 items-center justify-between pl-3 md:pl-6">
            {LINKS.map(({ url, icon, title }, index) => (
              <Fragment key={title}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Planning"
                  data-tooltip-target={`tooltip-bottom-${index + 1}`}
                  data-tooltip-placement="bottom"
                >
                  {icon}
                </a>
                <div
                  id={`tooltip-bottom-${index + 1}`}
                  role="tooltip"
                  className="tooltip invisible absolute z-10 inline-block  rounded-lg border border-gray-200 bg-white px-3 py-2 font-medium text-gray-900 opacity-0 shadow-sm"
                >
                  {title}
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </Fragment>
            ))}
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
