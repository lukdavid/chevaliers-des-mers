import type { FC } from "react";
import CarouselImage, { CarouselImageProps } from "./CarouselImage";

interface CarouselProps {
  images: CarouselImageProps[];
}

const Carousel: FC<CarouselProps> = ({ images }) => (
  <div
    id="indicators-carousel"
    className="relative w-full"
    data-carousel="static"
  >
    {/* // Carousel wrapper --> */}
    <div className="relative h-[400px] overflow-hidden rounded-lg md:h-[560px]">
      {images.map((image, index) => (
        <CarouselImage key={`carousel-image-${index}`} {...image} />
      ))}
    </div>
    {/* <!-- Slider indicators --> */}
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
      {images.map((image, index) => (
        <button
          type="button"
          key={`carousel-indicator-${index}`}
          className="h-3 w-3 rounded-full"
          aria-current="true"
          aria-label={`Image ${index + 1}`}
          data-carousel-slide-to={index}
        ></button>
      ))}
    </div>

    <button
      type="button"
      className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      data-carousel-prev
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
      data-carousel-next
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div>
);

export default Carousel;
