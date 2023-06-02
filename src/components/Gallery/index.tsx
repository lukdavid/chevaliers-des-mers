/* eslint-disable tailwindcss/no-custom-classname */
import Carousel from "./Carousel";
import { CAROUSEL_IMAGES } from "../../utils/carouselImages";
import { ANCHORS } from "../../utils/anchors";

const Gallery = () => (
  <div className="relative h-screen px-4 py-48" id={ANCHORS.gallery}>
    <div className="m-auto  max-w-4xl">
      <h1 className=" text-2xl  font-extrabold leading-none tracking-tight text-blue-200 md:text-4xl lg:text-5xl">
        Galerie
      </h1>
      <p className="mb-4 text-blue-300">Quelques photos de nos plongées…</p>
    </div>
    <div className="m-auto max-w-4xl">
      <Carousel images={CAROUSEL_IMAGES} />
    </div>
  </div>
);

export default Gallery;
