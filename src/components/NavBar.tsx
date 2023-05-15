import { ANCHORS } from "../utils/anchors";
import { FaInstagram, FaFacebook } from "react-icons/fa/index";
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
              Gallerie
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
          <li className=" flex w-24 items-center justify-between pl-3 md:pl-6">
            <a
              href="https://www.instagram.com/chevaliersdesmers/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size="1.5em" className="text-white" />
            </a>
            <a
              href="https://www.facebook.com/people/Chevaliers-des-Mers/100092363448201/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size="1.5em" className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
