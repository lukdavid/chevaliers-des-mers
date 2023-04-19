import { ANCHORS } from "../utils/anchors";

const NavBar = () => (
  <nav className="fixed w-screen  bg-none backdrop-blur-lg drop-shadow-xl z-20 border-b-[1px] border-gray-200 z-40 ">
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <a href="#" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-8"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
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
        <ul className="mt-4 flex flex-col rounded-lg border max-md:bg-gray-400 border-gray-100  p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0">
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
              className="block rounded py-2 pl-3 pr-4 text-gray-200 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Plonger
            </a>
          </li>
          <li>
            <a
              href={`#${ANCHORS.gallery}`}
              className="block rounded py-2 pl-3 pr-4 text-gray-200 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Gallerie
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded py-2 pl-3 pr-4 text-gray-200 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;